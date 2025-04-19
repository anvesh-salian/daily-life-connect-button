
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CallButtonProps {
  onCall?: () => void;
}

export const CallButton: React.FC<CallButtonProps> = ({ onCall }) => {
  const handleCall = () => {
    // In a real app, this would trigger actual phone call logic
    console.log("Initiating call...");
    onCall?.();
  };

  return (
    <Button 
      onClick={handleCall} 
      className="bg-vivid-purple hover:bg-soft-purple text-white rounded-full p-6 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <Phone size={48} strokeWidth={2} />
    </Button>
  );
};
