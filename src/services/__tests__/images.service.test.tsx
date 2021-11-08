import {ImagesService} from "../images.service";
import React from "react";

describe('ImagesService', () => {
  it('should replace image to placeholder', () => {
    const img = new Image();
    const e = new Event('test');
    Object.defineProperty(e, 'target', {
      writable: true,
      value: img,
    });

    ImagesService.imageErrorHandler(e as unknown as React.SyntheticEvent<HTMLImageElement, Event>);

    expect(img.src).toBe('http://localhost/assets/no-image.png');
    expect(img.classList.contains('img-placeholder')).toBe(true)
  })
});
