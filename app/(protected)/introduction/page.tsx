import React from "react";
import { AccordionQuestion } from "./_components/questions";

import RadarChartLegend from "@/chart/radar-chart-legend";

const page = () => {
  return (
    <div className="w-full px-10 flex min-h-screen justify-between">
      <div className="max-w-5xl">
        <p className="text-[30px] font-bold">Introduction</p>
        <p className="text-gray-400 mt-6">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
        <div className="mt-12 space-y-6">
          <p>
            This is NOT a component library. It s a collection of re-usable
            components that you can copy and paste into your apps.
          </p>
          <p>What do you mean by not a component library?</p>
          <p>
            I mean you do not install it as a dependency. It is not available or
            distributed via npm.
          </p>
          <p>
            Pick the components you need. Copy and paste the code into your
            project and customize to your needs. The code is yours.
          </p>
          <p>Use this as a reference to build your own component libraries.</p>
        </div>
        <AccordionQuestion />
      </div>
      <div className="w-1/3 h-fit">
        <RadarChartLegend />
      </div>
    </div>
  );
};

export default page;
