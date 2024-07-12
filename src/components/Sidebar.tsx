"use client"

import React from 'react';
import { Nav } from './ui/nav';
import {
  BarChart2,
  Award,
  File,
} from "lucide-react";
import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
  useWindowWidth,
} from '@react-hook/window-size';

const Sidebar: React.FC = () => {
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth <= 1350;

  return (
    <TooltipProvider>
      <div className='w-1/6 border-r'>
        <Nav
          isCollapsed={mobileWidth}
          links={[
            {
              title: "Dashboard",
              icon: BarChart2,
              variant: "ghost",
            },
            {
              title: "Skill Test",
              icon: Award,
              variant: "default",
            },
            {
              title: "Internship",
              icon: File,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </TooltipProvider>
  );
};

export default Sidebar;