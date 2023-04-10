import React from "react";

type Props = {
  color: string;
  percentage: number;
  hour?: boolean;
};

const ClockCircle = ({ color, percentage, hour = false }: Props) => {
  return (
    <div className="flex h-[200px] w-[200px]">
      <svg width="200" height="200">
        <g transform="rotate(-90, 100, 100)">
          <circle
            r="70"
            cx="100"
            cy="100"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1rem"
            strokeDasharray="439.8"
            strokeDashoffset="0"
            className="text-gray-100"
          ></circle>
          <circle
            r="70"
            cx="100"
            cy="100"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1rem"
            strokeDasharray="439.8"
            strokeDashoffset={440 - (440 * percentage) / (hour ? 12 : 60)}
            className={`${color} opacity-50 blur-md`}
          ></circle>
          <circle
            r="70"
            cx="100"
            cy="100"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1rem"
            strokeDasharray="439.8"
            strokeDashoffset={440 - (440 * percentage) / (hour ? 12 : 60)}
            className={`${color}`}
          ></circle>
        </g>
        <text
          className="text-xl font-bold"
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
        >
          {percentage.toString().padStart(2, "0")}
        </text>
      </svg>
    </div>
  );
};

export default ClockCircle;
