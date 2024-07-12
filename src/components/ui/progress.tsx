// components/ui/progress.tsx

"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ className, value }) => {
  let colorClass = "";
  if (value >= 90) {
    colorClass = "bg-green-500"; // Example: green for progress >= 80
  } else if (value >= 80)  {
    colorClass = "bg-blue-500"; // Example: red for progress < 40
  } else if (value >= 60) {
    colorClass = "bg-orange-500"; // Example: yellow for progress >= 60
  } else if (value <= 30) {
    colorClass = "bg-red-500"; // Example: orange for progress >= 40
  } 

  return (
    <ProgressPrimitive.Root
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-primary transition-all",
          colorClass // Apply the determined color class to the filled part
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
