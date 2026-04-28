# 🧩 Pokédex Lite

A lightweight and fast Pokédex web application built using modern frontend technologies. It allows users to browse Pokémon, search and filter them, view detailed stats, and save favorites with persistent storage.

---

## 🚀 Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS  
- State Management: React Context API + Hooks  
- API: PokéAPI  
- Storage: Browser localStorage  
- Language: TypeScript  
- Deployment: Vercel  

---

## 🎯 Features

- 🔍 Search Pokémon by name (real-time filtering)  
- 🏷️ Filter Pokémon by type (Fire, Water, etc.)  
- 📄 Pagination for efficient data loading  
- 💾 Save favorite Pokémon (persisted in localStorage)  
- 🔍 View detailed Pokémon stats (HP, Attack, Abilities)  
- 🎨 Type-based color coding for better UI  
- 📱 Fully responsive design (mobile, tablet, desktop)  
- ⚡ Fast and optimized performance  

---

## 📦 Installation

Clone the repository and install dependencies:

bash git clone https://github.com/your-username/pokedex-lite.git cd pokedex-lite npm install 

---

## 🏃 Getting Started

Run the development server:

bash npm run dev 

Open your browser and navigate to:

http://localhost:3000

---

## 📦 Production Build

bash npm run build npm start 

---

## 📁 Project Structure

src/ ├── app/ │   ├── layout.tsx           # Root layout with global provider │   ├── page.tsx             # Home page (Pokémon listing) │   ├── globals.css          # Global styles │   ├── favorites/           # Favorites page │   │   └── page.tsx │   └── pokemon/ │       └── [id]/            # Pokémon detail page │           └── page.tsx ├── components/ │   ├── PokemonCard.tsx      # Pokémon card UI │   ├── SearchBar.tsx        # Search input │   ├── Filter.tsx           # Type filter dropdown │   └── Pagination.tsx       # Pagination controls └── context/     └── PokemonContext.tsx   # Global state management

---

## 🌐 API Integration

This app uses PokéAPI for fetching Pokémon data:

- Fetches Pokémon list using pagination (limit & offset)
- Fetches individual Pokémon details (types, stats, abilities)
- Handles loading and error states for better UX

---

## 💾 Local Storage

- Favorites are stored using browser localStorage  
- Data persists even after page refresh  
- Users can easily add/remove Pokémon from favorites  

---

## ⚠️ Challenges Faced & Solutions

### 1. Handling Pokémon Type Filtering
Challenge:  
PokéAPI list endpoint does not include type information.

Solution:  
Fetched additional Pokémon details and optimized calls using caching to avoid redundant API requests.

---

### 2. Managing Multiple States
Challenge:  
Handling search, filters, pagination, and favorites together increased complexity.

Solution:  
Used React Context API to centralize state management and keep components clean and reusable.

---

### 3. Performance Optimization
Challenge:  
Fetching all Pokémon at once caused slow loading.

Solution:  
Implemented pagination (limit & offset) to load data efficiently.

---

### 4. Persisting Favorites
Challenge:  
Favorites were lost after refreshing the page.

Solution:  
Used localStorage to store and retrieve favorite Pokémon.

---

### 5. Responsive UI Design
Challenge:  
Maintaining consistency across devices.

Solution:  
Used Tailwind CSS grid and responsive breakpoints to ensure seamless UI across mobile, tablet, and desktop.

---

## ✨ Future Improvements

- 🌙 Dark mode support  
- 🔐 OAuth login (Google/GitHub)  
- 🎬 UI animations and transitions  
- ⚡ Server-side rendering (SSR) for better SEO  

---

## 📌 Conclusion

This project demonstrates the implementation of a scalable frontend application using modern technologies, focusing on performance, clean UI, and efficient state management.

---

## 📝 License

MI
