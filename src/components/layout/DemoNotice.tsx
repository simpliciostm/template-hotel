import { hotel } from '../../data/hotel';

export function DemoNotice() {
  if (hotel.publication.status !== 'demo') {
    return null;
  }

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-[var(--demo-notice-height)] items-center justify-center border-b border-white/10 bg-ink px-gutter text-center text-[0.72rem] font-medium leading-none text-white/85 sm:text-xs">
      Projeto demonstrativo — site não oficial.
    </div>
  );
}
