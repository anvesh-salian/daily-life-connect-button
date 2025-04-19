
import React, { useState } from 'react';
import { CallButton } from '@/components/CallButton';
import { DailyTracker } from '@/components/DailyTracker';
import { toast } from 'sonner';

const Index = () => {
  const [callCount, setCallCount] = useState(0);

  const handleCall = () => {
    setCallCount(prev => prev + 1);
    toast.info(`Call initiated (Total calls today: ${callCount + 1})`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white space-y-8 p-4">
      <h1 className="text-3xl font-bold text-dark-charcoal">
        Daily Life Connect
      </h1>
      
      <CallButton onCall={handleCall} />
      
      <DailyTracker />
    </div>
  );
};

export default Index;
