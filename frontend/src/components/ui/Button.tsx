import * as React from 'react';

import { cn } from '@/libs/utils';

const variantClasses = {
  default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
  outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizeClasses = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  md: 'h-10 px-4 py-2',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-50',
      'active:scale-[0.98]',
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    // "asChild" renders the Button's styles/behavior onto its single child
    // element (e.g. an <a>) instead of wrapping it in a nested <button>.
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<Record<string, any>>;
      const childProps = (child.props ?? {}) as Record<string, any>;
      const parentProps = props as Record<string, any>;

      const mergedProps: Record<string, any> = { ...parentProps };

      // Compose handlers that exist on both sides (e.g. a magnetic-hover
      // effect on Button plus the child <a>'s own hover handler) so both run.
      for (const key of Object.keys(parentProps)) {
        if (
          /^on[A-Z]/.test(key) &&
          typeof parentProps[key] === 'function' &&
          typeof childProps[key] === 'function'
        ) {
          const childHandler = childProps[key];
          const parentHandler = parentProps[key];
          mergedProps[key] = (...args: unknown[]) => {
            childHandler(...args);
            parentHandler(...args);
          };
        }
      }

      if (parentProps.style || childProps.style) {
        mergedProps.style = { ...parentProps.style, ...childProps.style };
      }

      mergedProps.className = cn(classes, childProps.className);

      return React.cloneElement(child, { ...mergedProps, ref });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';