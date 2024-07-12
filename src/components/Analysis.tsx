// components/Analysis.tsx

import React from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Analysis() {
  return (
    <Card className='w-full lg:mt-0 lg:ml-2'>
      <CardHeader>
        <CardTitle>Syllabus Wise Analysis</CardTitle>

        <CardDescription className='pt-4 text-lg pb-4'>
          HTML Tools, Forms, History
        </CardDescription>
        <Progress value={80} />


        <CardDescription className='pt-4 text-lg pb-4'>
          Tags & References in HTML
          
        </CardDescription>
        <Progress value={60} />

        <CardDescription className='pt-4 text-lg pb-4'>
          Tables & References in HTML
          
        </CardDescription>
        <Progress value={24} />

        <CardDescription className='pt-4 text-lg pb-4' >
           Tables & CSS Basics
          
        </CardDescription>
        <Progress value={96} />

      </CardHeader>

      <CardFooter>
        {/* Add your footer content here */}
      </CardFooter>
    </Card>
  );
}
