import type { PropsWithChildren } from 'react';

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-canvas text-ink antialiased selection:bg-accent selection:text-ink-inverse">
      {children}
    </div>
  );
}
