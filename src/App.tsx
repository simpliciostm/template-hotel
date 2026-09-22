import { ArrowUpRight, BedDouble, MapPin } from 'lucide-react';

import { PageShell } from './components/layout/PageShell';
import { ButtonLink } from './components/ui/ButtonLink';
import { hotel } from './data/hotel';

function App() {
  return (
    <PageShell>
      <main className="mx-auto flex min-h-screen w-full max-w-site flex-col justify-center px-gutter py-section">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Fundacao visual
        </p>

        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-copy">
            <h1 className="font-display text-5xl leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
              {hotel.name}
            </h1>
            <p className="mt-7 text-base leading-8 text-ink-muted sm:text-lg">
              {hotel.description}
            </p>
          </div>

          <div className="border-l border-line pl-6 text-sm leading-7 text-ink-muted sm:pl-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 text-accent" aria-hidden="true" />
              <p>
                {hotel.address.city || 'Cidade placeholder'}
                {hotel.address.state ? `, ${hotel.address.state}` : ''}
              </p>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <BedDouble
                className="mt-1 size-5 text-accent"
                aria-hidden="true"
              />
              <p>
                Estrutura preparada para receber as proximas secoes editoriais
                do site.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="#estrutura">
            Estrutura inicial
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#design" variant="secondary">
            Direcao visual
          </ButtonLink>
        </div>
      </main>
    </PageShell>
  );
}

export default App;
