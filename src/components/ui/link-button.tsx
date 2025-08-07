import type React from "react";

import { Button, buttonVariants } from "./button";
import type { VariantProps } from "class-variance-authority";

interface LinkButtonProps extends React.ComponentProps<"button"> {
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}

export const LinkButton = ({
  variant,
  size,
  href,
  ...props
}: LinkButtonProps) => {
  return (
    <Button variant={variant} size={size} {...props} asChild>
      <a href={href}>{props.children}</a>
    </Button>
  );
};
