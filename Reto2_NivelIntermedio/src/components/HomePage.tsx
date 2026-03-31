import { useState } from 'react';
import { Search, TrendingUp, Clock, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface HomePageProps {
  onSearch: (query: string) => void;
}

export function HomePage({ onSearch }: HomePageProps) {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };

  const trendingSearches = [
    { text: 'Baile viral', icon: TrendingUp },
    { text: 'Comedia', icon: Star },
    { text: 'Recetas rápidas', icon: Clock },
    { text: 'Tutoriales maquillaje', icon: Star },
    { text: 'Mascotas graciosas', icon: TrendingUp },
    { text: 'Viajes 2025', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
              <Search className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-900 mb-4"
          >
            Buscador de Videos TikTok
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Descubre millones de videos creativos, tendencias virales y contenido increíble
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <form onSubmit={handleSubmit}>
            <Card className="p-2 shadow-lg">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Buscar videos, hashtags, creadores..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="pl-12 h-14 border-0 focus-visible:ring-0"
                  />
                </div>
                <Button type="submit" size="lg" className="px-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  Buscar
                </Button>
              </div>
            </Card>
          </form>
        </motion.div>

        {/* Trending Searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-pink-500" />
            <h2 className="text-gray-900">Búsquedas Populares</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingSearches.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Card
                    className="p-4 hover:shadow-lg transition-all cursor-pointer hover:scale-105 group"
                    onClick={() => onSearch(item.text)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:from-pink-200 group-hover:to-purple-200 transition-colors">
                        <Icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="max-w-4xl mx-auto mt-16 grid grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-pink-600 mb-2">1B+</div>
            <div className="text-gray-600">Videos</div>
          </div>
          <div className="text-center">
            <div className="text-purple-600 mb-2">500M+</div>
            <div className="text-gray-600">Creadores</div>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Países</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
