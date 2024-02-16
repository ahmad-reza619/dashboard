interface CircleProgressBar {
  progress: number;
  strokeColor: string;
}

const CircleProgressBar = ({ progress, strokeColor }: CircleProgressBar) => {
  const strokeWidth = 30;
  const circleRadius = 100;

  const radius = circleRadius - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const normalizedRadius = circleRadius - strokeWidth / 2;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg width={circleRadius * 2} height={circleRadius * 2}>
      <circle
        stroke="#d2d3d4"
        fill="none"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={circleRadius}
        cy={circleRadius}
      />
      <circle
        stroke={strokeColor}
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={circleRadius}
        cy={circleRadius}
      />
      <text
        fill={strokeColor}
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
        fontSize="20px"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default CircleProgressBar;
