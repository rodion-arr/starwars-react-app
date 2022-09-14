export interface Timeline {
  id: string;
  title: string;
  start: number;
  end: number;
}

export function isTimeline(object: unknown): object is Timeline {
  return Object.prototype.hasOwnProperty.call(object, 'title')
    && Object.prototype.hasOwnProperty.call(object, 'start')
    && Object.prototype.hasOwnProperty.call(object, 'end');
}
