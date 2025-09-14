import { useState, useEffect } from "react";
import { MapPin, Filter, Clock, Package, Heart, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface SurplusItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  expiryHours: number;
  distance: number;
  donor: string;
  location: { lat: number; lng: number };
  description: string;
}

const mockItems: SurplusItem[] = [
  {
    id: '1',
    name: 'Fresh Bread Loaves',
    category: 'Bakery',
    quantity: 12,
    expiryHours: 18,
    distance: 0.3,
    donor: 'City Bakery',
    location: { lat: 40.7128, lng: -74.0060 },
    description: 'Artisan bread from this morning, perfect for families'
  },
  {
    id: '2',
    name: 'Vegetables Mix',
    category: 'Produce',
    quantity: 25,
    expiryHours: 48,
    distance: 0.7,
    donor: 'Fresh Market Co',
    location: { lat: 40.7589, lng: -73.9851 },
    description: 'Organic vegetables, slightly imperfect but nutritious'
  },
  {
    id: '3',
    name: 'Medicine Pack',
    category: 'Medical',
    quantity: 5,
    expiryHours: 720,
    distance: 1.2,
    donor: 'Community Pharmacy',
    location: { lat: 40.6782, lng: -73.9442 },
    description: 'Over-the-counter medications, sealed packages'
  },
  {
    id: '4',
    name: 'Dairy Products',
    category: 'Dairy',
    quantity: 8,
    expiryHours: 72,
    distance: 2.1,
    donor: 'Local Dairy Farm',
    location: { lat: 40.7484, lng: -73.9857 },
    description: 'Fresh milk and cheese products'
  }
];

export const InteractiveMap = () => {
  const [filteredItems, setFilteredItems] = useState<SurplusItem[]>(mockItems);
  const [selectedItem, setSelectedItem] = useState<SurplusItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxDistance, setMaxDistance] = useState([5]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxExpiry, setMaxExpiry] = useState([168]); // 7 days in hours
  const [showFilters, setShowFilters] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let filtered = mockItems;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.donor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Distance filter
    filtered = filtered.filter(item => item.distance <= maxDistance[0]);

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => item.category.toLowerCase() === selectedCategory);
    }

    // Expiry filter
    filtered = filtered.filter(item => item.expiryHours <= maxExpiry[0]);

    setFilteredItems(filtered);
  }, [searchQuery, maxDistance, selectedCategory, maxExpiry]);

  const handleClaim = (item: SurplusItem) => {
    toast({
      title: "Item claimed successfully!",
      description: `You have 15 minutes to pick up ${item.name} from ${item.donor}`,
    });
    setSelectedItem(null);
    // In real app: remove from available items, start timer, send notifications
  };

  const getExpiryColor = (hours: number) => {
    if (hours <= 24) return "text-destructive";
    if (hours <= 48) return "text-warning";
    return "text-success";
  };

  const getExpiryBadge = (hours: number) => {
    if (hours <= 24) return { label: "Urgent", variant: "destructive" as const };
    if (hours <= 48) return { label: "Soon", variant: "secondary" as const };
    return { label: "Good", variant: "secondary" as const };
  };

  const categories = ["all", "bakery", "produce", "dairy", "medical", "pantry"];

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="bg-gradient-card border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search items, categories, or donors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-primary/20 hover:border-primary/40"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-border space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Label>Max Distance: {maxDistance[0]}km</Label>
                  <Slider
                    value={maxDistance}
                    onValueChange={setMaxDistance}
                    max={10}
                    min={0.5}
                    step={0.5}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>Category</Label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-gradient-primary text-white" : ""}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label>Max Expiry: {Math.floor(maxExpiry[0] / 24)} days</Label>
                  <Slider
                    value={maxExpiry}
                    onValueChange={setMaxExpiry}
                    max={720}
                    min={12}
                    step={12}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Map View (Mock) */}
      <Card className="bg-gradient-card border-border/50">
        <CardContent className="p-6">
          <div className="aspect-[16/9] bg-muted rounded-lg relative overflow-hidden">
            {/* Mock map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-success/5">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-muted/20"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mock map pins */}
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                style={{
                  left: `${20 + (index * 15)}%`,
                  top: `${30 + (index * 10)}%`
                }}
              >
                <div className={`w-6 h-6 rounded-full ${item.expiryHours <= 24 ? 'bg-destructive' : item.expiryHours <= 48 ? 'bg-warning' : 'bg-success'} flex items-center justify-center shadow-lg animate-pulse-glow`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </button>
            ))}
            
            {/* Map legend */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 space-y-2">
              <div className="text-xs font-medium">Legend</div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <span>Urgent (&lt;24h)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span>Soon (&lt;48h)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span>Good (&gt;48h)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const expiryBadge = getExpiryBadge(item.expiryHours);
          return (
            <Card 
              key={item.id}
              className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.donor}</p>
                    </div>
                    <Badge variant={expiryBadge.variant} className="text-xs">
                      {expiryBadge.label}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium">{item.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Quantity</span>
                      <span className="font-medium">{item.quantity} items</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Distance</span>
                      <span className="font-medium">{item.distance}km away</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Expires</span>
                      <span className={`font-medium ${getExpiryColor(item.expiryHours)}`}>
                        {item.expiryHours < 24 ? `${item.expiryHours}h` : `${Math.floor(item.expiryHours / 24)}d`}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-12 text-center">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search criteria.</p>
          </CardContent>
        </Card>
      )}

      {/* Item Detail Modal */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-primary" />
                <span>{selectedItem.name}</span>
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Donor</span>
                  <span className="font-medium">{selectedItem.donor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <Badge variant="secondary">{selectedItem.category}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quantity</span>
                  <span className="font-medium">{selectedItem.quantity} items</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Distance</span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{selectedItem.distance}km away</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Expires in</span>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className={`font-medium ${getExpiryColor(selectedItem.expiryHours)}`}>
                      {selectedItem.expiryHours < 24 ? `${selectedItem.expiryHours} hours` : `${Math.floor(selectedItem.expiryHours / 24)} days`}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{selectedItem.description}</p>
              </div>
              
              <Button
                onClick={() => handleClaim(selectedItem)}
                className="w-full bg-gradient-primary text-white hover:opacity-90"
                size="lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Claim This Item
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                You'll have 15 minutes to pick up once claimed
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};