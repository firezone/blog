import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  AsciinemaPlayer: AsciinemaPlayer,
};
