import React from "react";

export const ImagesService = {
  imageErrorHandler(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const el = e.target as HTMLImageElement;
    el.onerror = null;
    el.src = '/assets/no-image.png';
    el.classList.add('img-placeholder');
  },
}
