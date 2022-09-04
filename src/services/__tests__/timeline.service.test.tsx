import {TimelineService} from "../timeline.service";

describe('TimelineService', () => {
  it('should calculate timeline range', () => {
    const range = TimelineService.calculateChartRange({
      1: {
        id: '1',
        title: 'test',
        start: -10,
        end: 10,
      },
      2: {
        id: '2',
        title: 'test 2',
        start: -10,
        end: 12,
      }
    })

    expect(range.min).toBe(-10);
    expect(range.max).toBe(12);
  });

  it('should get range titles', () => {
    expect('1 ABY').toBe(TimelineService.getRangeTitle(1));
    expect('1 BBY').toBe(TimelineService.getRangeTitle(-1));
    expect('0 BBY').toBe(TimelineService.getRangeTitle(0));
  });
});
