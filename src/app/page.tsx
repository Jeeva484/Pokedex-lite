'use client';

import PokemonCard from '@/components/PokemonCard';
import { usePokemon } from '@/context/PokemonContext';
import Link from 'next/link';

export default function Home() {
  const { pokemon, loading, error, favorites } = usePokemon();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading Pokémon...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Pokédex Lite
          </h1>
          <Link href="/favorites" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
            ♥ Favorites ({favorites.length})
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pokemon.map((poke) => (
            <PokemonCard
              key={poke.id}
              id={poke.id}
              name={poke.name}
              image={poke.image}
              type={poke.type}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
