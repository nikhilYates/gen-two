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
    <Card className="bg-inherit text-white border-0">
      <CardContent className="pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square"
        >
          <RadarChart data={chartData}>
            <PolarAngleAxis dataKey="label" stroke="#ffffff" />
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
