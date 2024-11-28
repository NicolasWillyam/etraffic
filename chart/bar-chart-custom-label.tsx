"use client"
import * as React from "react";
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart"
const chartData = [
    { month: "Đi không đúng chiều đường, phần đương, làn đường quy định", desktop: 1609, mobile: null },
    { month: "Không chú ý quan sát", desktop: 1511, mobile: null },
    { month: "Chuyển hướng không đúng quy định", desktop: 719, mobile: null },
    { month: "Không giữ khoảng cách an toàn với xe chạy liền trước", desktop: 583, mobile: null },
    { month: "Vượt xe không đúng quy định", desktop: 418, mobile: null },
    { month: "Nguyên nhân khác", desktop: 370, mobile: null },
    { month: "Không chấp hành quy định về tốc độ", desktop: 350, mobile: null },
    { month: "Không chấp hành quy định nhường đường tại nơi giao nhau", desktop: 290, mobile: null },
    { month: "Chưa rõ nguyên nhân", desktop: 277, mobile: null },
    { month: "Qua đường không đúng quy định", desktop: 179, mobile: null }
  ];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export default function BarChartLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Custom Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey=""
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
