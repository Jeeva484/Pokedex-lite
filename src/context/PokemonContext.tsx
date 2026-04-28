'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string[];
  height: number;
  weight: number;
}

interface PokemonContextType {
  pokemon: Pokemon[];
  loading: boolean;
  error: string | null;
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('pokemonFavorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved favorites:', e);
      }
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('pokemonFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Fetch Pokemon data
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();

        const pokemonData = await Promise.all(
          data.results.map(async (poke: { name: string; url: string }) => {
            const res = await fetch(poke.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.other['official-artwork'].front_default || details.sprites.front_default,
              type: details.types.map((t: any) => t.type.name),
              height: details.height,
              weight: details.weight,
            };
          })
        );

        setPokemon(pokemonData);
      } catch (err) {
        setError('Failed to fetch Pokemon data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <PokemonContext.Provider value={{ pokemon, loading, error, favorites, toggleFavorite }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
}
