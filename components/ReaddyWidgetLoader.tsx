'use client';

import { useEffect } from 'react';

export default function ReaddyWidgetLoader() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://readdy.ai/api/public/assistant/widget?projectId=46def1a4-bb4b-4055-846b-8427e6f59231';
    script.async = true;

    script.setAttribute('mode', 'hybrid');
    script.setAttribute('voice-show-transcript', 'true');
    script.setAttribute('theme', 'light');
    script.setAttribute('size', 'compact');
    script.setAttribute('accent-color', '#0d9488');
    script.setAttribute('button-base-color', '#134e4a');
    script.setAttribute('button-accent-color', '#fbbf24');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
