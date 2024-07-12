import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter, // Add CardFooter import
} from "@/components/ui/card";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import {
  ChartContainer,
} from "@/components/ui/chart";

interface ChartData {
  x: number;
  students: number;
}

interface ComparisonProps {
  percentile: string;
}

const initialChartData: ChartData[] = [];

const amplitude = 40;
const wavelength = 100;
const frequency = (2 * Math.PI) / wavelength;

for (let i = 0; i <= wavelength; i++) {
  const x = (i / wavelength) * 100;

  const mountainWave = amplitude - Math.abs(i - (wavelength / 2)) * (amplitude / (wavelength / 2));
  const studentsCountMountain = 50 + mountainWave * Math.sin(frequency * i);

  initialChartData.push({ x: Math.round(x), students: Math.round(studentsCountMountain) });
}

console.log(initialChartData);

const chartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--chart-1))",
  },
};

const Comparison: React.FC<ComparisonProps> = ({ percentile }) => {
  const [dynamicScore, setDynamicScore] = useState<number>(parseInt(percentile));
  const [comparisonText, setComparisonText] = useState<string>('');

  useEffect(() => {
    const percentileValue = parseInt(percentile);
    setDynamicScore(percentileValue);

    if (percentileValue > 72) {
      setComparisonText('higher than');
    } else if (percentileValue < 72) {
      setComparisonText('lower than');
    } else if (percentileValue === 72) {
      setComparisonText('equal to');
    } else {
      setComparisonText('lower than');
    }
  }, [percentile]);

  const updateChartData = () => {
    return initialChartData.map(item => ({
      ...item,
      dynamicScore: dynamicScore,
    }));
  };

  return (
    <Card className='w-full mt-4 lg:mt-6'>
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
        <CardDescription className="p-4 text-left text-lg text-gray-500">
          <b>You scored {parseInt(percentile || '30')}% percentile</b> which is {comparisonText} the average percentile 72% of all engineers who took this assessment.
        </CardDescription>
      </CardHeader>
      <ChartContainer className='p-4' config={chartConfig}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={updateChartData()}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              tickCount={5}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip />
            <Line
              type="basis"
              dataKey="students"
              stroke="#007bff"
              strokeWidth={2}
              dot={false}
            />
            {initialChartData.map((item, index) => (
              Math.abs(item.x - dynamicScore) < 1 &&
              <ReferenceDot key={index} x={item.x} y={item.students} r={6} fill="#007bff" stroke="#007bff" strokeWidth={2} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <CardFooter className="text-center text-lg text-gray-500 mt-2 justify-center"> Score </CardFooter>
    </Card>
  );
}

export default Comparison;
