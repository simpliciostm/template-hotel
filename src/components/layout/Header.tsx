import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { hotel } from '../../data/hotel';

const navigationItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Studios', href: '#studios' },
  { label: 'Comodidades', href: '#comodidades' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 96);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const linkColor = isScrolled
    ? 'text-ink hover:text-accent-dark'
    : 'text-white/90 hover:text-white';
  const logoColor = isScrolled ? 'text-ink' : 'text-white';
  const headerSurface = isScrolled
    ? 'border-line bg-canvas-soft shadow-[0_0.75rem_2rem_rgb(34_31_27_/_0.05)]'
    : 'border-transparent bg-transparent';
  const mobileButtonColor = isScrolled
    ? 'border-line text-ink hover:border-accent'
    : 'border-white/40 text-white hover:border-white';

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-[var(--demo-notice-height)] z-50 border-b transition-[top,background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${headerSurface}`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-site items-center justify-between px-gutter lg:h-24">
        <a
          href="#inicio"
          className={`group inline-flex flex-col leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${logoColor}`}
          aria-label={`${hotel.name} - Início`}
          onClick={closeMenu}
        >
          <span className="text-[1.45rem] font-light tracking-[0.16em] sm:text-3xl">
            {hotel.wordmark.primary}
          </span>
          <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.44em] sm:text-[0.62rem] sm:tracking-[0.48em]">
            {hotel.wordmark.secondary}
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none ${linkColor}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={hotel.hero.secondaryCta.href}
          className="hidden min-h-11 items-center justify-center rounded-soft border border-accent bg-accent px-5 text-sm font-semibold text-ink-inverse transition-colors duration-300 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none lg:inline-flex"
        >
          {hotel.hero.secondaryCta.label}
        </a>

        <button
          type="button"
          className={`inline-flex size-11 items-center justify-center rounded-soft border transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none lg:hidden ${mobileButtonColor}`}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <nav
          className="mx-gutter mb-4 rounded-soft border border-line bg-canvas-soft px-4 py-4 shadow-soft sm:px-5 sm:py-5"
          aria-label="Navegação mobile"
        >
          <div className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-soft px-2 py-3 text-[0.95rem] font-semibold text-ink transition-colors hover:text-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none sm:text-base"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href={hotel.hero.secondaryCta.href}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-soft border border-accent bg-accent px-5 py-3 text-sm font-semibold text-ink-inverse transition-colors hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
              onClick={closeMenu}
            >
              {hotel.hero.secondaryCta.label}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
