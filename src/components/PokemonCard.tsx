'use client';

import { usePokemon } from '@/context/PokemonContext';
import Link from 'next/link';

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  type: string[];
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

export default function PokemonCard({ id, name, image, type }: PokemonCardProps) {
  const { favorites, toggleFavorite } = usePokemon();
  const isFavorited = favorites.includes(id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/pokemon/${id}`}>
        <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-4">
          <img src={image} alt={name} className="w-full h-full object-contain" />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/pokemon/${id}`}>
            <h3 className="text-lg font-semibold capitalize text-gray-800 hover:text-blue-600">
              {name}
            </h3>
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(id);
            }}
            className={`text-xl transition-colors ${
              isFavorited ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
            }`}
          >
            ♥
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {type.map((t) => (
            <span
              key={t}
              className={`${typeColors[t] || 'bg-gray-400'} text-white text-xs px-2 py-1 rounded-full capitalize`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
