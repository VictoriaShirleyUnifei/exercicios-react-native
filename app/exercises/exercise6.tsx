import Random from '@/components/Random/Random';
import React from 'react';

export default function exercise6() {
  const fruits = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Melancia'];

  return (
    <Random items={fruits} />
  )
}

