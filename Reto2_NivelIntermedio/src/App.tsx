import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SearchResults } from './components/SearchResults';
import { VideoDetail } from './components/VideoDetail';
import { Toaster } from './components/ui/sonner';

export type Screen = 'home' | 'results' | 'detail';

export interface Video {
  id: string;
  username: string;
  avatar: string;
  thumbnail: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  duration: string;
  verified: boolean;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [filters, setFilters] = useState({
    duration: 'all',
    sortBy: 'relevance',
    datePosted: 'any'
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentScreen('results');
  };

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setCurrentScreen('detail');
  };

  const handleBack = () => {
    if (currentScreen === 'detail') {
      setCurrentScreen('results');
    } else if (currentScreen === 'results') {
      setCurrentScreen('home');
    }
  };

  const handleHomeClick = () => {
    setCurrentScreen('home');
    setSearchQuery('');
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'home' && (
        <HomePage onSearch={handleSearch} />
      )}
      {currentScreen === 'results' && (
        <SearchResults
          searchQuery={searchQuery}
          onVideoClick={handleVideoClick}
          onBack={handleBack}
          onHomeClick={handleHomeClick}
          filters={filters}
          onFiltersChange={setFilters}
        />
      )}
      {currentScreen === 'detail' && selectedVideo && (
        <VideoDetail
          video={selectedVideo}
          onBack={handleBack}
          onHomeClick={handleHomeClick}
        />
      )}
      <Toaster />
    </div>
  );
}
