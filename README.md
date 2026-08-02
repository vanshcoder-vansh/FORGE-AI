# Forge AI

**One Conversation. Infinite Intelligence.**

Forge AI is an intelligent orchestration platform that automatically understands, plans, and executes complex tasks using multiple AI capabilities—all through a single conversation interface.

## 🚀 Features

- **Intelligent Orchestration**: Automatically breaks down complex requests into manageable tasks
- **Parallel Execution**: Independent tasks run simultaneously for faster results
- **Smart Validation**: Every output is validated before delivery
- **Artifact Management**: Generate and manage documents, code, images, websites, and more
- **Live Progress Tracking**: Real-time visualization of execution progress
- **Theme Customization**: Multiple themes and accent colors
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 📁 Project Structure

```
Forge-AI/
│
├── index.html              # Landing page
├── workspace.html          # Main workspace
├── projects.html           # Projects overview
├── login.html              # Authentication
├── signup.html             # Registration
│
├── assets/
│   ├── css/
│   │   ├── variables.css   # CSS custom properties
│   │   ├── reset.css       # Base reset styles
│   │   ├── layout.css      # Layout utilities
│   │   ├── navbar.css      # Navigation bar
│   │   ├── sidebar.css     # Side navigation
│   │   ├── workspace.css   # Main workspace layout
│   │   ├── chat.css        # Chat interface
│   │   ├── planner.css     # Task planner view
│   │   ├── artifacts.css   # Artifact management
│   │   ├── animations.css  # Animation keyframes
│   │   ├── responsive.css  # Media queries
│   │   └── themes.css      # Theme variations
│   │
│   ├── js/
│   │   ├── app.js          # Main application logic
│   │   ├── router.js       # Client-side routing
│   │   ├── api.js          # API communication
│   │   ├── websocket.js    # Real-time connections
│   │   ├── chat.js         # Chat functionality
│   │   ├── planner.js      # Planning logic
│   │   ├── artifacts.js    # Artifact handling
│   │   └── animations.js   # Animation utilities
│   │
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/             # Reusable HTML components
├── pages/                  # Additional pages
├── data/                   # Configuration files
└── README.md
```

## 🎨 Themes

Forge AI includes multiple built-in themes:

- **Dark** (default) - Easy on the eyes for extended use
- **Light** - Clean and bright
- **Midnight** - Deep blue tones
- **Forest** - Nature-inspired greens
- **Ocean** - Calming blues
- **Purple Haze** - Rich purples
- **Crimson** - Bold reds
- **Amber** - Warm ambers

### Accent Colors

Choose from various accent color schemes:

- Violet (default)
- Blue
- Emerald
- Rose
- Amber
- Cyan

## 🚀 Getting Started

1. Open `index.html` in your browser to view the landing page
2. Click "Start Workspace" to enter the main workspace
3. Type your request in the prompt area or select a suggestion card

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | Focus search |
| `Cmd/Ctrl + Enter` | Send message |
| `Escape` | Close sidebar (mobile) |

## 🎯 Workspace Components

### Navbar
- Logo and branding
- Global search
- Notifications
- User profile

### Sidebar
- New chat creation
- Navigation (Chat, Planner, Execution, Artifacts)
- Projects and analytics
- History and settings

### Main Workspace
- Execution timeline with progress tracking
- Prompt input with attachments
- Real-time status updates

### Right Panel
- Chat conversations
- Task planner visualization
- Artifact gallery
- File management

## 🔧 Customization

### Changing Themes

```javascript
// Via JavaScript
document.body.classList.remove('theme-dark');
document.body.classList.add('theme-light');

// Via CSS class on body element
<body class="theme-midnight accent-blue">
```

### Adjusting Animation Speed

```html
<body class="animation-fast">   <!-- Quick transitions -->
<body class="animation-normal"> <!-- Default -->
<body class="animation-slow">   <!-- Slower, smoother -->
```

## 📱 Responsive Breakpoints

- **Desktop**: 1400px+
- **Laptop**: 1200px - 1399px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔮 Backend Integration

The frontend is designed to integrate with the Forge AI backend orchestration engine:

| Frontend Module | Backend Service |
|-----------------|-----------------|
| Chat Window | Conversation Engine |
| Planner Panel | Execution Planner |
| Timeline | Execution Manager |
| Artifact Manager | Artifact Service |
| Project Explorer | Project Service |
| Settings | Configuration Service |
| Notifications | Monitoring Service |
| Analytics | Logging & Analytics |

## 📄 License

© 2024 Forge AI. All rights reserved.

---

**Built with ❤️ for the future of AI orchestration**
