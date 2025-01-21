export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `shiftGradient ${animationSpeed}s linear infinite`,
  };

  const borderStyle = showBorder ? {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "200% auto",
    animation: `shiftGradient ${animationSpeed}s linear infinite`,
    opacity: 0.2,
  } : {};

  return (
    <div className={`relative flex max-w-fit items-center justify-center transition-shadow duration-500 overflow-visible  ${className}`}>
      <span style={gradientStyle}>
        {children}
      </span>
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none rounded-[1.25rem]"
          style={borderStyle}
        >
          <div
            className="absolute inset-0 bg-black z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
    </div>
  );
}