import * as React from "react";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

import type { VariantProps } from "class-variance-authority";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

LinkButton.displayName = "LinkButton";

export { LinkButton };
