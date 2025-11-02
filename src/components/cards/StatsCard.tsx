import React from 'react';

type StatsCardProps = {
  title: string;
  value: string;
  description: string;
  percentage: string;
  progress: number;
  progressColor: string;
  change: string;
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  percentage,
  progress,
  progressColor,
  change,
}) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
          {change}
        </span>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="mt-4">
        <div className="h-1.5 w-full rounded-full bg-gray-200">
          <div 
            className="h-full rounded-full" 
            style={{ 
              width: `${progress}%`,
              backgroundColor: progressColor 
            }}
          ></div>
        </div>
        <div className="mt-1 flex justify-between text-xs text-gray-500">
          <span>{percentage}</span>
          <span>{change} from last month</span>
        </div>
      </div>
    </div>
  );
};
