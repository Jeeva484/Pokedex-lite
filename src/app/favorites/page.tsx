'use client';

import PokemonCard from '@/components/PokemonCard';
import { usePokemon } from '@/context/PokemonContext';
import Link from 'next/link';

export default function FavoritesPage() {
  const { pokemon, favorites } = usePokemon();

  const favoredPokemon = pokemon.filter((poke) => favorites.includes(poke.id));

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            ← Back to Pokédex
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">
            ♥ Your Favorite Pokémon ({favorites.length})
          </h1>
        </div>

        {favoredPokemon.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No favorite Pokémon yet. Start by liking some!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoredPokemon.map((poke) => (
              <PokemonCard
                key={poke.id}
                id={poke.id}
                name={poke.name}
                image={poke.image}
                type={poke.type}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
