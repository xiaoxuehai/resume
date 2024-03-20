import type { HTMLAttributes } from 'react';

import { clsxm } from '@/lib';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      className={clsxm('flex min-h-0 flex-col gap-y-3 ', className)}
      {...props}
    />
  );
}
