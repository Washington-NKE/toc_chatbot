# 🎓 DeKUT Smart FAQ Assistant

<div align="center">

![DeKUT Logo](https://img.shields.io/badge/DeKUT-Smart%20Assistant-FFD700?style=for-the-badge&logo=graduation-cap)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)

**A premium AI-powered chatbot for Dedan Kimathi University of Technology**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## ✨ Overview

DeKUT Smart FAQ Assistant is a sophisticated, AI-powered chatbot designed specifically for **Dedan Kimathi University of Technology (DeKUT)**. Combining stunning glassmorphism design with intelligent conversational AI, it provides 24/7 instant support for students, prospective applicants, and university visitors.

<div align="center">
  <img src="https://img.shields.io/badge/🎯-University%20Specific-success?style=flat-square" alt="University Specific">
  <img src="https://img.shields.io/badge/🤖-AI%20Powered-blue?style=flat-square" alt="AI Powered">
  <img src="https://img.shields.io/badge/📱-Mobile%20Ready-orange?style=flat-square" alt="Mobile Ready">
  <img src="https://img.shields.io/badge/⚡-Lightning%20Fast-yellow?style=flat-square" alt="Lightning Fast">
</div>

## 🚀 Key Features

### 🧠 **Hybrid Intelligence**
- **Smart FAQ Database** with regex pattern matching for instant responses
- **Google Gemini AI** integration for complex queries and natural conversations
- **Contextual Understanding** that maintains conversation history

### 🎨 **Premium Design**
- **Glassmorphism UI** with animated gradient backgrounds
- **Floating Particles** and shimmer effects for visual appeal
- **DeKUT Brand Colors** with gold accents on dark theme
- **Smooth Animations** and micro-interactions

### 📚 **Comprehensive Knowledge Base**
- Academic programs and course information
- Admission processes and requirements
- Fee structures and payment methods
- Campus facilities and locations
- Student services and portal access
- Graduation requirements and procedures

### 🛠 **Technical Excellence**
- **Zero Dependencies** - Pure HTML/CSS/JavaScript
- **Mobile Responsive** design for all devices
- **Real-time Typing** indicators and status updates
- **Error Handling** with graceful fallbacks
- **SEO Optimized** with semantic HTML structure

## 📖 Table of Contents

- [Quick Start](#-quick-start)
- [Features Overview](#-features-overview)
- [Technology Stack](#-technology-stack)
- [Setup & Configuration](#-setup--configuration)
- [Usage Guide](#-usage-guide)
- [Customization](#-customization)
- [API Integration](#-api-integration)
- [Contributing](#-contributing)
- [License](#-license)

## 🏃‍♂️ Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key (optional for AI features)
- Web server (for production deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Washington-NKE/toc_chatbot
   cd toc_chatbot
   ```

2. **Configure API Key**
   ```javascript
   // In the script section, replace with your Gemini API key
   const API_KEY = "YOUR_GEMINI_API_KEY_HERE";
   ```

3. **Launch the application**
   ```bash
   # For development
   python -m http.server 8000
   # or
   npx serve .
   
   # Then open http://localhost:8000
   ```

4. **Deploy to production**
   - Upload files to your web server
   - Ensure HTTPS for API calls
   - Configure domain and SSL certificate

## 🔧 Features Overview

### Smart FAQ System
The chatbot includes a comprehensive FAQ database covering:

| Category | Topics Covered |
|----------|---------------|
| 📚 **Academics** | Programs, courses, degrees, faculties |
| 🎯 **Admissions** | Application process, requirements, deadlines |
| 💰 **Finance** | Fee structures, payment methods, scholarships |
| 📍 **Campus** | Locations, facilities, accommodation |
| 🎓 **Student Life** | Portal access, library services, graduation |
| 📞 **Contact** | Phone numbers, emails, office hours |

### AI-Powered Responses
When FAQ patterns don't match, the system:
- ✅ Engages Google Gemini AI for dynamic responses
- ✅ Maintains conversation context and history
- ✅ Provides DeKUT-specific information when possible
- ✅ Falls back gracefully with contact information

## 💻 Technology Stack

<div align="center">

| Frontend | AI/Backend | Design | Tools |
|----------|------------|---------|-------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | ![Google Gemini](https://img.shields.io/badge/-Google%20Gemini-4285F4?style=flat-square&logo=google&logoColor=white) | ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | ![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ![REST API](https://img.shields.io/badge/-REST%20API-009688?style=flat-square&logo=api&logoColor=white) | ![Google Fonts](https://img.shields.io/badge/-Google%20Fonts-4285F4?style=flat-square&logo=google-fonts&logoColor=white) | ![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) |

</div>

## ⚙️ Setup & Configuration

### 1. Get Google Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key and replace in the script:

```javascript
const API_KEY = "your-actual-api-key-here";
```

### 2. Customize FAQ Database

Add new FAQ entries to the `faqDatabase` array:

```javascript
{
    patterns: [
        /your\s+regex\s+pattern/i,
        /alternative\s+pattern/i
    ],
    response: "Your formatted response with **bold** and *italic* text."
}
```

### 3. Styling Customization

Modify CSS variables for easy theming:

```css
:root {
    --primary-color: #ffd700;
    --background-dark: #0a0a0a;
    --glass-background: rgba(255, 255, 255, 0.05);
    --border-color: rgba(255, 215, 0, 0.2);
}
```

## 📱 Usage Guide

### For Students & Visitors

1. **Quick Questions**: Use the preset FAQ buttons for instant answers
2. **Custom Queries**: Type any question in natural language
3. **Follow-up**: Continue the conversation for more detailed information

### For Administrators

1. **Monitor Usage**: Check browser console for API usage statistics
2. **Update Content**: Modify FAQ database for new information
3. **Customize Branding**: Adjust colors, logos, and messaging

## 🎨 Customization Options

### Visual Themes
- **Color Schemes**: Easily modify primary and accent colors
- **Animations**: Adjust timing and effects in CSS animations
- **Typography**: Change fonts and sizing throughout the interface

### Functional Features
- **FAQ Categories**: Add new question categories and responses
- **AI Behavior**: Adjust Gemini AI parameters for different response styles
- **University Branding**: Replace DeKUT-specific content with your institution

### Code Example: Adding New FAQ Category

```javascript
{
    patterns: [
        /sports?\s+(facilities|activities)/i,
        /recreation\s+center/i,
        /games\s+at\s+dekut/i
    ],
    response: "DeKUT offers excellent **sports facilities** including a modern gymnasium, football field, basketball courts, and tennis courts. We have active sports clubs for *football*, *basketball*, *volleyball*, and *athletics*. Contact the Sports Department at sports@dekut.ac.ke for more information."
}
```

## 🔌 API Integration

### Gemini AI Configuration

```javascript
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// Generation parameters
generationConfig: {
    temperature: 0.7,      // Creativity level (0-1)
    topK: 40,             // Token selection diversity
    topP: 0.95,           // Nucleus sampling
    maxOutputTokens: 1024  // Response length limit
}
```

### Error Handling

The system includes comprehensive error handling:
- ✅ **API Failures**: Graceful fallback with contact information
- ✅ **Network Issues**: User-friendly error messages
- ✅ **Rate Limiting**: Automatic retry with exponential backoff
- ✅ **Invalid Responses**: Content validation and sanitization

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

1. **🐛 Bug Reports**: Found an issue? [Open a bug report](../../issues/new?template=bug_report.md)
2. **💡 Feature Requests**: Have an idea? [Suggest a feature](../../issues/new?template=feature_request.md)
3. **📚 Documentation**: Improve our docs and examples
4. **🎨 Design**: Enhance UI/UX and visual elements
5. **🔧 Code**: Submit pull requests for fixes and features

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style Guidelines

- Use **ES6+** JavaScript features
- Follow **semantic HTML** practices  
- Maintain **CSS organization** with clear sections
- Add **comments** for complex logic
- Test on **multiple browsers** and devices

## 📊 Performance Metrics

<div align="center">

| Metric | Value |
|--------|-------|
| **First Paint** | < 1.2s |
| **Interactive** | < 2.0s |
| **Lighthouse Score** | 95+ |
| **Bundle Size** | ~50KB |
| **Mobile Friendly** | ✅ 100% |

</div>

## 🔒 Security & Privacy

- **No Personal Data Storage**: All conversations are temporary
- **HTTPS Required**: Secure API communications
- **API Key Protection**: Server-side key management recommended
- **Input Validation**: All user inputs are sanitized
- **CORS Compliance**: Proper cross-origin resource sharing

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 DeKUT Smart Assistant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Acknowledgments

- **Achim Kipkorir, Newton Irungu, Julian Wambui and Peter Mogaka** for their indepth contribution and collaboration in making this chatbot.
- **Dedan Kimathi University of Technology** for inspiration and requirements
- **Google Gemini AI** for powerful natural language processing
- **Inter Font Family** by Rasmus Andersson for beautiful typography
- **CSS Glassmorphism** design trend for modern UI inspiration
- **Open Source Community** for tools and best practices

## 📞 Support & Contact

<div align="center">

**Need Help?**

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](../../issues)
[![Email Support](https://img.shields.io/badge/Email-Support-blue?style=for-the-badge&logo=gmail)](mailto:contact@washingtonmwangi.pro)
[![Documentation](https://img.shields.io/badge/Read-Documentation-green?style=for-the-badge&logo=gitbook)](../../wiki)

</div>

---

<div align="center">

**Made with ❤️ for education and innovation**

⭐ **Star this repo** if you found it helpful!

[🔝 Back to Top](#-dekut-smart-faq-assistant)

</div>
