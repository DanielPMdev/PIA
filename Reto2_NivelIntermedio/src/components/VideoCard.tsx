import { Play, Heart, MessageCircle, Eye, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import type { Video } from '../App';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
  viewMode: 'grid' | 'list';
  index: number;
}

export function VideoCard({ video, onClick, viewMode, index }: VideoCardProps) {
  if (viewMode === 'list') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ delay: index * 0.05 }}
      >
        <Card
          className="p-4 hover:shadow-lg transition-all cursor-pointer group"
          onClick={onClick}
        >
          <div className="flex gap-4">
            <div className="relative w-32 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-pink-600 ml-1" />
                </div>
              </div>
              <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                {video.duration}
              </Badge>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={video.avatar} />
                    <AvatarFallback>{video.username[1]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1">
                      <span>{video.username}</span>
                      {video.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 mb-4">{video.title}</p>
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{video.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{video.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card
        className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
        onClick={onClick}
      >
        <div className="relative aspect-[9/16] bg-gray-200">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
              <Play className="w-8 h-8 text-pink-600 ml-1" />
            </div>
          </div>
          <Badge className="absolute top-2 right-2 bg-black/70 text-white">
            {video.duration}
          </Badge>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src={video.avatar} />
                <AvatarFallback>{video.username[1]}</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1">
                <span>{video.username}</span>
                {video.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
            <p className="line-clamp-2 mb-3">{video.title}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{video.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{video.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{video.views}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
