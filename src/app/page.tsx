"use client"
import React, { useState } from 'react';
import Analysis from "@/components/Analysis";
import Comparison from "@/components/Comparison";
import MyCard from "@/components/MyCard";
import Questions from "@/components/Questions";
import Statistics from "@/components/Statistics";

export default function Home() {
  const [statistics, setStatistics] = useState({ rank: '', percentile: '', score: '' });

  // Function to update statistics
  const updateStatistics = (rank: string, percentile: string, score: string) => {
    setStatistics({ rank, percentile, score });
  };

  return (
    <>
      <div className='mb-5'>Skill Test</div>
      <section className="flex flex-col md:flex-row"> {/* Flex column for mobile, row for larger screens */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4"> {/* Adjust margins and width */}
          {/* Pass onUpdate prop to MyCard */}
          <MyCard onUpdate={updateStatistics} /> {/* Add margin bottom for spacing on smaller screens */}
          {/* Pass statistics data to Statistics */}
          <Statistics rank={statistics.rank} percentile={statistics.percentile} score={statistics.score} />
          <Comparison percentile={statistics.percentile} /> {/* Align to the right on larger screens */}
        </div>
        <div className="w-full md:w-1/2"> {/* Adjust width */}
          <Analysis /> {/* Display at the bottom on mobile screens */}
          <Questions score={parseFloat(statistics.score)} />

        </div>
      </section>
    </>
  );
}
