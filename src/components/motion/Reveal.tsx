import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

type RevealVariant = 'default' | 'image';
type RevealState = {
  isReady: boolean;
  isVisible: boolean;
};
type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

export function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  variant = 'default',
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [revealState, setRevealState] = useState<RevealState>({
    isReady: false,
    isVisible: true,
  });

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setRevealState({ isReady: true, isVisible: true });
      return;
    }

    let animationFrame = 0;
    let fallbackTimer = 0;

    const showElement = () => {
      setRevealState({ isReady: true, isVisible: true });
    };

    const prepareElement = () => {
      setRevealState({ isReady: true, isVisible: false });
    };

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const rect = element.getBoundingClientRect();
    const isNearViewport =
      rect.top < viewportHeight * 0.96 && rect.bottom > viewportHeight * 0.04;

    prepareElement();

    if (isNearViewport) {
      animationFrame = window.requestAnimationFrame(() => {
        showElement();
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showElement();
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.01,
      },
    );

    observer.observe(element);

    fallbackTimer = window.setTimeout(() => {
      showElement();
      observer.disconnect();
    }, 1600);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <Component
      ref={elementRef}
      className={className}
      data-reveal={variant}
      data-reveal-ready={revealState.isReady ? 'true' : 'false'}
      data-reveal-visible={revealState.isVisible ? 'true' : 'false'}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
