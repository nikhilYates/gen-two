"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
const chartData = [
    { label: "Project Management", desktop: 100},
    { label: "SaaS", desktop: 175},
    { label: "Product", desktop: 100},
    { label: "Software Design", desktop: 185},
    { label: "Finance", desktop: 60},
    { label: "AI/ML", desktop: 160},
    { label: "Data", desktop: 174},
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ExperienceGraph() {
  return (
    <Card className="bg-inherit text-white border-0">
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
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
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
