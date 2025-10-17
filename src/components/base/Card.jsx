/**
 * Optimized Card Component
 * - Pure presentational component
 * - No event handlers unless explicitly needed
 * - CSS-only hover effects for better performance
 * - Glassmorphism effect with gradient background
 * - Protocol-style gradient border effect
 */
export const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'normal',
  variant = 'default',
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300 relative';

  const variantStyles = {
    default: 'bg-white border border-gray-200',
    glass: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg',
    protocol: 'bg-gradient-to-br from-gray-900 to-gray-950 p-[1px] overflow-hidden',
  };

  const hoverStyles = hover
    ? variant === 'protocol'
      ? 'hover:shadow-2xl hover:shadow-brand-500/20'
      : variant === 'glass'
      ? 'hover:bg-white/90 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200/50 hover:-translate-y-1'
      : 'hover:shadow-lg hover:border-brand-200 transition-shadow duration-300'
    : '';

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    normal: 'p-6',
    lg: 'p-8',
  };

  // Para variant protocol, necesitamos un wrapper interno con efecto SVG diagonal
  if (variant === 'protocol') {
    return (
      <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className} group`} {...props}>
        {/* Inner card content */}
        <div className={`relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl ${paddingStyles[padding]} h-full overflow-hidden`}>
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>

          {/* Grid pattern effects */}
          <div className="pointer-events-none">
            {/* Base grid pattern with gradient mask */}
            <div className="absolute inset-0 rounded-2xl transition duration-300 group-hover:opacity-50" style={{ maskImage: 'linear-gradient(white, transparent)' }}>
              <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/[0.01] stroke-white/[0.025]">
                <defs>
                  <pattern id="protocol-pattern" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="-6">
                    <path d="M.5 56V.5H72" fill="none"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#protocol-pattern)"></rect>
              </svg>
            </div>

            {/* Hover gradient effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-cyan-600/30 opacity-0 transition duration-300 group-hover:opacity-100"></div>

            {/* Overlay grid on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100">
              <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/[0.025] stroke-white/[0.1]">
                <defs>
                  <pattern id="protocol-pattern-hover" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="-6">
                    <path d="M.5 56V.5H72" fill="none"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#protocol-pattern-hover)"></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${paddingStyles[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
