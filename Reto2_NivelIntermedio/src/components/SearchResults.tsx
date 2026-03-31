import { useState } from 'react';
import { Search, ArrowLeft, Home, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { motion, AnimatePresence } from 'motion/react';
import type { Video } from '../App';
import { VideoCard } from './VideoCard';
import { FilterPanel } from './FilterPanel';

interface SearchResultsProps {
  searchQuery: string;
  onVideoClick: (video: Video) => void;
  onBack: () => void;
  onHomeClick: () => void;
  filters: {
    duration: string;
    sortBy: string;
    datePosted: string;
  };
  onFiltersChange: (filters: any) => void;
}

export function SearchResults({ searchQuery, onVideoClick, onBack, onHomeClick, filters, onFiltersChange }: SearchResultsProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('videos');

  // Mock data
  const mockVideos: Video[] = [
    {
      id: '1',
      username: '@dancer_pro',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=600&fit=crop',
      title: 'Nuevo baile viral 🔥 #dance',
      views: '2.3M',
      likes: '450K',
      comments: '12K',
      duration: '0:15',
      verified: true
    },
    {
      id: '2',
      username: '@comedy_king',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=600&fit=crop',
      title: 'No puedo parar de reír 😂',
      views: '1.8M',
      likes: '320K',
      comments: '8.5K',
      duration: '0:22',
      verified: false
    },
    {
      id: '3',
      username: '@food_lover',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=600&fit=crop',
      title: 'Receta en 60 segundos 🍰',
      views: '950K',
      likes: '180K',
      comments: '5.2K',
      duration: '1:00',
      verified: true
    },
    {
      id: '4',
      username: '@travel_diary',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
      title: 'Lugares increíbles ✈️ #travel',
      views: '1.2M',
      likes: '250K',
      comments: '6.8K',
      duration: '0:45',
      verified: true
    },
    {
      id: '5',
      username: '@makeup_artist',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=600&fit=crop',
      title: 'Tutorial maquillaje natural 💄',
      views: '780K',
      likes: '145K',
      comments: '3.9K',
      duration: '2:15',
      verified: false
    },
    {
      id: '6',
      username: '@pet_cuteness',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=600&fit=crop',
      title: 'Mi perro haciendo travesuras 🐶',
      views: '3.1M',
      likes: '620K',
      comments: '15K',
      duration: '0:18',
      verified: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 py-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onHomeClick}>
              <Home className="w-5 h-5" />
            </Button>
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  value={searchQuery}
                  readOnly
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="pb-0">
            <TabsList className="w-full justify-start rounded-none border-b-0 bg-transparent h-auto p-0">
              <TabsTrigger value="videos" className="rounded-none border-b-2 data-[state=active]:border-pink-500">
                Videos
              </TabsTrigger>
              <TabsTrigger value="users" className="rounded-none border-b-2 data-[state=active]:border-pink-500">
                Usuarios
              </TabsTrigger>
              <TabsTrigger value="sounds" className="rounded-none border-b-2 data-[state=active]:border-pink-500">
                Sonidos
              </TabsTrigger>
              <TabsTrigger value="hashtags" className="rounded-none border-b-2 data-[state=active]:border-pink-500">
                Hashtags
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-2">
            <span className="text-gray-600">
              Aproximadamente <span>{mockVideos.length}</span> resultados para
            </span>
            <Badge variant="secondary" className="bg-pink-100 text-pink-700">
              "{searchQuery}"
            </Badge>
          </div>
          <span className="text-gray-500">Ordenar por: {filters.sortBy === 'relevance' ? 'Relevancia' : filters.sortBy === 'recent' ? 'Más reciente' : 'Más popular'}</span>
        </motion.div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <FilterPanel
              filters={filters}
              onFiltersChange={onFiltersChange}
              onClose={() => setShowFilters(false)}
            />
          )}
        </AnimatePresence>

        {/* Video Grid/List */}
        <motion.div
          layout
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }
        >
          <AnimatePresence mode="popLayout">
            {mockVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => onVideoClick(video)}
                viewMode={viewMode}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
