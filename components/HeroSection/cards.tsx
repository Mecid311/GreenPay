import React from 'react';
import type { CardKey } from './types';

export function CardInner({ kind }: { kind: CardKey }) {
  if (kind === 'supreme') {
    return (
      <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
      
      </div>
    );
  }


  if (kind === 'champion') {
    return (
      <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
      </div>
    );
  }

  return <div style={{ width: '100%', height: '100%' }} />;
}
