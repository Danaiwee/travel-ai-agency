import Image from "next/image";

import { cn, formatNumber, getPercentageChange } from "@/lib/utils";

interface StatCardProps {
  headerTitle: string;
  total: number;
  currentMonthCount: number;
  lastMothCount: number;
}

const StatCard = ({
  headerTitle,
  total,
  currentMonthCount,
  lastMothCount,
}: StatCardProps) => {
  const isIncreased = Number(currentMonthCount) > Number(lastMothCount);
  const percentage = getPercentageChange(currentMonthCount, lastMothCount);

  return (
    <div className="stat-card">
      <h1 className="paragraph-semibold text-gray-500">{headerTitle}</h1>

      <div className="flex-between flex-wrap">
        <div className="flex flex-col gap-1">
          <h1 className="h1-bold">{formatNumber(total)}</h1>
          <div className="flex items-center gap-1">
            <Image
              src={
                isIncreased
                  ? "/icons/arrow-up-green.svg"
                  : "/icons/arrow-down-red.svg"
              }
              width={20}
              height={20}
              alt="Arrow icon"
            />
            <div className="flex flex-col sm:flex-row">
              <p
                className={cn(
                  isIncreased ? "text-green-600" : "text-red-400",
                  "body-medium"
                )}
              >
                {percentage}%&nbsp;
              </p>
              <p className="body-medium text-gray-500">vs last month</p>
            </div>
          </div>
        </div>
        <Image
          src={isIncreased ? "/icons/increment.svg" : "/icons/decrement.svg"}
          width={120}
          height={20}
          alt="Trend icon"
        />
      </div>
    </div>
  );
};

export default StatCard;
