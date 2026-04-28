# Pokédex Lite

A lightweight, fast Pokédex app built with modern tech. Browse Pokémon, view details, and save your favorites!

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API + Hooks
- **API**: PokéAPI
- **Storage**: Browser localStorage
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

## 🎯 Features

- ✨ Browse the first 20 Pokémon
- 💾 Save favorites to localStorage
- 🔍 View detailed Pokémon stats
- 🏷️ Type-based color coding
- 📱 Fully responsive design
- ⚡ Fast and lightweight

## 📦 Installation

```bash
npm install
```

## 🏃 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your Pokédex!

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with PokemonProvider
│   ├── page.tsx             # Home page with Pokémon grid
│   ├── globals.css          # Global styles
│   ├── favorites/           # Favorites page
│   │   └── page.tsx
│   └── pokemon/
│       └── [id]/            # Dynamic Pokémon detail page
│           └── page.tsx
├── components/
│   └── PokemonCard.tsx      # Reusable Pokémon card component
└── context/
    └── PokemonContext.tsx   # State management for Pokémon data
```

## 🌐 API Integration

This app uses the free [PokéAPI](https://pokeapi.co/) for Pokémon data:
- Fetches initial 20 Pokémon on app load
- Loads individual Pokémon details on demand
- No authentication required

## 💾 Local Storage

Favorites are automatically saved to browser localStorage and persist between sessions.

## 🚀 Deployment

Deploy to Vercel with one click:

```bash
npm run build
npm run start
```

Or deploy directly to Vercel: [Deploy with Vercel](https://vercel.com/new)

## 📝 License

MIT
