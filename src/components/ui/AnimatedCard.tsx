
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowBorder?: boolean;
  glassEffect?: boolean;
  children: React.ReactNode;
}

const AnimatedCard = ({
  glowBorder = false,
  glassEffect = false,
  className,
  children,
  ...props
}: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]",
        glowBorder && "neon-border",
        glassEffect && "glass-card",
        !glassEffect && "bg-card-gradient",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
