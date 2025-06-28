const faqDatabase = [
    {
        patterns: [
            /what\s+programs?\s+(does\s+dekut\s+offer|are\s+available)/i,
            /courses?\s+(offered|available)\s+at\s+dekut/i,
            /degrees?\s+at\s+dekut/i,
            /what\s+can\s+i\s+study\s+at\s+dekut/i,
            /faculties\s+at\s+dekut/i
        ],
        response: "DeKUT offers programs in **Engineering**, **Pure & Applied Sciences**, **Computing & Information Technology**, **Business & Management**, **Architecture & Built Environment**, and **Health Sciences**. Our programs include *certificates*, *diplomas*, *undergraduate* and *postgraduate* degrees across various specialized fields."
    },
    {
        patterns: [
            /how\s+(do\s+i|can\s+i)\s+apply\s+to\s+dekut/i,
            /admission\s+process/i,
            /application\s+requirements/i,
            /how\s+to\s+join\s+dekut/i,
            /dekut\s+admission/i
        ],
        response: "To apply to DeKUT: **1)** Visit our official website at *dekut.ac.ke*, **2)** Create an account on the online application portal, **3)** Fill out the application form with your academic details, **4)** Upload required documents (certificates, ID copy, passport photo), **5)** Pay the application fee, and **6)** Submit your application. For specific program requirements, check our **admission guidelines**."
    },
    {
        patterns: [
            /school\s+fees/i,
            /tuition\s+fees?/i,
            /how\s+much\s+(does\s+it\s+cost|to\s+study)/i,
            /dekut\s+fees/i,
            /cost\s+of\s+studying/i,
            /fees\s+structure/i
        ],
        response: "DeKUT fees vary by program level. Approximate annual fees: Certificate programs: KSh 40,000-60,000. Diploma programs: KSh 60,000-80,000. Undergraduate degrees: KSh 80,000-120,000. Postgraduate programs: KSh 100,000-150,000. Engineering and specialized programs may have higher fees. Contact the finance office for exact current rates and payment plans."
    },
    {
        patterns: [
            /where\s+is\s+dekut\s+(located|situated)/i,
            /dekut\s+location/i,
            /address\s+of\s+dekut/i,
            /how\s+to\s+get\s+to\s+dekut/i,
            /dekut\s+campus/i
        ],
        response: "DeKUT is located in Nyeri County, Kenya, along the Nyeri-Nyahururu Highway, about 2km from Nyeri town. Our main campus sits on a 1,000-acre piece of land with modern facilities. The university is easily accessible by road from Nairobi (about 150km) and other major towns. We also have satellite campuses in Nairobi CBD and Nakuru."
    },
    {
        patterns: [
            /graduation\s+requirements/i,
            /how\s+to\s+graduate/i,
            /what\s+do\s+i\s+need\s+to\s+graduate/i,
            /graduation\s+criteria/i,
            /requirements\s+for\s+graduation/i
        ],
        response: "To graduate from DeKUT, you must: Complete all required courses in your program with a minimum CGPA of 2.0 (C grade). Fulfill all academic requirements including industrial attachment/internship. Clear all financial obligations to the university. Submit and defend your final project/thesis (for applicable programs). Meet the minimum residence requirement. Apply for graduation during the specified periods."
    },
    {
        patterns: [
            /student\s+portal/i,
            /how\s+to\s+access\s+portal/i,
            /login\s+to\s+portal/i,
            /online\s+services/i,
            /student\s+system/i
        ],
        response: "To access the DeKUT student portal: Visit student.dekut.ac.ke. Use your student registration number as username. Your default password is usually your ID number. Once logged in, you can view grades, pay fees, register for units, check timetables, and access other student services. If you have login issues, contact the ICT department or visit the student services office."
    },
    {
        patterns: [
            /accommodation/i,
            /hostels?/i,
            /housing/i,
            /where\s+to\s+stay/i,
            /boarding/i
        ],
        response: "DeKUT provides on-campus accommodation in modern hostels with capacity for over 3,000 students. Facilities include furnished rooms, dining halls, study areas, and recreation facilities. Both single and shared rooms are available. Hostel fees range from KSh 25,000-45,000 per academic year. Applications are done online during registration. We also have a list of approved off-campus accommodation for students who prefer private housing."
    },
    {
        patterns: [
            /library/i,
            /books/i,
            /study\s+materials/i,
            /research\s+resources/i,
            /online\s+resources/i
        ],
        response: "The DeKUT Library offers extensive resources including over 50,000 books, e-books, journals, and digital databases. We provide 24/7 access to online resources, study spaces, computer labs, and research support services. The library has specialized collections for engineering, ICT, and sciences. Students can access resources remotely using their student portal credentials."
    },
    {
        patterns: [
            /contact\s+information/i,
            /phone\s+number/i,
            /email/i,
            /how\s+to\s+contact/i,
            /reach\s+dekut/i
        ],
        response: "DeKUT Contact Information: Main Phone: +254 (0) 61 2031000/2031001. Email: info@dkut.ac.ke. Physical Address: P.O. Box 657-10100, Nyeri, Kenya. Website: www.dekut.ac.ke. For specific departments, visit our website's contact page. We're also available on social media platforms for updates and quick inquiries."
    },
    {
        patterns: [
            /industrial\s+attachment/i,
            /internship/i,
            /attachment\s+requirements/i,
            /work\s+experience/i,
            /practical\s+training/i
        ],
        response: "Industrial attachment is mandatory for most DeKUT programs. Requirements: Minimum 3 months duration (varies by program). Must be relevant to your field of study. Requires supervision by qualified industry professional. Students must submit logbooks and reports. Arranged through the Career Services Office. Some programs have specific timing (usually during long vacations). Contact your department for specific attachment requirements."
    },
    {
        patterns: [
            /scholarships?/i,
            /financial\s+aid/i,
            /bursaries/i,
            /funding/i,
            /help\s+with\s+fees/i
        ],
        response: "DeKUT offers various financial support options: Government scholarships through HELB (Higher Education Loans Board). Merit-based scholarships for top performers. Need-based bursaries for underprivileged students. Work-study programs. Payment plans for fee installments. Contact the student welfare office for scholarship applications and requirements. External scholarship opportunities are also advertised on our notice boards and website."
    },

    // New entries based on your FAQ list
    {
        patterns: [
            /hostel\s+information/i,
            /find\s+hostel/i,
            /accommodation\s+details/i,
            /on\s*campus\s+housing/i,
            /external\s+hostels?/i
        ],
        response: "DeKUT's Directorate of Student Welfare (DSW) manages accommodation, both on-campus and external hostels. Allocation depends on eligibility (e.g., medical needs) and is coordinated by DSW. Contact DSW or check the accommodation section on the Student Welfare website for more information."
    },
    {
        patterns: [
            /join\s+(student\s+)?club/i,
            /student\s+organizations?/i,
            /clubs?\s+at\s+dekut/i,
            /start\s+a\s+club/i,
            /recognized\s+clubs?/i
        ],
        response: "DeKUT has ~37 recognized clubs (academic, social, religious, sports). To join or start a club: ✅ Pick your area of interest. ✅ Speak with the Director of Students' Welfare (deanofstudents@dkut.ac.ke). ✅ If establishing a new one, draft objectives and interim leadership, and apply via DSW and Deputy V.C. Academic."
    },
    {
        patterns: [
            /academic\s+counseling/i,
            /counseling\s+center/i,
            /student\s+guidance/i,
            /academic\s+support/i,
            /counseling\s+services/i
        ],
        response: "The Counseling Center, under Student Welfare, provides confidential support and academic guidance. Contact the Counseling Department via the Student Welfare Division for assistance with academic and personal matters."
    },
    {
        patterns: [
            /book\s+appointment\s+(with\s+)?(dean|advisor)/i,
            /meet\s+(dean|advisor)/i,
            /academic\s+advisor/i,
            /dean\s+appointment/i,
            /grievance\s+process/i
        ],
        response: "Follow the grievance/academic tree: ✅ Approach your Class Rep → Class Advisor → Department Chair → School Director → Director of Student Welfare. ✅ Alternatively, contact your Dean or Academic Advisor directly (via email or admin offices) to request an appointment."
    },
    {
        patterns: [
            /lost\s+and\s+found/i,
            /found\s+items?/i,
            /lost\s+something/i,
            /missing\s+items?/i
        ],
        response: "Contact DSW offices or the Security officers for lost items. There's also a lost and found area in Resource Center I where you can check for missing belongings."
    },
    {
        patterns: [
            /replace\s+student\s+id/i,
            /lost\s+student\s+id/i,
            /new\s+student\s+id/i,
            /id\s+replacement/i,
            /student\s+card/i
        ],
        response: "IDs are issued by the Admissions Office. For replacements: ✅ Report to Admissions or Registrar's Office. ✅ Provide a new digital passport photo and ID replacement fee (~KSh. 600). ✅ Use the same submission email: admissionsoffice@dkut.ac.ke"
    },
    {
        patterns: [
            /library\s+location/i,
            /borrow\s+books?/i,
            /library\s+services/i,
            /resource\s+center/i,
            /borrowing\s+rules/i
        ],
        response: "The Resource Centre houses the library and ICT labs. Borrowing requires: ✅ A valid student ID. ✅ Check-in at the library circulation desk—ask library staff for borrowing rules and borrowing periods."
    },
    {
        patterns: [
            /health\s+center/i,
            /medical\s+center/i,
            /healthcare\s+services?/i,
            /university\s+clinic/i,
            /medical\s+services?/i
        ],
        response: "Yes—DeKUT has a 24-hour University Medical Center/Health Services offering first aid and routine care. Contact +254 724 721 258 or medicaloffice@dkut.ac.ke for medical assistance."
    },
    {
        patterns: [
            /second\s+degree/i,
            /apply\s+for\s+another\s+degree/i,
            /additional\s+degree/i,
            /double\s+degree/i
        ],
        response: "For second degree details: ✅ Contact Registrar (Academic Affairs) or School of Graduate Studies. ✅ Check university policy on second-degree admission via the academic registrar."
    },
    {
        patterns: [
            /class\s+representative/i,
            /class\s+rep/i,
            /apply\s+to\s+be\s+class\s+rep/i,
            /class\s+rep\s+election/i
        ],
        response: "Class Reps are elected annually. To apply: ✅ Monitor Class Rep election notices issued at semester start. ✅ You may nominate yourself via your Department or current Class Rep."
    },
    {
        patterns: [
            /apply\s+for\s+graduation/i,
            /graduation\s+application/i,
            /when\s+to\s+apply\s+for\s+graduation/i,
            /graduation\s+forms?/i
        ],
        response: "To apply for graduation: ✅ Complete all coursework and meet requirements. ✅ Apply through the Academic Registrar using forms from the Registrar's Office. ✅ Meet any deadlines announced by your School or Registrar."
    },
    {
        patterns: [
            /graduation\s+ceremony/i,
            /when\s+is\s+graduation/i,
            /graduation\s+date/i,
            /ceremony\s+date/i
        ],
        response: "Graduation ceremonies are announced via official channels (Registrar's or School notices). Check the Institutional Calendar on DeKUT's website or contact the Academic Registrar for the 2025 date."
    },
    {
        patterns: [
            /degree\s+certificate/i,
            /get\s+my\s+certificate/i,
            /collect\s+certificate/i,
            /certificate\s+collection/i
        ],
        response: "After graduation, certificates are presented during the ceremony or available to collect later. For physical pick-up or mailing: ✅ Check with the Academic Registrar or Registry."
    },
    {
        patterns: [
            /name\s+misspelled/i,
            /wrong\s+name\s+on\s+certificate/i,
            /certificate\s+error/i,
            /name\s+correction/i
        ],
        response: "Report the issue to the Academic Registrar/Records Office immediately, providing ID proof and a written correction request for name corrections on certificates."
    },
    {
        patterns: [
            /transcripts?\s+(sent|to\s+employers?)/i,
            /official\s+transcripts?/i,
            /transcript\s+request/i,
            /send\s+transcripts?/i
        ],
        response: "Official transcripts are processed upon request (often with a fee). They can be sent directly to institutions or employers. Confirm the process with the Academic Registrar."
    },
    {
        patterns: [
            /verify\s+academic\s+records?/i,
            /academic\s+verification/i,
            /authenticate\s+records?/i,
            /certified\s+documents?/i
        ],
        response: "Use the Academic Registrar's Office for record verification. They authenticate records and can provide certified documents or verifications."
    },
    {
        patterns: [
            /internships?\s+help/i,
            /job\s+placement/i,
            /career\s+services?/i,
            /placement\s+assistance/i
        ],
        response: "The Directorate of Student Welfare and Career Services, along with faculty, organize internship and placement assistance. Engage via DSW or relevant School internship office."
    },
    {
        patterns: [
            /mistake\s+on\s+application/i,
            /fix\s+application\s+error/i,
            /correct\s+application/i,
            /application\s+correction/i
        ],
        response: "Contact Admissions Office immediately. They can correct errors before admission. After joining, contact the Registrar's Office for updates to your records."
    },
    {
        patterns: [
            /past\s+exam\s+papers?/i,
            /previous\s+papers?/i,
            /academic\s+resources/i,
            /exam\s+materials?/i,
            /repository/i
        ],
        response: "You can: ✅ Ask Resource Centre I library. ✅ Consult Course Instructors, who often provide materials. ✅ Search via the online DeKUT repository by visiting www.repository.dkut.ac.ke."
    },
    {
        patterns: [
            /pay\s+tuition/i,
            /school\s+fees\s+payment/i,
            /fee\s+payment/i,
            /where\s+to\s+pay\s+fees/i
        ],
        response: "Fees are paid through: ✅ Finance Office (in Resource Center I), likely via bank, cheques or e-citizen. ✅ Details are on the fee invoice or posted on student portal."
    },
    {
        patterns: [
            /pay\s+in\s+installments?/i,
            /installment\s+plans?/i,
            /payment\s+plans?/i,
            /partial\s+payments?/i
        ],
        response: "Installment plans may be available. Contact the Finance Office to confirm eligibility and deadlines for fee payment arrangements."
    },
    {
        patterns: [
            /payment\s+not\s+showing/i,
            /fee\s+payment\s+issue/i,
            /payment\s+not\s+reflected/i,
            /fee\s+balance\s+wrong/i
        ],
        response: "If payment isn't reflected: ✅ Verify transaction receipt. ✅ Provide proof to Finance Office for reconciliation and to update your account."
    },
    {
        patterns: [
            /fee\s+structure/i,
            /fee\s+invoice/i,
            /cost\s+breakdown/i,
            /fees\s+details?/i
        ],
        response: "Visit or request from the Finance Office or download via the student portal to get your fee structure or invoice."
    },
    {
        patterns: [
            /work\s*study\s+programs?/i,
            /part\s*time\s+work/i,
            /campus\s+employment/i,
            /student\s+jobs?/i,
            /work\s+study/i
        ],
        response: "Yes! Ask DSW about employment opportunities on campus or part-time roles. The DSW offices are located next to the Mankuli Center (Mess)."
    },
    {
        patterns: [
            /student\s+loan/i,
            /helb/i,
            /higher\s+education\s+loans?\s+board/i,
            /government\s+funding/i
        ],
        response: "DeKUT works with Kenyan funding schemes (e.g., HELB). Apply through: ✅ HELB portal and share loan offers with Finance or Registrar for fee payment arrangements. ✅ Get more guidance from DSW."
    },
    {
        patterns: [
            /register\s+for\s+courses?/i,
            /course\s+registration/i,
            /unit\s+registration/i,
            /academic\s+registration/i
        ],
        response: "Course registration is done online via the student portal, typically at the start of each trimester/semester. If physical, it occurs at your School Registry."
    },
    {
        patterns: [
            /admission\s+letter/i,
            /when\s+will\s+i\s+receive\s+admission/i,
            /acceptance\s+letter/i,
            /admission\s+confirmation/i
        ],
        response: "Once admitted, letters are issued by the Admissions Office, sent via email and downloadable from the portal."
    },
    {
        patterns: [
            /registration\s+(physical|online)/i,
            /how\s+to\s+register/i,
            /registration\s+process/i,
            /student\s+registration/i
        ],
        response: "Registration is mostly online, though some steps (ID collection, orientation) may be in-person. Confirm details per intake session."
    },
    {
        patterns: [
            /access\s+transcript/i,
            /download\s+transcript/i,
            /get\s+transcript/i,
            /academic\s+transcript/i
        ],
        response: "You may order/download transcripts via the student portal or request from the Department/Academic Registrar."
    },
    {
        patterns: [
            /letter\s+of\s+recommendation/i,
            /reference\s+letter/i,
            /recommendation\s+from\s+registrar/i,
            /official\s+letter/i
        ],
        response: "Yes—Registrar can issue official letters. Request via email (registraraa@dkut.ac.ke) with details and purpose."
    },
    {
        patterns: [
            /grading\s+system/i,
            /grade\s+scale/i,
            /marks\s+system/i,
            /gpa\s+system/i,
            /letter\s+grades?/i
        ],
        response: "The grading system used is on a scale with letter grades (A-F): A = 70-100% Excellent, B = 60-69% Good, C = 50-59% Satisfactory, D = 40-49% Pass, F = 0-39% Fail. Confirm with School Academic Office or handbook."
    },
    {
        patterns: [
            /collect\s+student\s+id/i,
            /get\s+student\s+id/i,
            /student\s+id\s+collection/i,
            /smart\s+card/i
        ],
        response: "ID smart cards are obtained after registration from the Admissions Office, pending submission of a passport photo and fee."
    },
    {
        patterns: [
            /miss\s+exam/i,
            /missed\s+exam/i,
            /deferred\s+exam/i,
            /exam\s+absence/i
        ],
        response: "You must provide a valid reason (e.g., medical certificate) to your Dean/Department via the Director of Student Welfare for a deferred exam."
    },
    {
        patterns: [
            /academic\s+leave/i,
            /deferment/i,
            /defer\s+studies?/i,
            /study\s+leave/i
        ],
        response: "Apply through your Department or School, then to the Registrar and Director of Welfare. Provide supporting documents (e.g., medical) for academic leave or deferment."
    },
    {
        patterns: [
            /minimum\s+entry\s+requirements?/i,
            /admission\s+requirements?/i,
            /entry\s+criteria/i,
            /kcse\s+requirements?/i
        ],
        response: "Entry requirements vary by programme. Admission criteria are posted per School, but generally require KCSE minimum grades (e.g., C+ or better). Check DeKUT's Admissions Handbook."
    },
    {
        patterns: [
            /documents?\s+(for\s+|needed\s+for\s+)?application/i,
            /required\s+documents?/i,
            /application\s+documents?/i,
            /what\s+documents?\s+do\s+i\s+need/i
        ],
        response: "For application, you'll need: ✅ Transcripts/certificates ✅ ID/birth certificate ✅ Passport photo ✅ Application form, application fee ✅ Additional programme-specific documents. Visit the Admissions portal on www.dkut.ac.ke."
    },
    {
        patterns: [
            /defer\s+admission/i,
            /postpone\s+admission/i,
            /delay\s+admission/i,
            /deferral\s+request/i
        ],
        response: "Contact Admissions Office with written deferral request; must comply with university policy and intake timelines."
    },
    {
        patterns: [
            /missed\s+deadline/i,
            /late\s+application/i,
            /deadline\s+passed/i,
            /application\s+extension/i
        ],
        response: "Occasional late application windows may open. Contact Admissions ASAP to request extension or ask about the next intake."
    },
    {
        patterns: [
            /does\s+dekut\s+offer\s+medicine/i,
            /medicine\s+degree/i,
            /medical\s+school/i,
            /mbchb/i
        ],
        response: "No. The university does NOT offer an MBChB or Medicine degree; health sciences are available through Nursing programs."
    },
    {
        patterns: [
            /does\s+dekut\s+offer\s+agriculture/i,
            /agriculture\s+school/i,
            /farming\s+courses?/i,
            /agricultural\s+programs?/i
        ],
        response: "No dedicated Agriculture school. However, Institute of Food Bioresources Technology may include related programmes."
    },
    {
        patterns: [
            /long\s+holiday/i,
            /academic\s+calendar/i,
            /semester\s+system/i,
            /trimester/i,
            /school\s+breaks?/i
        ],
        response: "DeKUT runs on trimesters (Jan–Apr, May–Aug, Sep–Dec). Breaks occur between terms and at year's end."
    },
    {
        patterns: [
            /login\s+credentials/i,
            /e\s*learning\s+portal/i,
            /password\s+reset/i,
            /login\s+problems?/i,
            /portal\s+access/i
        ],
        response: "Contact the IT/ICT Helpdesk or Admissions Office: ✅ You may need a password reset. ✅ Ensure correct format (e.g., student ID@dkut.ac.ke)."
    },
    {
        patterns: [
            /auditorium/i,
            /lecture\s+halls?/i,
            /where\s+is\s+auditorium/i,
            /multi\s*purpose\s+hall/i
        ],
        response: "The Resource Centre complex also includes multi-purpose halls and lecture theatres. Check campus maps or ask at the Registrar's office for specific locations."
    },
    {
        patterns: [
            /fail\s+exams?/i,
            /failed\s+exams?/i,
            /supplementary\s+exam/i,
            /repeat\s+course/i,
            /what\s+if\s+i\s+fail/i
        ],
        response: "Depending on severity: ✅ You may sit a supplementary exam. ✅ In severe cases, repeat the course/year. ✅ Senate decisions are communicated via the School Board."
    },
    {
        patterns: [
            /transport\s+services?/i,
            /university\s+transport/i,
            /bus\s+services?/i,
            /campus\s+transport/i,
            /tuk\s*tuks?/i
        ],
        response: "Yes: ✅ DeKUT provides transport from Nyeri town/Nyaribo and nearby estates. ✅ The campus also has university tuk-tuks for mobility on campus, especially for PWDs."
    }
];

    const API_KEY = "";
    const API_URL = ``;

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
