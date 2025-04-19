
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const dailyTasks = [
  'Drink Water',
  'Exercise',
  'Meditate',
  'Read',
  'Sleep Early'
];

export const DailyTracker: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const today = format(new Date(), 'EEEE, MMMM d');

  const toggleTask = (task: string) => {
    setCompletedTasks(prev => 
      prev.includes(task) 
        ? prev.filter(t => t !== task) 
        : [...prev, task]
    );
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-soft-purple/10 shadow-sm">
      <CardHeader>
        <CardTitle className="text-center text-dark-charcoal">
          Daily Tracker - {today}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {dailyTasks.map(task => (
            <div key={task} className="flex items-center space-x-3">
              <Checkbox 
                checked={completedTasks.includes(task)}
                onCheckedChange={() => toggleTask(task)}
              />
              <span className={`text-dark-charcoal ${completedTasks.includes(task) ? 'line-through text-gray-500' : ''}`}>
                {task}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
