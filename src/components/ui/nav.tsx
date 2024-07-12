import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    selected?: boolean;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="mt-20 group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-4 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-10 w-10", // Increase icon size
                    // Update default variant styles
                    link.variant === "default" &&
                      "bg-gray-200 text-blue-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white",
                    link.selected && "bg-gray-300 text-blue-700 text-lg p-10"
                  )}
                >
                  <link.icon className="h-8 w-8" /> {/* Increase icon size */}
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-5">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href="#"
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                "lg:pt-8 pb-8 pl-8 pr-5 rounded-r-full",
                "justify-start",
                "text-lg", // Increase font size
                // Update default variant styles
                link.variant === "default" && "bg-gray-200 text-blue-500 dark:bg-gray-700 dark:text-white",
                link.selected && "bg-gray-300 text-blue-700 text-lg p-10"
              )}
            >
              <link.icon className="mr-2 h-10 w-10" /> {/* Increase icon size */}
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" && "text-gray-400 dark:text-gray-400"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
