import { X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';

interface FilterPanelProps {
  filters: {
    duration: string;
    sortBy: string;
    datePosted: string;
  };
  onFiltersChange: (filters: any) => void;
  onClose: () => void;
}

export function FilterPanel({ filters, onFiltersChange, onClose }: FilterPanelProps) {
  const handleApply = () => {
    toast.success('Filtros aplicados correctamente');
    onClose();
  };

  const handleReset = () => {
    onFiltersChange({
      duration: 'all',
      sortBy: 'relevance',
      datePosted: 'any'
    });
    toast.info('Filtros restablecidos');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mb-6"
    >
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-900">Filtros de Búsqueda</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Duration Filter */}
          <div className="space-y-3">
            <Label>Duración del Video</Label>
            <RadioGroup
              value={filters.duration}
              onValueChange={(value) => onFiltersChange({ ...filters, duration: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="duration-all" />
                <Label htmlFor="duration-all" className="cursor-pointer">Todas las duraciones</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="short" id="duration-short" />
                <Label htmlFor="duration-short" className="cursor-pointer">Corto (0-30s)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="duration-medium" />
                <Label htmlFor="duration-medium" className="cursor-pointer">Medio (30s-1m)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="long" id="duration-long" />
                <Label htmlFor="duration-long" className="cursor-pointer">Largo (1m+)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Sort By */}
          <div className="space-y-3">
            <Label>Ordenar por</Label>
            <Select
              value={filters.sortBy}
              onValueChange={(value) => onFiltersChange({ ...filters, sortBy: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevancia</SelectItem>
                <SelectItem value="recent">Más reciente</SelectItem>
                <SelectItem value="popular">Más popular</SelectItem>
                <SelectItem value="views">Más visto</SelectItem>
                <SelectItem value="likes">Más gustado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Posted */}
          <div className="space-y-3">
            <Label>Fecha de publicación</Label>
            <Select
              value={filters.datePosted}
              onValueChange={(value) => onFiltersChange({ ...filters, datePosted: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Cualquier fecha</SelectItem>
                <SelectItem value="today">Hoy</SelectItem>
                <SelectItem value="week">Esta semana</SelectItem>
                <SelectItem value="month">Este mes</SelectItem>
                <SelectItem value="year">Este año</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={handleApply} className="bg-gradient-to-r from-pink-500 to-purple-600">
            Aplicar Filtros
          </Button>
          <Button variant="outline" onClick={handleReset}>
            Restablecer
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
