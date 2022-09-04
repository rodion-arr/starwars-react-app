import React, { useState, useEffect } from "react";
import {
  ChartRange,
  TimelineService,
} from "../../../services/timeline.service";
import { Timeline } from "../../../store/db/entities/timeline";
import "./TimelineChart.scss";

interface YearsList {
  title: string;
  rangeYear: number;
}

export interface Props {
  range: ChartRange;
  timeline: Record<string, Timeline>;
}

export const TimelineChart = ({ range, timeline }: Props): JSX.Element => {
  const [yearsData, setYearsData] = useState<YearsList[]>([]);

  // calculate chart year title
  useEffect(() => {
    const years: YearsList[] = [];
    for (let i = range.min; i <= range.max; i++) {
      years.push({
        title: TimelineService.getRangeTitle(i),
        rangeYear: i,
      });
    }

    setYearsData(years);
  }, [range]);

  return (
    <div className="timeline">
      <h2 className="timeline__title">Star Wars timeline</h2>

      {yearsData.length && (
        <div className="timeline__chart-scroll">
          <table className="timeline__chart timeline__chart--header">
            <thead>
              <tr className="timeline__chart-row">
                <th className="timeline__chart-col timeline__chart-col--header">
                  #
                </th>
                {yearsData.map((year) => (
                  <th
                    className="timeline__chart-col timeline__chart-col--header"
                    key={year.rangeYear}
                  >
                    {year.title}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
          <table className="timeline__chart timeline__chart--body">
            <tbody>
              {Object.keys(timeline).map((entryId) => {
                const { start, end } = timeline[entryId];
                const delta = Math.abs(end - start) || 1;

                return (
                  <tr className="timeline__chart-row" key={entryId}>
                    <td className="timeline__chart-col">
                      {timeline[entryId].title}
                    </td>
                    {yearsData.map(({ rangeYear }) => {
                      let td = (
                        <td
                          className="timeline__chart-col"
                          key={rangeYear}
                        ></td>
                      );

                      if (start === rangeYear) {
                        td = (
                          <td
                            className="timeline__chart-col"
                            key={rangeYear}
                            colSpan={delta}
                          >
                            <div className="timeline__chart-line" />
                          </td>
                        );
                      }
                      return td;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
