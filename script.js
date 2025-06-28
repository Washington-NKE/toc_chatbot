    // DeKUT FAQ Database with Regular Expressions
    const faqDatabase = [
        // Your existing FAQ database entries...
        // (Keep all your existing FAQ entries here)
    ];

    const API_KEY = "AIzaSyDDkokebkCwrK7irc5ZYX3af8DFuqanfbU";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    let conversationHistory = [];
    
    // Voice Recognition and Synthesis Setup
    let recognition;
    let isVoiceModeEnabled = false;
    let isListening = false;
    let isAutoSpeakEnabled = false;
    let currentlySpeaking = false;
    let isFocusMode = false;
    let hasUserInteracted = false;
    
    // Initialize ResponsiveVoice (no API key needed for non-commercial use)
    responsiveVoice.init();
    
    // Focus Mode Management
    function toggleFocusMode() {
        isFocusMode = !isFocusMode;
        const container = document.getElementById('chatbotContainer');
        const header = document.getElementById('chatHeader');
        const faqSuggestions = document.getElementById('faqSuggestions');
        const chatMessages = document.getElementById('chatMessages');
        const inputContainer = document.getElementById('inputContainer');
        const focusToggle = document.getElementById('focusToggle');
        const focusToggleText = document.getElementById('focusToggleText');

        if(isFocusMode) {
            container.classList.add('chat-focused');
            header.classList.add('minimized');
            faqSuggestions.classList.add('hidden');
            chatMessages.classList.add('expanded');
            inputContainer.classList.add('focused');
            focusToggle.classList.add('active');
            focusToggleText.textContent = '⬅️ Exit';
        } else {
            container.classList.remove('chat-focused');
            header.classList.remove('minimized');
            faqSuggestions.classList.remove('hidden');
            chatMessages.classList.remove('expanded');
            inputContainer.classList.remove('focused');
            focusToggle.classList.remove('active');
            focusToggleText.textContent = '💬 Focus';
        }

        setTimeout(() => {
            scrollToBottom();
        }, 500);
    }

    function autoEnableFocusMode(){
        if (!isFocusMode && hasUserInteracted) {
            setTimeout(() => {
                toggleFocusMode();
            }, 1000);
        }
    }

    function formatText(text) {
        if (!text) return '';
        
        let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formatted = formatted.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
        formatted = formatted.replace(/(\d+)\)\s/g, '<strong>$1)</strong> ');
        formatted = formatted.replace(/\n/g, '<br>');
        
        return formatted;
    }

    function addMessage(content, sender, isError = false) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const label = sender === 'bot' ? 'DeKUT Assistant' : 'You';
        const contentClass = isError ? 'message-content error-message' : 'message-content';
        
        const formattedContent = formatText(content);
        
        messageDiv.innerHTML = `
            <div>
                <div class="message-label">${label}</div>
                <div class="${contentClass}">
                    ${formattedContent}
                    ${sender === 'bot' ? `
                    <div class="message-controls">
                        <button class="speak-button" onclick="speakText(this)" data-text="${content.replace(/"/g, '&quot;')}" title="Read aloud">
                            🔊
                        </button>
                    </div>` : ''}
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Initialize Speech Recognition
    function initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = function() {
                isListening = true;
                updateVoiceStatus('Listening... Speak now');
                document.getElementById('voiceInputButton').classList.add('listening');
            };

            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                document.getElementById('messageInput').value = transcript;
                sendMessage(transcript);
            };

            recognition.onerror = function(event) {
                console.error('Speech recognition error:', event.error);
                updateVoiceStatus('Voice recognition error. Please try again.');
                isListening = false;
                document.getElementById('voiceInputButton').classList.remove('listening');
            };

            recognition.onend = function() {
                isListening = false;
                updateVoiceStatus('');
                document.getElementById('voiceInputButton').classList.remove('listening');
            };

            return true;
        }
        return false;
    }

    // Voice Mode Toggle
    function toggleVoiceMode() {
        if (!isVoiceModeEnabled) {
            if (initializeSpeechRecognition()) {
                isVoiceModeEnabled = true;
                document.getElementById('voiceModeToggle').classList.add('active');
                document.getElementById('voiceModeText').textContent = 'Voice Enabled';
                document.getElementById('voiceModeIcon').textContent = '🎤';
                updateVoiceStatus('Voice mode enabled. Click microphone to speak.');
            } else {
                alert('Speech recognition is not supported in your browser. Please use Chrome, Safari, or Edge.');
            }
        } else {
            isVoiceModeEnabled = false;
            if (recognition) {
                recognition.stop();
            }
            document.getElementById('voiceModeToggle').classList.remove('active');
            document.getElementById('voiceModeText').textContent = 'Enable Voice';
            document.getElementById('voiceModeIcon').textContent = '🎤';
            updateVoiceStatus('');
        }
    }

    // Auto Speak Toggle
    function toggleAutoSpeak() {
        isAutoSpeakEnabled = !isAutoSpeakEnabled;
        const button = document.getElementById('autoSpeakToggle');
        const text = document.getElementById('autoSpeakText');
        
        if (isAutoSpeakEnabled) {
            button.classList.add('active');
            text.textContent = 'Auto Speak On';
        } else {
            button.classList.remove('active');
            text.textContent = 'Auto Speak';
            responsiveVoice.cancel();
        }
    }

    // Voice Input Toggle
    function toggleVoiceInput() {
        if (!isVoiceModeEnabled) {
            toggleVoiceMode();
            return;
        }

        if (!isListening) {
            if (recognition) {
                recognition.start();
            }
        } else {
            if (recognition) {
                recognition.stop();
            }
        }
    }

    // Update Voice Status
    function updateVoiceStatus(message) {
        const statusElement = document.getElementById('voiceStatus');
        statusElement.textContent = message;
        statusElement.className = 'voice-status';
        
        if (message.includes('Listening')) {
            statusElement.classList.add('listening');
        } else if (message.includes('Speaking')) {
            statusElement.classList.add('speaking');
        }
    }

    // Text-to-Speech Function using ResponsiveVoice
    function speakText(button, text = null) {
        if (responsiveVoice.isPlaying()) {
            responsiveVoice.cancel();
            currentlySpeaking = false;
            if (button) {
                button.classList.remove('speaking');
                button.textContent = '🔊';
            }
            updateVoiceStatus('');
            return;
        }

        const textToSpeak = text || button.getAttribute('data-text');
        if (!textToSpeak) return;

        // Clean text for speech
        const cleanText = textToSpeak.replace(/<[^>]*>/g, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1');

        // Use ResponsiveVoice for TTS
        responsiveVoice.speak(cleanText, "UK English Female", {
            rate: 0.9,
            pitch: 1,
            volume: 0.8,
            onstart: function() {
                currentlySpeaking = true;
                if (button) {
                    button.classList.add('speaking');
                    button.textContent = '⏸️';
                }
                updateVoiceStatus('Speaking...');
            },
            onend: function() {
                currentlySpeaking = false;
                if (button) {
                    button.classList.remove('speaking');
                    button.textContent = '🔊';
                }
                updateVoiceStatus('');
            },
            onerror: function() {
                console.error('Speech synthesis error');
                currentlySpeaking = false;
                if (button) {
                    button.classList.remove('speaking');
                    button.textContent = '🔊';
                }
                updateVoiceStatus('');
            }
        });
    }

    // Check FAQ database for matches
    function findBestMatch(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        for (let faq of faqDatabase) {
            for (let pattern of faq.patterns) {
                if (pattern.test(message)) {
                    return faq.response;
                }
            }
        }
         
        return null;
    }

    // Get response from Gemini API
    async function getGeminiResponse(userMessage) {
        try {
            const contextualMessage = `As a Dedan Kimathi University of Technology (DeKUT) assistant, please answer this question: ${userMessage}. Provide accurate information about DeKUT specifically when possible.`;
            
            conversationHistory.push({
                role: "user",
                parts: [{ text: contextualMessage }]
            });

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: conversationHistory,
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const aiResponse = data.candidates[0].content.parts[0].text;

            conversationHistory.push({
                role: "model",
                parts: [{ text: aiResponse }]
            });

            return aiResponse;
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            return "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again later or contact DeKUT directly at +254-61-2055000.";
        }
    }

    function showTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        indicator.style.display = 'block';
        const messagesContainer = document.getElementById('chatMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        indicator.style.display = 'none';
    }

    // Main function to send messages
    async function sendMessage(message) {
        if (!message || message.trim() === '') return;
        
        const messagesContainer = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');

        hasUserInteracted = true;
        
        addMessage(message, 'user');
        messageInput.value = '';
        showTypingIndicator();
        
        setTimeout(async () => {
            hideTypingIndicator();
            
            const faqResponse = findBestMatch(message);
            let response;
            
            if (faqResponse) {
                response = faqResponse;
            } else {
                response = await getGeminiResponse(message);
            }
            
            addMessage(response, 'bot');
            autoEnableFocusMode();
            
            if (isAutoSpeakEnabled) {
                setTimeout(() => {
                    speakText(null, response);
                }, 500);
            }
        }, 1000 + Math.random() * 1000);
    }

    function handleSendMessage() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        if (message) {
            sendMessage(message);
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    }

    // Initialize App
    document.addEventListener('DOMContentLoaded', function() {
        // Check if ResponsiveVoice is ready
        if (responsiveVoice.voiceSupport()) {
            console.log('ResponsiveVoice is ready');
        } else {
            console.warn('ResponsiveVoice not supported');
        }
        
        document.getElementById('messageInput').focus();
        
        setTimeout(() => {
            addMessage("Hello! I'm the DeKUT Smart Assistant. I can help you with information about Dedan Kimathi University of Technology. Try asking me about our programs, admission process, fees, or any other university-related questions!", 'bot');
        }, 1000);
    });

    function scrollToBottom() {
        const messagesContainer = document.getElementById('chatMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    window.addEventListener('error', function(e) {
        console.error('Application error:', e.error);
    });

    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
    });
