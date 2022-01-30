import * as React from "react";

declare const Badge: React.FC<{
  className: String,
  max: Number,
  variant: 'dot' | 'standard',
  overlap: 'circular' | 'rectangular',
  showZero: Boolean,
  invisible: Boolean,
}>;

export default Badge;
