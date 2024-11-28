import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import ThemeMode from "../../components/ui/theme-mode";
import AreaChartStacked from "../../chart/AreaChartStacked";
import BarChartMultiple from "../../chart/bar-chart-multiple";
import BarChartLabel from "../../chart/bar-chart-custom-label";
import PieChartDonut from "../../chart/pie-chart-donut";

import LineChartLabel from "../../chart/line-chart-label";
import LineChartLabel2 from "../../chart/line-chart-label-2";

import AreaChartInteractive from "../../chart/area-chart";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="w-full flex items-center justify-between gap-2 px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <ThemeMode />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-5"> */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            {/* <BarChartMultiple /> */}
            <LineChartLabel />
            <LineChartLabel2 />
            <BarChartMultiple/>
            <BarChartLabel/>
            {/* <LineChartLabel /> */}

            {/* <AreaChartStacked /> */}
          </div>
          <AreaChartInteractive />
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-2">
           
            <BarChartMultiple />
            <BarChartMultiple />

          </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
