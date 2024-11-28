"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "1", desktop: 293 },
  { month: "2", desktop: 181 },
  { month: "3", desktop: 148 },
  { month: "4", desktop: 128 },
  { month: "5", desktop: 192 },
  { month: "6", desktop: 276 },
  { month: "7", desktop: 324 },
  { month: "8", desktop: 366 },
  { month: "9", desktop: 370 },
  { month: "10", desktop: 383 },
  { month: "11", desktop: 389 },
  { month: "12", desktop: 423 },
  { month: "13", desktop: 373 },
  { month: "14", desktop: 516 },
  { month: "15", desktop: 581 },
  { month: "16", desktop: 621 },
  { month: "17", desktop: 642 },
  { month: "18", desktop: 615 },
  { month: "19", desktop: 831 },
  { month: "20", desktop: 823 },
  { month: "21", desktop: 907 },
  { month: "22", desktop: 862 },
  { month: "23", desktop: 691 },
  { month: "24", desktop: 464 }
]

const chartConfig = {
  desktop: {
    label: "Data",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function BarChartMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Số vụ tai nạn theo giờ</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    
    </Card>
  )
}
