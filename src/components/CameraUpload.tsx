import { useState, useRef } from "react";
import { Camera, Upload, X, CheckCircle, Clock, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DetectedItem {
  name: string;
  category: string;
  expiryDate: string;
  quantity: number;
  confidence: number;
}

export const CameraUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectedItem, setDetectedItem] = useState<DetectedItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Mock OCR detection
  const mockDetection = (imageName: string): DetectedItem => {
    const mockItems = [
      { name: "Bread Loaves", category: "Bakery", expiryDays: 2, quantity: 5 },
      { name: "Fresh Vegetables", category: "Produce", expiryDays: 3, quantity: 10 },
      { name: "Dairy Products", category: "Dairy", expiryDays: 4, quantity: 8 },
      { name: "Canned Goods", category: "Pantry", expiryDays: 365, quantity: 15 },
      { name: "Medicine Pack", category: "Medical", expiryDays: 30, quantity: 3 },
    ];
    
    const randomItem = mockItems[Math.floor(Math.random() * mockItems.length)];
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + randomItem.expiryDays);
    
    return {
      name: randomItem.name,
      category: randomItem.category,
      expiryDate: expiryDate.toISOString().split('T')[0],
      quantity: randomItem.quantity,
      confidence: Math.floor(Math.random() * 20) + 80 // 80-99%
    };
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Simulate OCR processing
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const detected = mockDetection(file.name);
    setDetectedItem(detected);
    setIsProcessing(false);
    
    toast({
      title: "Item detected!",
      description: `Found ${detected.name} with ${detected.confidence}% confidence`,
    });
  };

  const handleSubmit = async () => {
    if (!detectedItem) return;
    
    setIsSubmitting(true);
    // Simulate API submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Donation posted!",
      description: "Your surplus is now live on the map for others to claim.",
    });
    
    setIsSubmitting(false);
    // Reset form
    setUploadedImage(null);
    setDetectedItem(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const reset = () => {
    setUploadedImage(null);
    setDetectedItem(null);
    setIsProcessing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Upload Section */}
      {!uploadedImage && (
        <Card className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Upload Surplus Item</h3>
                <p className="text-muted-foreground">
                  Take a photo and our AI will automatically detect item details
                </p>
              </div>
              <div className="space-y-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="camera-input"
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  size="lg"
                  className="bg-gradient-primary text-white hover:opacity-90"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Take Photo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="border-primary/20 hover:border-primary/40"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload from Gallery
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Image Preview & Processing */}
      {uploadedImage && (
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Uploaded Image</h3>
              <Button variant="ghost" size="sm" onClick={reset}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded surplus item" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {isProcessing && (
                <div className="text-center py-4">
                  <div className="inline-flex items-center space-x-2 text-primary">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                    <span className="text-sm font-medium">Detecting item details...</span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Detection Results */}
      {detectedItem && !isProcessing && (
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-2" />
                Item Detected
              </h3>
              <Badge variant="secondary" className="text-xs">
                {detectedItem.confidence}% confidence
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="item-name">Item Name</Label>
                  <Input 
                    id="item-name"
                    value={detectedItem.name} 
                    onChange={() => {}} // Make editable in real implementation
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={detectedItem.category}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bakery">Bakery</SelectItem>
                      <SelectItem value="Produce">Produce</SelectItem>
                      <SelectItem value="Dairy">Dairy</SelectItem>
                      <SelectItem value="Pantry">Pantry</SelectItem>
                      <SelectItem value="Medical">Medical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input 
                    id="expiry"
                    type="date" 
                    value={detectedItem.expiryDate}
                    onChange={() => {}} // Make editable in real implementation
                  />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input 
                    id="quantity"
                    type="number" 
                    value={detectedItem.quantity}
                    onChange={() => {}} // Make editable in real implementation
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea 
                  id="notes"
                  placeholder="Pickup instructions, special requirements, etc."
                  className="resize-none"
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-warning" />
                  <span className="text-sm font-medium">
                    Expiry Alert: {Math.ceil((new Date(detectedItem.expiryDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24))} days remaining
                  </span>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${Math.ceil((new Date(detectedItem.expiryDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) <= 2 ? 'bg-warning/10 text-warning border-warning/20' : 'bg-success/10 text-success border-success/20'}`}
                >
                  {Math.ceil((new Date(detectedItem.expiryDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) <= 2 ? 'Urgent' : 'Good'}
                </Badge>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full mt-6 bg-gradient-primary text-white hover:opacity-90"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Posting to Map...
                </>
              ) : (
                <>
                  <Package className="mr-2 h-5 w-5" />
                  Post Donation
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};