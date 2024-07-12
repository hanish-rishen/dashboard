import React from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface QuestionsProps {
  score: number; // Define the score prop
}

const totalQuestions = 15;

const Questions: React.FC<QuestionsProps> = ({ score }) => {
  const correctAnswers = score||10; // Use the score prop for correctAnswers
  const incorrectAnswers = totalQuestions - correctAnswers;

  const chartData = [
    { name: "Correct", value: correctAnswers, fill: "#2196f3" }, // Blue color
    { name: "Incorrect", value: incorrectAnswers, fill: "#ccc" }, // Grey color
  ];

  const chartConfig: ChartConfig = {
    correct: {
      label: "Correct",
      color: "#2196f3", // Blue color
    },
    incorrect: {
      label: "Incorrect",
      color: "#ccc", // Grey color
    },
  };

  return (
    <Card className='w-full mt-4 lg:mt-6 lg:ml-2'>
      <CardHeader>
        <CardTitle>Question Analysis</CardTitle>
        <CardDescription className='text-lg pt-4'>
          <b>You Scored {correctAnswers || 10} questions correct out of {totalQuestions}.</b> However, it still needs some improvements.
        </CardDescription>
      </CardHeader>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && typeof viewBox !== 'string' && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {correctAnswers}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Correct
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <CardFooter>
        {/* Add your footer content here */}
      </CardFooter>
    </Card>
  );
};

export default Questions;
