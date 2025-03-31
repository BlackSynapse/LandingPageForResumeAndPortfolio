"use client";

import { Separator } from "@components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { ReactNode } from "react";
import clsx from "clsx";

type Action = {
  icon: ReactNode;
  label: string;
  href?: string;
  popoverContent?: ReactNode;
  download?: boolean;
  target?: "_self" | "_blank";
};

type ActionGroupProps = {
  actions: Action[];
  direction?: "horizontal" | "vertical" | "responsive";
  size?: "sm" | "md" | "lg";
};

const SizeMap = {
  sm: "text-sm space-x-4 md:space-x-6",
  md: "text-base space-x-6 md:space-x-8",
  lg: "text-lg space-x-8 md:space-x-10",
};

export default function ActionGroup({
  actions,
  direction = "horizontal",
  size = "md",
}: ActionGroupProps) {
  const isVertical = direction === "vertical";
  const isHorizontal = direction === "horizontal";
  const isResponsive = direction === "responsive";

  const containerClasses = clsx(
    "flex items-center py-4 w-full max-w-6xl px-4 mx-auto",
    {
      "flex-col space-y-6": isVertical,
      "flex-row": isHorizontal,
      "flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6": isResponsive,
    },
    !isVertical && !isResponsive && SizeMap[size]
  );
  return (
    <div className={clsx("justify-center", containerClasses)}>
      {actions.map((action, index) => (
        <div key={index} className="flex items-center space-x-2">
          {action.popoverContent ? (
            <Popover>
              <PopoverTrigger className="cursor-pointer">
                <div className="flex items-center space-x-2">
                  {action.icon}
                  <span>{action.label}</span>
                </div>
              </PopoverTrigger>
              <PopoverContent>{action.popoverContent}</PopoverContent>
            </Popover>
          ) : action.href ? (
            <a
              href={action.href}
              target={action.target ?? "_self"}
              rel={
                action.target === "_blank" ? "noopener noreferrer" : undefined
              }
              className="flex items-center text-blue-500 space-x-2"
              download={
                typeof action.download === "boolean" ? action.download : false
              }
            >
              {action.icon}
              <span>{action.label}</span>
            </a>
          ) : (
            <div className="flex items-center space-x-2">
              {action.icon}
              <span>{action.label}</span>
            </div>
          )}
          {index < actions.length - 1 && !isVertical && (
            <Separator orientation="vertical" />
          )}
        </div>
      ))}
    </div>
  );
}
