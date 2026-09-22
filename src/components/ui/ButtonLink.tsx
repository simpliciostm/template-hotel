import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary';
  }
>;

export function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  const styles =
    variant === 'primary'
      ? 'border-accent bg-accent text-ink-inverse hover:bg-accent-dark'
      : 'border-line bg-transparent text-ink hover:border-accent hover:text-accent-dark';

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-soft border px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
