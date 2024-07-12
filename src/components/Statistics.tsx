import React, { useState } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, NotepadText, SquareCheck } from 'lucide-react'; // Import Lucide icons

interface StatisticsProps {
  rank: string;
  percentile: string;
  score: string;
}

const Statistics: React.FC<StatisticsProps> = ({ rank, percentile, score }) => {
  return (
    <Card className='w-full mt-4 lg:mt-6 pb-5'>
      <CardHeader>
        <CardTitle className='pb-4'>Quick Statistics</CardTitle>
      </CardHeader>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center lg:flex-row lg:col-span-1 p-4 border-r">
          <Trophy className="w-10 pl-2 h-10 mr-2 lg:mr-4 lg:mb-0" />
          <CardDescription className="text-center lg:text-left">
            <span className="font-bold text-lg">{rank || 1}</span><br/>
            YOUR RANK
          </CardDescription>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:col-span-1 p-4 border-r mt-4 lg:mt-0">
          <NotepadText className="w-10 h-10 pl-2 mr-2 lg:mr-4 lg:mb-0" />
          <CardDescription className="text-center lg:text-left">
            <span className="font-bold text-lg">{percentile || 30} %</span><br/>
            Percentile
          </CardDescription>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:col-span-1 p-4 mt-4 lg:mt-0">
          <SquareCheck className="w-10 pl-2 h-10 mr-2 lg:mr-4 lg:mb-0" />
          <CardDescription className="text-center lg:text-left">
            <span className="font-bold text-lg">{score || 10} / 15</span><br/>
            Correct Answers
          </CardDescription>
        </div>
      </div>
      <CardFooter>
        {/* Any footer content can be added here */}
      </CardFooter>
    </Card>
  );
}

export default Statistics;
