"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ModeToggle;
