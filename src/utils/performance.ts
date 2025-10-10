// Performance optimization utilities

// Preload critical resources
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Lazy load images with intersection observer
export const createImageObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01
    }
  );
};

// Debounce function for scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Check if device supports WebP
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Get optimal image format based on browser support
export const getOptimalImageFormat = async (baseUrl: string): Promise<string> => {
  const isWebPSupported = await supportsWebP();
  if (isWebPSupported && baseUrl.includes('pexels.com')) {
    return baseUrl.replace(/\.(jpg|jpeg|png)/, '.webp');
  }
  return baseUrl;
};

// Measure Core Web Vitals
export const measureCoreWebVitals = () => {
  // First Contentful Paint
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log('FCP:', entry.startTime);
      }
    }
  });
  observer.observe({ entryTypes: ['paint'] });

  // Largest Contentful Paint
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  });
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  // Cumulative Layout Shift
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    }
    console.log('CLS:', clsValue);
  });
  clsObserver.observe({ entryTypes: ['layout-shift'] });
};

// Network-aware loading
export const getConnectionSpeed = (): string => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  if (connection) {
    return connection.effectiveType || 'unknown';
  }
  return 'unknown';
};

// Adaptive loading based on network conditions
export const shouldLoadHighQualityImages = (): boolean => {
  const connection = getConnectionSpeed();
  return !['slow-2g', '2g'].includes(connection);
};