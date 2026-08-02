# Forge AI - Intelligent Workspace

A modern, ChatGPT/Perplexity-style AI workspace interface.

## 🚀 Deploy to Vercel

### Option 1: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. **Framework Preset**: Select `Other`
5. **Build Command**: Leave empty
6. **Install Command**: Leave empty
7. **Output Directory**: Keep as `.`
8. Click "Deploy"

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
Forge-AI/
├── index.html          # Main workspace (ChatGPT-style)
├── vercel.json         # Vercel configuration
├── assets/
│   ├── css/           # All stylesheets
│   └── js/            # JavaScript modules
└── README.md
```

## 🎨 Features

- **Modern UI**: Clean, dark theme inspired by ChatGPT and Perplexity
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Animated AI Orb**: Visual feedback for AI processing
- **Execution Timeline**: Live progress tracking
- **Artifact Management**: View generated files
- **Context Memory**: Track conversation context
- **Quick Suggestions**: Pre-built prompt templates

## 🛠️ Local Development

Open `index.html` in any modern browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## 🎯 Configuration

No build process required. This is a static HTML/CSS/JS project.

### Vercel Settings
- **Framework**: Static/Other
- **Build Command**: (empty)
- **Install Command**: (empty)
- **Output Directory**: `.`

## 📄 License

MIT
