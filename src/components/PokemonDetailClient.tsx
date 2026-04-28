'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePokemon } from '@/context/PokemonContext';

interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  type: string[];
  height: number;
  weight: number;
  stats: Array<{ name: string; value: number }>;
  abilities: string[];
}

const typeColors: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-400',
  ice: 'bg-blue-300',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-blue-400',
  psychic: 'bg-purple-600',
  bug: 'bg-green-600',
  rock: 'bg-gray-600',
  ghost: 'bg-purple-700',
  dragon: 'bg-blue-600',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-500',
};

interface PokemonDetailClientProps {
  id: string;
}

export default function PokemonDetailClient({ id }: PokemonDetailClientProps) {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = usePokemon();
  const isFavorited = favorites.includes(parseInt(id, 10));

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
          throw new Error(`PokeAPI request failed with status ${res.status}`);
        }
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error(`Expected JSON response, got ${contentType}`);
        }
        const data = await res.json();
        setPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
          type: data.types.map((t: any) => t.type.name),
          height: data.height,
          weight: data.weight,
          stats: data.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
          abilities: data.abilities.map((a: any) => a.ability.name),
        });
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-600">Pokémon not found</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to Pokédex
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 flex items-center justify-center min-h-96">
            <img src={pokemon.image} alt={pokemon.name} className="w-full h-full object-contain" />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold capitalize text-gray-800 mb-2">{pokemon.name}</h1>
                <div className="flex gap-2">
                  {pokemon.type.map((t) => (
                    <span
                      key={t}
                      className={`${typeColors[t] || 'bg-gray-400'} text-white px-3 py-1 rounded-full capitalize`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => toggleFavorite(pokemon.id)}
                className={`text-4xl transition-colors ${
                  isFavorited ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                }`}
              >
                ♥
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Height</p>
                <p className="text-2xl font-bold text-gray-800">{(pokemon.height / 10).toFixed(1)}m</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Weight</p>
                <p className="text-2xl font-bold text-gray-800">{(pokemon.weight / 10).toFixed(1)}kg</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Stats</h2>
              <div className="space-y-3">
                {pokemon.stats.map((stat) => (
                  <div key={stat.name}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize text-gray-700 font-medium">{stat.name}</span>
                      <span className="font-bold text-gray-800">{stat.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: `${(stat.value / 150) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {pokemon.abilities.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Abilities</h2>
                <div className="flex gap-2 flex-wrap">
                  {pokemon.abilities.map((ability) => (
                    <span
                      key={ability}
                      className="bg-green-100 text-green-800 px-3 py-2 rounded-lg capitalize font-medium"
                    >
                      {ability.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
