"use client";

import { useEffect, useState } from "react";
import { GrCopy } from "react-icons/gr";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { TabsList, TabsTrigger } from "@components/ui/tabs";

export function Email({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.dataset.role === "contact") {
      window.location.href = `mailto:${email}`;
      return;
    }

    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <div className={`flex items-center space-x-2 group `}>
      <GrCopy
        onClick={handleClick}
        className={`transition-opacity duration-300 ${
          copied ? "text-green-800" : "cursor-pointer"
        }`}
      />

      <div
        onClick={handleClick}
        className={`grid gap-4 transition-colors duration-300`}
      >
        <div className="grid grid-cols-3 items-center gap-4">
          <Input
            id="email"
            defaultValue={email}
            readOnly
            className="col-span-2 h-8 bg-gray-100 cursor-text"
            onFocus={(e) => e.target.select()}
          />
          <Label
            data-role="contact"
            className={`cursor-pointer transition-colors ${
              copied
                ? "text-green-800"
                : "text-blue-800 cursor-pointer select-none"
            }`}
          >
            {copied ? "Copied" : "Contact"}
          </Label>
        </div>
      </div>
    </div>
  );
}

export function TabControls({
  tabs,
  currentTab,
  onTabChange,
  triggerBaseClass,
  activeClass,
  inactiveClass,
}: {
  tabs: string[];
  currentTab: string;
  onTabChange: (tab: string) => void;
  triggerBaseClass: string;
  activeClass: string;
  inactiveClass: string;
}) {
  return (
    <TabsList className="w-full flex justify-end bg-gray-600">
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab}
          value={tab}
          onClick={() => onTabChange(tab)}
          className={`cursor-pointer full-w cursor-pointer  ${
            currentTab === tab ? `bg-gray-800` : ""
          }`}
        >
          <p
            className={`${triggerBaseClass} ${
              currentTab === tab ? activeClass : inactiveClass
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </p>
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
