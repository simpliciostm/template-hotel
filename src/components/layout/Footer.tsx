import { Heart, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { hotel } from '../../data/hotel';
import { Reveal } from '../motion/Reveal';

const footerNavigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Studios', href: '#studios' },
  { label: 'Comodidades', href: '#comodidades' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
];

type ContactLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
};

function getContactLinks(): ContactLink[] {
  const links: ContactLink[] = [];
  const instagramUrl = hotel.socialLinks.instagram ?? hotel.contact.instagram;

  if (hotel.contact.phone) {
    links.push({
      href: `tel:${hotel.contact.phone}`,
      label: hotel.contact.phone,
      icon: Phone,
    });
  }

  if (hotel.contact.whatsapp) {
    const whatsappHref = hotel.contact.whatsapp.startsWith('http')
      ? hotel.contact.whatsapp
      : `https://wa.me/${hotel.contact.whatsapp.replace(/\D/g, '')}`;

    links.push({
      href: whatsappHref,
      label: 'WhatsApp',
      icon: MessageCircle,
      external: true,
    });
  }

  if (hotel.contact.email) {
    links.push({
      href: `mailto:${hotel.contact.email}`,
      label: hotel.contact.email,
      icon: Mail,
    });
  }

  if (instagramUrl) {
    links.push({
      href: instagramUrl,
      label: 'Instagram',
      icon: Instagram,
      external: true,
    });
  }

  return links;
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const contactLinks = getContactLinks();
  const hasContact = contactLinks.length > 0;

  return (
    <footer id="contato" className="bg-ink text-ink-inverse">
      <Reveal className="mx-auto w-full max-w-site px-gutter">
        <div
          className={`grid gap-8 py-12 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:gap-12 lg:py-16 ${
            hasContact
              ? 'lg:grid-cols-[1.25fr_0.8fr_1fr_1fr]'
              : 'lg:grid-cols-[1.35fr_0.85fr_1fr]'
          }`}
        >
          <div className="max-w-[18rem]">
            <a
              href="#inicio"
              className="inline-flex flex-col leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              aria-label={`${hotel.name} - Início`}
            >
              <span className="text-[1.7rem] font-light tracking-[0.16em] sm:text-3xl">
                {hotel.wordmark.primary}
              </span>
              <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.44em] sm:text-[0.62rem] sm:tracking-[0.48em]">
                {hotel.wordmark.secondary}
              </span>
            </a>
            <p className="mt-4 text-sm leading-6 text-white/62 sm:mt-5">
              {hotel.footer.description}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent-soft sm:mb-5">
              {hotel.footer.navigationHeading}
            </p>
            <ul className="space-y-3 text-sm text-white/62">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {hasContact ? (
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent-soft sm:mb-5">
                {hotel.footer.contactHeading}
              </p>
              <ul className="space-y-4 text-sm text-white/62">
                {contactLinks.map(({ external, href, icon: Icon, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-3 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="max-w-[16rem] sm:max-w-none lg:justify-self-end">
            <p className="font-display text-[1.75rem] font-semibold leading-[1.04] text-ink-inverse sm:text-[2.25rem] sm:leading-[1.02]">
              {hotel.footer.tagline}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 py-5 text-xs leading-5 text-white/46 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-6">
          <p>
            © {currentYear} {hotel.footer.copyrightName}.{' '}
            {hotel.footer.rightsText}
          </p>
          <p className="inline-flex items-center gap-1.5">
            {hotel.footer.signaturePrefix}
            <Heart className="size-3.5" aria-hidden="true" />
            {hotel.footer.signatureSuffix}
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
