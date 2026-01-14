interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "highlighted" | "glass";
  hover?: boolean;
  id?: string;
}

const variantStyles = {
  default: "bg-dark-800 border border-dark-700",
  highlighted: "bg-gradient-to-br from-dark-800 to-dark-900 border-2 border-primary-500 shadow-xl shadow-primary-500/10",
  glass: "glass-card",
};

export function Card({
  children,
  className = "",
  variant = "default",
  hover = false,
  id
}: CardProps) {
  return (
    <div
      id={id}
      className={`
        rounded-2xl p-6
        ${variantStyles[variant]}
        ${hover ? "hover-lift cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ children, className = "", as: Component = "h3" }: CardTitleProps) {
  return (
    <Component className={`text-xl font-bold text-dark-50 ${className}`}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return (
    <p className={`text-dark-400 mt-1 ${className}`}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`mt-6 pt-4 border-t border-dark-700 ${className}`}>
      {children}
    </div>
  );
}
