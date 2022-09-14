import React, { useEffect, useState } from "react";
import { TimelineChart } from "../../components/Timeline/TimelineChart/TimelineChart";
import { TimelineService, ChartRange } from "../../services/timeline.service";
import {TimelineProps} from "./types";

export function Timeline({
  timeline,
}: TimelineProps): JSX.Element | null {
  const [range, setRange] = useState<null | ChartRange>(null);

  useEffect(() => {
    if (timeline) {
      setRange(TimelineService.calculateChartRange(timeline));
    }
  }, [timeline]);

  if (!timeline || !range) {
    return null;
  }

  return <TimelineChart range={range} timeline={timeline} />;
}
