
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface PhotoInputProps {
  onTextExtracted: (text: string) => void;
  onMethodChange: (method: 'photo') => void;
}

const PhotoInput = ({ onTextExtracted, onMethodChange }: PhotoInputProps) => {
  const [isProcessingPhoto, setIsProcessingPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessingPhoto(true);
    onMethodChange('photo');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('apikey', 'K87899142188957'); // Free OCR.space API key
    formData.append('language', 'eng');

    try {
      const response = await fetch('https://api.ocr.space/parse/image', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      
      if (result.ParsedResults && result.ParsedResults[0]) {
        const extractedText = result.ParsedResults[0].ParsedText;
        onTextExtracted(extractedText);
        toast({
          title: "Text extracted",
          description: "Text from image has been added to notes"
        });
      } else {
        throw new Error('No text found in image');
      }
    } catch (error) {
      console.error('OCR error:', error);
      toast({
        title: "OCR failed",
        description: "Could not extract text from image",
        variant: "destructive"
      });
    } finally {
      setIsProcessingPhoto(false);
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => fileInputRef.current?.click()}
        disabled={isProcessingPhoto}
      >
        {isProcessingPhoto ? '📷 Processing...' : '📷 Photo'}
      </Button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="hidden"
      />
    </>
  );
};

export default PhotoInput;
