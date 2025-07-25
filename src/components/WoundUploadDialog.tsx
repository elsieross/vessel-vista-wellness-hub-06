import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Upload, Camera, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WoundUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUploadComplete: (imageUrl: string, analysis: any) => void;
}

export const WoundUploadDialog: React.FC<WoundUploadDialogProps> = ({
  open,
  onOpenChange,
  onUploadComplete,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const validateFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please select a JPG, PNG, or GIF image.",
        variant: "destructive",
      });
      return false;
    }

    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 10MB.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleAnalysis = async () => {
    if (!selectedFile) {
      toast({
        title: "No image selected",
        description: "Please select an image to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    console.log('🔄 Starting AI analysis with CORS bypass approach...');

    try {
      // Convert file to base64 to avoid FormData CORS preflight issues
      const base64Image = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          // Remove data:image/jpeg;base64, prefix to get just the base64 data
          const base64 = result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(selectedFile);
      });

      console.log('📤 Converted image to base64, length:', base64Image.length);
      console.log('📤 First 50 chars of base64:', base64Image.substring(0, 50));

      // Use JSON payload instead of FormData to avoid CORS preflight
      const response = await fetch('https://ogh5izcex736.manus.space/api/wound/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_data: base64Image,
          filename: selectedFile.name,
          content_type: selectedFile.type
        }),
      });

      console.log('📡 Response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ API Error:', errorData);
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('📊 Full API Response:', result);
      
      if (result.success && result.analysis_result) {
        // Create object URL for the image to display in results
        const imageUrl = URL.createObjectURL(selectedFile);
        console.log('🖼️ Created image URL:', imageUrl);
        console.log('🧠 Analysis data:', result.analysis_result);
        
        toast({
          title: "AI Analysis Complete",
          description: `Your wound has been analyzed using GPT-4.1 vision with ${(result.analysis_result.confidence_score * 100).toFixed(0)}% confidence.`,
        });

        console.log('📤 Calling onUploadComplete with:', {
          imageUrl,
          analysisData: result.analysis_result
        });

        // Call onUploadComplete with the correct parameter order (imageUrl first, then analysis)
        onUploadComplete(imageUrl, result.analysis_result);
        
        // Reset the dialog state
        setSelectedFile(null);
        setIsAnalyzing(false);
        setDragActive(false);
        
        // Close the dialog
        onOpenChange(false);

        console.log('✅ Analysis completed successfully');
      } else {
        console.error('❌ Invalid response structure:', result);
        throw new Error(result.error || 'AI analysis failed - invalid response structure');
      }
    } catch (error) {
      console.error('💥 Analysis error:', error);
      toast({
        title: "AI Analysis Failed",
        description: error instanceof Error ? error.message : "Please try again with a different image.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetDialog = () => {
    setSelectedFile(null);
    setIsAnalyzing(false);
    setDragActive(false);
  };

  const handleClose = () => {
    resetDialog();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Upload Wound Photo
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Take or upload a clear photo of your wound for real AI-powered analysis using GPT-4.1 vision
          </p>

          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
              dragActive
                ? 'border-primary bg-primary/5'
                : selectedFile
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={handleUploadAreaClick}
          >
            {selectedFile ? (
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <Upload className="h-6 w-6 text-green-600" />
                </div>
                <p className="font-medium text-green-700">{selectedFile.name}</p>
                <p className="text-sm text-green-600">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <p className="text-xs text-green-600">Click to change image</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <Upload className="h-6 w-6 text-gray-400" />
                </div>
                <p className="text-gray-600">Drop your image here or click to browse</p>
                <p className="text-xs text-gray-500">
                  Supports JPG, PNG, GIF up to 10MB
                </p>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-start gap-2">
              <Camera className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-blue-800">
                <p className="font-medium mb-1">📸 Photography Tips:</p>
                <ul className="space-y-1">
                  <li>• Use natural light when possible</li>
                  <li>• Keep the camera steady and focused</li>
                  <li>• Include a ruler or coin for scale if available</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-800">
                <strong>Medical Disclaimer:</strong> This AI analysis uses GPT-4.1 vision for informational purposes only and should not replace professional medical advice. Always consult with a healthcare provider for proper wound care and treatment.
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={handleClose}
              disabled={isAnalyzing}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAnalysis}
              disabled={!selectedFile || isAnalyzing}
              className="flex-1"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  AI Analyzing...
                </>
              ) : (
                <>
                  <Camera className="h-4 w-4 mr-2" />
                  Start AI Assessment
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

