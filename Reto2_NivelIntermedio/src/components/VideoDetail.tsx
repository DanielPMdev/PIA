import { useState } from 'react';
import { ArrowLeft, Home, Heart, MessageCircle, Share2, Bookmark, Check, MoreHorizontal, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import type { Video } from '../App';

interface VideoDetailProps {
  video: Video;
  onBack: () => void;
  onHomeClick: () => void;
}

export function VideoDetail({ video, onBack, onHomeClick }: VideoDetailProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Like removido' : '¡Video marcado como favorito!');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? 'Removido de guardados' : '¡Video guardado!');
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(isFollowing ? 'Dejaste de seguir' : `¡Ahora sigues a ${video.username}!`);
  };

  const handleShare = () => {
    toast.success('Enlace copiado al portapapeles');
  };

  const handleComment = () => {
    if (comment.trim()) {
      toast.success('¡Comentario publicado!');
      setComment('');
    }
  };

  const mockComments = [
    { id: 1, user: '@user1', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop', text: '¡Increíble! 🔥', likes: 234 },
    { id: 2, user: '@user2', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', text: 'Me encanta este contenido', likes: 189 },
    { id: 3, user: '@user3', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', text: '¿Cómo lo hiciste? Tutorial pls', likes: 156 }
  ];

  const relatedVideos = [
    { id: 'r1', thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=400&fit=crop', title: 'Video similar 1', views: '890K' },
    { id: 'r2', thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=400&fit=crop', title: 'Video similar 2', views: '1.2M' },
    { id: 'r3', thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=400&fit=crop', title: 'Video similar 3', views: '650K' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onHomeClick}>
                <Home className="w-5 h-5" />
              </Button>
              <h2 className="text-gray-900">Detalle del Video</h2>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="overflow-hidden mb-6">
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={video.avatar} />
                      <AvatarFallback>{video.username[1]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900">{video.username}</span>
                        {video.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600">Creador de contenido</p>
                    </div>
                    <Button
                      variant={isFollowing ? 'outline' : 'default'}
                      onClick={handleFollow}
                      className={!isFollowing ? 'bg-gradient-to-r from-pink-500 to-purple-600' : ''}
                    >
                      {isFollowing ? 'Siguiendo' : 'Seguir'}
                    </Button>
                  </div>
                  <p className="text-gray-900 mb-4">{video.title}</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <span>{video.views} reproducciones</span>
                    <span>•</span>
                    <span>Hace 2 días</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant={isLiked ? 'default' : 'outline'}
                      className={`flex-1 ${isLiked ? 'bg-pink-500 hover:bg-pink-600' : ''}`}
                      onClick={handleLike}
                    >
                      <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                      {video.likes}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {video.comments}
                    </Button>
                    <Button variant="outline" onClick={handleSave}>
                      <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                    </Button>
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <Tabs defaultValue="comments">
                  <TabsList className="mb-6">
                    <TabsTrigger value="comments">Comentarios ({mockComments.length})</TabsTrigger>
                    <TabsTrigger value="description">Descripción</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="comments" className="space-y-4">
                    {/* Add Comment */}
                    <div className="flex gap-3 pb-4 border-b">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback>TU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder="Añade un comentario..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="mb-2"
                        />
                        <div className="flex justify-end">
                          <Button
                            onClick={handleComment}
                            disabled={!comment.trim()}
                            size="sm"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Comentar
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Comments List */}
                    {mockComments.map((c) => (
                      <div key={c.id} className="flex gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={c.avatar} />
                          <AvatarFallback>{c.user[1]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <span className="text-gray-900 mr-2">{c.user}</span>
                            <p className="text-gray-700">{c.text}</p>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-gray-600">
                            <button className="hover:text-pink-500 transition-colors">
                              <Heart className="w-4 h-4 inline mr-1" />
                              {c.likes}
                            </button>
                            <button className="hover:text-gray-900 transition-colors">Responder</button>
                            <span>Hace 1h</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="description">
                    <div className="space-y-4">
                      <p className="text-gray-700">{video.title}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-pink-500 cursor-pointer hover:underline">#viral</span>
                        <span className="text-pink-500 cursor-pointer hover:underline">#trending</span>
                        <span className="text-pink-500 cursor-pointer hover:underline">#fyp</span>
                      </div>
                      <div className="pt-4 border-t space-y-2 text-gray-600">
                        <p>Música: Canción Original</p>
                        <p>Ubicación: Ciudad, País</p>
                        <p>Publicado: Hace 2 días</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-4">
                <h3 className="text-gray-900 mb-4">Videos Relacionados</h3>
                <div className="space-y-4">
                  {relatedVideos.map((rv, index) => (
                    <motion.div
                      key={rv.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                        <img
                          src={rv.thumbnail}
                          alt={rv.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 mb-2 line-clamp-2">{rv.title}</p>
                        <p className="text-gray-600">{rv.views} vistas</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
