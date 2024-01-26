import React from "react";
import { TooltipProps } from "recharts";

export const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    const totalValue = payload.reduce((sum, entry) => sum + entry.value, 0);

    return (
      <div className="custom-tooltip">
        <p className="bg-[#34CAA5] text-white p-2 rounded-xl">{`${label} : ${totalValue}`}</p>
      </div>
    );
  }

  return null;
};
