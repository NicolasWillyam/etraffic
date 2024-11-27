"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
  { browser: "opera", visitors: 120, fill: "#FF6347" },
  { browser: "brave", visitors: 95, fill: "#4682B4" },
  { browser: "vivaldi", visitors: 85, fill: "#FFD700" },
  { browser: "ucbrowser", visitors: 67, fill: "#ADFF2F" },
  { browser: "duckduckgo", visitors: 58, fill: "#FF69B4" },
  { browser: "yandex", visitors: 47, fill: "#8A2BE2" },
  { browser: "qqbrowser", visitors: 39, fill: "#5F9EA0" },
  { browser: "maxthon", visitors: 25, fill: "#6495ED" },
  { browser: "sogou", visitors: 18, fill: "#FF4500" },
  { browser: "tor", visitors: 10, fill: "#7FFF00" },
];

export const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
  opera: {
    label: "Opera",
    color: "#FF6347",
  },
  brave: {
    label: "Brave",
    color: "#4682B4",
  },
  vivaldi: {
    label: "Vivaldi",
    color: "#FFD700",
  },
  ucbrowser: {
    label: "UC Browser",
    color: "#ADFF2F",
  },
  duckduckgo: {
    label: "DuckDuckGo",
    color: "#FF69B4",
  },
  yandex: {
    label: "Yandex",
    color: "#8A2BE2",
  },
  qqbrowser: {
    label: "QQ Browser",
    color: "#5F9EA0",
  },
  maxthon: {
    label: "Maxthon",
    color: "#6495ED",
  },
  sogou: {
    label: "Sogou",
    color: "#FF4500",
  },
  tor: {
    label: "Tor",
    color: "#7FFF00",
  },
} satisfies ChartConfig;

export default function BarChartMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Mixed</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
