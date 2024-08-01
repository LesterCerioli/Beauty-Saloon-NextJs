import React from 'react';
import { useInView } from 'react-intersection-observer';

export function LazyLoad ({ children }: any) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Renderizar apenas uma vez
    threshold: 0.30, // Quantidade de visibilidade necessária para acionar (0.1 = 10%)
  });

  return (
    <div ref={ref}>
      {inView ? children : null}
    </div>
  );
};