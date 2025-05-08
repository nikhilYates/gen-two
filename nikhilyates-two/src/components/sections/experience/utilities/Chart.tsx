"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

type ChartDataPoint = {
  label: string;
  desktop: number;
}

type Props = {
  chartData: ChartDataPoint[];
  chartColor?: number;
}

export function ExperienceGraph({ chartData, chartColor }: Props) {
  const [config, setConfig] = useState<ChartConfig>({
    desktop: {
      label: "Desktop",
      color: "",
    },
  });

  const colorMap: { [key: number]: string } = {
    1: "#00BFFF",
    2: "orange", 
    3: "lime",
    4: "yellow",
    5: "purple",
  };

  useEffect(() => {
    if (chartColor) {
      setConfig({
        desktop: {
          label: "Desktop",
          color: colorMap[chartColor],
        },
      });
    }
  }, [chartColor]);

  return (
    <Card className="bg-inherit text-white h-full w-full border-0">
      <CardContent className="pb-0 h-full w-full">
        <ChartContainer
          config={config}
          className="aspect-square"
        >
          <RadarChart 
            data={chartData}
            outerRadius="70%"
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <PolarAngleAxis 
              dataKey="label" 
              stroke="#ffffff"
              tick={{ fontSize: 12 }}
            />
            <PolarGrid radialLines={false} stroke="#4b5563" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0}
              stroke="var(--color-desktop)"
              strokeWidth={3}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
