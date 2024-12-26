# DreamMusic: Music Player 
A modern music player application built with React that features drag-and-drop playlist management and advanced audio controls. The application uses DnD Kit for drag-and-drop functionality and Howler.js for audio handling.

## Features
- Drag and drop playlist management
- Full audio control suite including:
  - Play/Pause
  - Seek forward/backward
  - Track loop
  - Playlist shuffle
- Responsive design
- Context-based state management
- Progress tracking

## Installation

```bash
# Clone the repository
git clone https://github.com/theRohan7/DreamMusic

# Install dependencies
npm install

# Required packages
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities howler TailwindCSS
```

## Tech Stack
- React.js
- Context API
- DnD Kit
- Howler.js
- Taiwind CSS

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Music.jsx
│   ├── MusicList.jsx
│   ├── MusicPlaying.jsx
│   └── App.jsx
├── context/
│   └── MusicContext.jsx
├── assets/
│   └── Icons....
├── App.jsx
├── Main.jsx
└── utils/
    └── export.js
```