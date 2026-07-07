'use client';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const CanvasBackground = dynamic(() => import('./CanvasBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-white" />,
});

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none">
      <Suspense fallback={<div className="fixed inset-0 -z-10 bg-white" />}>
        <CanvasBackground />
      </Suspense>
    </div>
  );
}
