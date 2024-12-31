import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

type AppTitleVariants = VariantProps<typeof appTitle>;

const appTitle = cva("leading-[0.5rem] ", {
  variants: {
    variant: {
      primary: "text-gray-100",
      secondary: "text-zinc-700",
    },
    size: {
      large: "sm:text-4xl text-3xl font-semibold",
      medium: "text-xl font-semibold",
      small: "text-[1rem] font-medium",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

interface AppTitleProps
  extends React.ComponentProps<"h1" | "h2" | "h3" | "h4">,
    AppTitleVariants {
  headingLevel?: "h1" | "h2" | "h3" | "h4";
  title: string;
}

const AppTitle = ({
  headingLevel = "h2",
  title,
  variant,
  size,
  className,
  ...props
}: AppTitleProps) => {
  const Heading = headingLevel;
  return (
    <Heading
      className={`${cn(appTitle({ variant, size }))} ${className}`}
      {...props}
    >
      {title}
    </Heading>
  );
};

export default AppTitle;
