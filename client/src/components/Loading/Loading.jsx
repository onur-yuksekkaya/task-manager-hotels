import { RefreshIcon } from '@heroicons/react/solid';
import React from 'react';

export default function Loading({ color }) {
  return (
    <RefreshIcon
      className={`spinner-border animate-spin inline-block w-6 h-6 ${color}`}
      role="status"
    />
  );
}
