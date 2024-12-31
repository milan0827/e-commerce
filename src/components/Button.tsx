import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";

export type ButtonVariantProps = VariantProps<typeof button>;

const button = cva(
  "rounded-md py-1 px-4 flex items-center justify-center gap-4 border-2 border-transparent transition-all duration-400",
  {
    variants: {
      variant: {
        primary:
          "  bg-green-500 text-gray-100 border-2 border-transparent hover:bg-green-500/80",
        secondary:
          "border-green-500 border-2 text-green-500 hover:bg-green-500 hover:text-gray-100 hover:border-transparent",
      },
      size: {
        large: "w-full text-sm",
        small: "w-32 px-2",
        medium: "",
      },
    },

    defaultVariants: {
      size: "large",
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "suffix" | "prefix">,
    ButtonVariantProps {
  label: string;
}

const Button = ({ label, variant, size, ...props }: ButtonProps) => {
  const { className } = props;
  return (
    <button
      className={`${cn(button({ variant, size }))} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
