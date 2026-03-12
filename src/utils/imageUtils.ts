export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

const dimensionsCache = new Map<string, ImageDimensions>();

export const getImageDimensions = (src: string): Promise<ImageDimensions> => {
  if (dimensionsCache.has(src)) {
    return Promise.resolve(dimensionsCache.get(src)!);
  }

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const dimensions: ImageDimensions = {
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight
      };

      dimensionsCache.set(src, dimensions);
      resolve(dimensions);
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };

    img.src = src;
  });
};

export const calculateGridRowSpan = (aspectRatio: number, baseRowHeight: number = 10): number => {
  const minSpan = 8;
  const maxSpan = 24;

  const span = Math.round(baseRowHeight / aspectRatio);

  return Math.max(minSpan, Math.min(maxSpan, span));
};
