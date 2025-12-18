'use client';

import React from 'react';

export default function Button({
  downloadUrl = '',
  className = '',
  children,
}: {
  downloadUrl?: string;
  className?: string;
  children?: React.ReactNode;
}): React.JSX.Element {
  return (
    <button
      onClick={() => {
        window.open(downloadUrl, '_blank');
      }}
      className={className}
    >
      {children}
    </button>
  );
}
