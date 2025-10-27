'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function LazyImage({ src, alt, className, width, height, priority }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (priority) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 800}
          className={className}
          onLoad={() => setIsLoaded(true)}
          priority
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        decoding="async"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}

