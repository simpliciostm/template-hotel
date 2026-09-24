import agodaLogo from '../assets/images/booking/agoda.svg';
import expediaLogo from '../assets/images/booking/expedia.svg';
import hoteisLogo from '../assets/images/booking/hoteis.svg';
import galleryBathroomPlaceholder from '../assets/images/gallery/gallery-bathroom-placeholder.png';
import galleryBedroomPlaceholder from '../assets/images/gallery/gallery-bedroom-placeholder.png';
import galleryDetailPlaceholder from '../assets/images/gallery/gallery-detail-placeholder.png';
import galleryExteriorPlaceholder from '../assets/images/gallery/gallery-exterior-placeholder.png';
import galleryKitchenPlaceholder from '../assets/images/gallery/gallery-kitchen-placeholder.png';
import heroPlaceholder from '../assets/images/hero-placeholder.png';
import introductionDetailPlaceholder from '../assets/images/introduction-detail-placeholder.png';
import introductionMainPlaceholder from '../assets/images/introduction-main-placeholder.png';
import studioBathroomPlaceholder from '../assets/images/studios/studio-bathroom-placeholder.png';
import studioKitchenPlaceholder from '../assets/images/studios/studio-kitchen-placeholder.png';
import studioMainPlaceholder from '../assets/images/studios/studio-main-placeholder.png';
import type { HotelConfig } from '../types/hotel';
import { validateHotelConfig } from './validateHotelConfig';

// Dados provisórios do protótipo. Confirmar comodidades, imagens e avaliações com a hospedagem antes da publicação.
export const hotel: HotelConfig = {
  name: 'XAVI Studio',
  shortName: 'XAVI',
  description:
    'Site institucional em construcao para uma hospedagem com atmosfera acolhedora, visual contemporaneo e foco em reservas por canais externos.',
  wordmark: {
    primary: 'XAVI',
    secondary: 'STUDIO',
  },
  seo: {
    title: 'XAVI Studio',
    description: 'Site institucional para hospedagem boutique/studio.',
    siteName: 'XAVI Studio',
    locale: 'pt-BR',
    canonicalUrl: null,
    ogImage: null,
  },
  publication: {
    status: 'demo',
  },
  address: {
    street: 'R. Alto Purús',
    number: '353',
    neighborhood: 'Vila Seabra',
    city: 'Bauru',
    state: 'SP',
    zipCode: '17060-160',
  },
  contact: {
    phone: null,
    whatsapp: null,
    email: null,
    instagram: null,
  },
  checkIn: '14:00',
  checkOut: '10:00',
  maps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14763.486470348947!2d-49.07299802455596!3d-22.32069460924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf679b4ad8af6b%3A0x6e4a0dc2a0d9f980!2sXAVI%20Studio!5e0!3m2!1spt-BR!2sbr!4v1790109962687!5m2!1spt-BR!2sbr',
    directionsUrl: null,
  },
  hero: {
    eyebrow: 'BAURU • SÃO PAULO',
    title: 'Seu espaço\nem Bauru.',
    description:
      'Conforto, praticidade e privacidade para você se sentir em casa.',
    primaryCta: {
      label: 'Conheça os studios',
      href: '#studios',
    },
    secondaryCta: {
      label: 'Ver disponibilidade',
      href: '#reservas',
    },
    indicator: 'XAVI',
    image: {
      src: heroPlaceholder,
      alt: 'Imagem placeholder editorial de um studio contemporâneo para substituir por fotografia real do XAVI Studio.',
      width: 1672,
      height: 941,
      isPlaceholder: true,
    },
  },
  introduction: {
    eyebrow: 'XAVI STUDIO',
    title: 'Uma estadia simples. Do jeito que deve ser.',
    description:
      'Espaços pensados para quem busca autonomia, conforto e praticidade em Bauru. Ambientes modernos e uma estrutura completa para tornar sua estadia mais tranquila.',
    highlights: [
      {
        id: 'privacy',
        icon: 'lock',
        text: 'Mais privacidade',
      },
      {
        id: 'modern-environment',
        icon: 'building',
        text: 'Ambiente moderno',
      },
      {
        id: 'well-being',
        icon: 'heart',
        text: 'Feito para você se sentir bem',
      },
    ],
    detailTitle: 'Conforto\ntambém mora\nnos detalhes.',
    images: {
      main: {
        src: introductionMainPlaceholder,
        alt: 'Imagem ilustrativa placeholder de entrada contemporânea, a ser substituída por fotografia real do XAVI Studio.',
        width: 1370,
        height: 1148,
        isPlaceholder: true,
      },
      detail: {
        src: introductionDetailPlaceholder,
        alt: 'Imagem ilustrativa placeholder de detalhe acolhedor de hospedagem, a ser substituída por fotografia real do XAVI Studio.',
        width: 1536,
        height: 1024,
        isPlaceholder: true,
      },
    },
  },
  studios: {
    eyebrow: 'STUDIOS',
    title: 'Ambientes que acolhem.',
    description: [
      'Studios modernos e bem equipados, pensados para estadias curtas ou longas.',
      'Cada ambiente reúne praticidade e conforto para tornar sua experiência mais tranquila.',
    ],
    cta: {
      label: 'Ver todos os ambientes',
      href: '#galeria',
    },
    images: {
      main: {
        src: studioMainPlaceholder,
        alt: 'Imagem ilustrativa placeholder de quarto e ambiente principal de studio, a ser substituída por fotografia real do XAVI Studio.',
        width: 1536,
        height: 864,
        isPlaceholder: true,
      },
      bathroom: {
        src: studioBathroomPlaceholder,
        alt: 'Imagem ilustrativa placeholder de banheiro privativo contemporâneo, a ser substituída por fotografia real do XAVI Studio.',
        width: 1456,
        height: 1064,
        isPlaceholder: true,
      },
      kitchen: {
        src: studioKitchenPlaceholder,
        alt: 'Imagem ilustrativa placeholder de cozinha compacta e estrutura de apoio, a ser substituída por fotografia real do XAVI Studio.',
        width: 1536,
        height: 864,
        isPlaceholder: true,
      },
    },
  },
  amenities: {
    eyebrow: 'COMODIDADES',
    title: 'Tudo o que você precisa, sem complicação.',
    description: 'Mais praticidade e conforto para a sua estadia em Bauru.',
    items: [
      {
        id: 'wifi',
        name: 'Wi-Fi',
        description: 'Conectividade durante a estadia',
        icon: 'wifi',
        enabled: true,
        provisional: true,
      },
      {
        id: 'air-conditioning',
        name: 'Ar-condicionado',
        description: 'Mais conforto nos ambientes',
        icon: 'snowflake',
        enabled: true,
        provisional: true,
      },
      {
        id: 'tv',
        name: 'TV',
        description: 'Entretenimento no studio',
        icon: 'tv',
        enabled: true,
        provisional: true,
      },
      {
        id: 'minibar',
        name: 'Frigobar',
        description: 'Praticidade no ambiente',
        icon: 'refrigerator',
        enabled: true,
        provisional: true,
      },
      {
        id: 'private-bathroom',
        name: 'Banheiro privativo',
        description: 'Mais conforto e privacidade',
        icon: 'shower',
        enabled: true,
        provisional: true,
      },
      {
        id: 'linen',
        name: 'Roupa de cama e banho',
        description: 'Itens essenciais para sua estadia',
        icon: 'bed',
        enabled: true,
        provisional: true,
      },
      {
        id: 'self-check-in',
        name: 'Self check-in',
        description: 'Mais autonomia na chegada',
        icon: 'key',
        enabled: true,
        provisional: true,
      },
      {
        id: 'parking',
        name: 'Estacionamento',
        description: 'Disponível em unidades selecionadas',
        icon: 'car',
        enabled: true,
        provisional: true,
      },
    ],
  },
  gallery: {
    eyebrow: 'GALERIA',
    title: 'Conforto em cada detalhe.',
    description:
      'Conheça um pouco mais dos ambientes e da experiência do XAVI Studio.',
    cta: {
      label: 'Ver galeria completa',
      href: '#galeria',
    },
    images: [
      {
        id: 'exterior-access',
        src: galleryExteriorPlaceholder,
        alt: 'Imagem ilustrativa placeholder de fachada ou acesso contemporâneo, a ser substituída por fotografia real do XAVI Studio.',
        category: 'exterior',
        width: 1378,
        height: 1152,
        isPlaceholder: true,
      },
      {
        id: 'studio-bedroom',
        src: galleryBedroomPlaceholder,
        alt: 'Imagem ilustrativa placeholder de quarto de studio, a ser substituída por fotografia real do XAVI Studio.',
        category: 'bedroom',
        width: 1536,
        height: 864,
        isPlaceholder: true,
      },
      {
        id: 'support-kitchen',
        src: galleryKitchenPlaceholder,
        alt: 'Imagem ilustrativa placeholder de cozinha compacta e estrutura de apoio, a ser substituída por fotografia real do XAVI Studio.',
        category: 'kitchen',
        width: 1536,
        height: 864,
        isPlaceholder: true,
      },
      {
        id: 'private-bathroom',
        src: galleryBathroomPlaceholder,
        alt: 'Imagem ilustrativa placeholder de banheiro privativo contemporâneo, a ser substituída por fotografia real do XAVI Studio.',
        category: 'bathroom',
        width: 1456,
        height: 1064,
        isPlaceholder: true,
      },
      {
        id: 'hospitality-detail',
        src: galleryDetailPlaceholder,
        alt: 'Imagem ilustrativa placeholder de detalhe acolhedor de cama e decoração, a ser substituída por fotografia real do XAVI Studio.',
        category: 'detail',
        width: 1536,
        height: 864,
        isPlaceholder: true,
      },
    ],
  },
  reviews: {
    eyebrow: 'AVALIAÇÕES',
    title: 'Experiências que falam por nós.',
    description:
      'A experiência de quem se hospeda também faz parte da nossa história.',
    placeholderLabel: 'Avaliação de exemplo',
    items: [
      {
        id: 'layout-review-1',
        text: 'Um espaço confortável e prático para a estadia.',
        author: 'Hóspede',
        source: null,
        rating: null,
        isPlaceholder: true,
      },
      {
        id: 'layout-review-2',
        text: 'Ambiente agradável, organizado e com tudo o que precisamos.',
        author: 'Hóspede',
        source: null,
        rating: null,
        isPlaceholder: true,
      },
      {
        id: 'layout-review-3',
        text: 'Uma experiência tranquila e confortável durante a passagem por Bauru.',
        author: 'Hóspede',
        source: null,
        rating: null,
        isPlaceholder: true,
      },
    ],
  },
  location: {
    eyebrow: 'LOCALIZAÇÃO',
    title: 'Bem localizado em Bauru.',
    description:
      'Uma localização prática para aproveitar sua estadia e se deslocar pela cidade com facilidade.',
    mapTitle: 'Localização do XAVI Studio em Bauru',
    directionsLabel: 'Abrir no Google Maps',
  },
  booking: {
    eyebrow: 'ONDE RESERVAR',
    title: 'Encontre a melhor opção para sua estadia.',
    description:
      'Consulte disponibilidade e condições diretamente nas plataformas abaixo.',
    unavailableMessage: 'Os canais de reserva serão disponibilizados aqui.',
    externalLinkLabel: 'Abre em uma plataforma externa.',
    // TODO: substituir por URLs permanentes das páginas do XAVI Studio
    // antes da publicação em produção.
    channels: [
      {
        id: 'agoda',
        name: 'Agoda',
        logo: agodaLogo,
        url: 'https://www.agoda.com/search?searchdatetype=default&lt=1&numberofchildren=0&gsite=mapresults&partnercurrency=BRL&roomid=1257059353&masterroomid=1257059353&pricetotal=180.00&pricetax=8.57&pricefee=0.00&rateplan=be61356c-487a-fef8-deeb-6d91ec704d8b&usercountry=BR&currency=BRL&userdevice=desktop&verif=false&mcid=3038&booking_source=cpc&adtype=0&mpt=SnlTemNhZStCaXJBSm5vZGlpdStaM2ZmWlpxcm1obEk0SE9LTmh5WWtWNjRwWjIyMVZ1dmFub1JURnFrdWNUbFVjQTVtTmVpemdPU3R3PT0&clicktype=hotel&pkgid=NoBreakfast_NoDinner_false&los=1&adults=2&rooms=1&checkin=2026-09-23&checkout=2026-09-24&selectedproperty=47599042&city=2756&cid=1918349&pslc=1&ds=kIXQSKuX2tz3cIJu',
        enabled: true,
      },
      {
        id: 'hoteis',
        name: 'Hoteis.com',
        logo: hoteisLogo,
        url: 'https://www.hoteis.com/Hotel-Search?selected=101140716&startDate=2026-09-23&endDate=2026-09-24&mdpcid=HCOM-BR.META.HPA.HOTEL-ORGANIC-desktop.HOTEL&MDPDTL=HTL.101140716.20260923.20260924.DDT.1.CID..AUDID..RRID.br-desktop&adults=2&children&mctc=10&mpf=185.52&mpg=BRL&mpl=BRL&mpj=23.24&mpr=20.00&rffrid=sem.hcom.BR.156.024.mapresults.02.desktop-1.kwrd%3DGGMETA.101140716BRpt-20260923-D-ABW%3D1-camp%3D-aud%3D-N&rateplanid=408117915&mpm=24&mpn=327497500&mpo=EC&mpe=1790105253&mpp=1&siteid=301800003&locale=pt_BR&regionId=602341&sort=RECOMMENDED&destination=Xavi%20Studio&theme=&userIntent=&semdtl=&categorySearch=&useRewards=false',
        enabled: true,
      },
      {
        id: 'decolar',
        name: 'Decolar',
        url: 'https://www.decolar.com/accommodations/results/CIT_532/2026-09-23/2026-09-24/2?chosen_accommodation=5692652&kw=5692652_323964546_mapresults_BR_pt_BRL_5.10429859_2026_09_23_1_194.06_false&clt_c=HPA-BR&clt_n=gh&d=c&cm=HPA_BR&pr=H&campaignid&targetid=aud-&hpa_dd=default&hpa_ppa=0&clk_src&google_site=mapresults&displayed_price=194.06&country=BR&lang=pt&crawler=false&partner=4&hotprv=cHc6RVhQ&utm_campaign&cc=BR&key=UT81AK9JAFEGJ4D69OVO6J673E&utm_semhotelcampaign=2&selected_room_pack=1057854608',
        enabled: true,
      },
      {
        id: 'expedia',
        name: 'Expedia',
        logo: expediaLogo,
        url: 'https://www.expedia.com.br/Hotel-Search?ct=hotel&mpg=BRL&mpf=198.20&mpj=23.50&mpr=20.00&mpl=BRL&exp_pg=google&langid=pt&ad=2&tp=&rateplanid=393322015&mpm=24&mpn=323964546&mpo=EC&mpe=1790102337&mpp=1&challengeReferer=noref&destination=Xavi+Studio&regionId=602341&selected=101140716&startDate=2026-09-23&endDate=2026-09-24&adults=2&sort=RECOMMENDED&MDPCID=BR.META.HPA.HOTEL-ORGANIC-desktop.HOTEL&MDPDTL=HTL.101140716.20260923.20260924.DDT.1.CID..AUDID..RRID.bex_br_desktop&mctc=10',
        enabled: true,
      },
    ],
  },
  footer: {
    description: 'Studios para estadias em Bauru - SP.',
    tagline: 'Conforto em cada estadia.',
    navigationHeading: 'Navegação',
    contactHeading: 'Fale conosco',
    copyrightName: 'XAVI Studio',
    rightsText: 'Todos os direitos reservados.',
    signaturePrefix: 'Desenvolvido com',
    signatureSuffix: 'em Bauru.',
  },
  socialLinks: {
    instagram: null,
  },
};

validateHotelConfig(hotel);
