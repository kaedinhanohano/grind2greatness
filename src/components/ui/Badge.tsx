interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

const variantStyles = {
  default: "bg-dark-700 text-dark-200",
  primary: "bg-primary-500/20 text-primary-400 border border-primary-500/30",
  success: "bg-green-500/20 text-green-400 border border-green-500/30",
  warning: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
