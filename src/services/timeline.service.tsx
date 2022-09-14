import { Timeline } from "../store/db/entities/timeline";

export const TimelineService = {
  calculateChartRange(timelineDb: Record<string, Timeline>): ChartRange {
    const timelineIds = Object.keys(timelineDb);
    let min = 0;
    let max = 0;

    timelineIds.forEach((id => {
      const { start, end } = timelineDb[id]; 

      if (start < min) {
        min = start;
      }

      if (end > max) {
        max = end;
      }
    }));

    return { min, max };
  },

  getRangeTitle(timelineYear: number) {
    return timelineYear <= 0 ? `${Math.abs(timelineYear)} BBY` : `${timelineYear} ABY`;
  },
};

export interface ChartRange {
  min: number;
  max: number;
}
