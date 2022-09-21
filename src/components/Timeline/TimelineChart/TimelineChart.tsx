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

      <p><strong>"Star Wars timeline"</strong> is a chart that visually represents the chronological order of Star Wats movies and series.</p>
      <p>The first column is movie/series name, the next columns are years in timeline at which this movie/series took place.</p>
      
      <h3>What do BBY and ABY mean?</h3>
      <p>In Star Wars galactic history the central event a <strong>Battle of Yavin</strong> (Episode IV) is considered.</p>
      <p>So BBY and ABY are "<strong>B</strong>efore <strong>B</strong>attle of <strong>Y</strong>avin"
          and "<strong>A</strong>fter <strong>B</strong>attle of <strong>Y</strong>avin" respectively</p>

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

                // for entries more that 1 year - less cols required to render
                let colsToRender = [...yearsData];
                if (delta > 1) {
                  colsToRender = colsToRender.slice(0, delta * -1);
                }

                return (
                  <tr className="timeline__chart-row" key={entryId}>
                    <td className="timeline__chart-col">
                      {timeline[entryId].title}
                    </td>
                    {colsToRender.map(({ rangeYear }) => {
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
