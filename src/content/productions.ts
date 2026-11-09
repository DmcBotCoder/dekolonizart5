import type { Locale } from '@/i18n/config';
import type { Messages } from '@/i18n/messages';
import type { Artist } from './artists';
import type { heroImages, posters } from './media';

export type ProductionSlug = keyof Messages['shows'];

/** A block of long-form text. `<!--more-->` inside a paragraph marks the Read More break. */
export type TextBlock = { kind: 'p'; text: string } | { kind: 'h3'; text: string };

/** Event categories (tag on the "All events" page). */
export type EventCategory = 'theater' | 'workshop' | 'movement';

/** Ticket providers the booking page can hand over to. */
export const bookingProviders = { vibetix: 'Vibetix' } as const;

/** VibeTix catalogue embed used by the all-events page. */
export const vibetixEventListEmbed = {
  embedId: 'vibetix-embed-d125b66f',
  checkoutUrl: 'https://dekolonizart.vibetix.io/embed?embed=1&embedId=vibetix-embed-d125b66f',
} as const;

/**
 * Online ticketing for one production. Every "Book now" / "Reserve your seat"
 * button leads to the production's booking page (`bookingPath`), which sends
 * visitors on to `url`.
 */
export interface Booking {
  provider: keyof typeof bookingProviders;
  /** The event's own checkout / reservation link from the provider. `null` until the provider has issued it. */
  url: `https://${string}` | null;
  /** `false` switches online booking off (e.g. sold out) without deleting the link. */
  enabled: boolean;
  embed?: { embedId: string; checkoutUrl: `https://${string}`; fallbackUrl?: `https://${string}` };
}

/** Intro video shown on the production page between the plot and the cast. */
export interface IntroVideo {
  provider: 'youtube';
  /** Any YouTube video link (watch, youtu.be, shorts or embed URL). */
  url: string;
}

export interface Production {
  slug: ProductionSlug;
  category: EventCategory;
  /** Short title used for the page heading and the "In this section" navigation. */
  shortTitle: string;
  /** Language of the production title when it differs from the page language. */
  titleLang?: Locale;
  /** Original-language subtitle shown under the short title (translated in `messages.shows[slug].subtitleTranslation`). */
  subtitle?: string;
  image?: { key: keyof typeof posters; kind: 'poster' | 'photo' };
  /** Image on the right of the page hero (see `heroImages` in `content/media.ts`). */
  heroImage?: keyof typeof heroImages;
  /** Shown with the current venue (see `content/site.ts`). */
  atCurrentVenue?: boolean;
  cast: { artist: Artist['slug']; credit: 'author' | 'composer' | 'cast' }[];
  plot?: { lang: Locale; blocks: TextBlock[] };
  plotTranslations?: Partial<Record<Locale, TextBlock[]>>;
  booking: Booking;
  introVideo?: IntroVideo;
}

/**
 * Theatre productions. Short texts and dates are translated in
 * `messages.shows`; long-form copy can provide translated blocks per locale.
 *
 * Booking: paste the event's Vibetix link into `booking.url`. While it is
 * `null` the booking page says online booking is not available and offers
 * reservation by e-mail.
 * Intro video: add `introVideo: { provider: 'youtube', url: '…' }`; without it
 * the Intro section is left out.
 */
export const productions: Production[] = [
  {
    slug: 'douala-manga-bell',
    category: 'theater',
    shortTitle: 'Douala Manga Bell',
    titleLang: 'de',
    subtitle: 'Der König der sein Recht wollte',
    image: { key: 'doualaMangaBell', kind: 'poster' },
    heroImage: 'doualaMangaBell',
    atCurrentVenue: true,
    cast: [
      { artist: 'ngako-keuni', credit: 'author' },
      { artist: 'athanasios-karakantas', credit: 'composer' },
    ],
    booking: {
      provider: 'vibetix',
      url: null,
      enabled: true,
      embed: {
        embedId: 'vibetix-embed-79aea2d7',
        checkoutUrl:
          'https://dekolonizart.vibetix.io/e/ns-stage-reading-r-douala-manga-bell-der-konig-der-sein-recht-wollte/embed?embed=1&embedId=vibetix-embed-79aea2d7',
        fallbackUrl:
          'https://dekolonizart.vibetix.io/e/ns-stage-reading-r-douala-manga-bell-der-konig-der-sein-recht-wollte',
      },
    },
    introVideo: { provider: 'youtube', url: 'https://youtu.be/tccCwcyiRk4' },
    plot: {
      lang: 'en',
      blocks: [
        {
          kind: 'p',
          text: '„Der König der sein Recht wollte” is a tragic and absurd play featuring music and original choreography. Although based on real events, the play contains elements of fiction.',
        },
        { kind: 'h3', text: 'Plot’s summary' },
        {
          kind: 'p',
          text: 'Boyo, a young ‘Cameroonian’ entrepreneur, is in a romantic relationship with Isabel, who lives in Germany. He has an appointment at the German Embassy in ‘Cameroon’ to receive a response to his visa application. He is finally going to be reunited with his sweetheart.<!--more--> But his visa application is refused. Why is Isabel, who is well-off, free to travel to Cameroon, whilst he is not allowed to go to Germany?…',
        },
        {
          kind: 'p',
          text: 'One hundred and sixteen years earlier, two childhood friends who studied in Germany meet again in ‘Kamerun’. Rudolf Douala Manga Bell defends the interests of his people and demands that the law be upheld. His friend Hermann Röhm, who has sworn honour and loyalty to the Reich, is spearheading the expropriation project. Torn between friendship and the duty of loyalty, a choice must be made. Hermann Röhm will pass sentence. Douala Manga Bell and his cousin Ngosso Din are sentenced to death and hanged. The dead are not dead. Fate has an emotional penchant for repetitions and symmetries. 116 years later, Boyo rejects the German Embassy’s decision to refuse his visa application. He demands his right: Germany or nothing.',
        },
      ],
    },
  },
  {
    slug: 'the-tragedy-of-melilla',
    category: 'theater',
    shortTitle: 'The Tragedy of Melilla',
    titleLang: 'en',
    image: { key: 'melilla', kind: 'photo' },
    heroImage: 'melilla',
    cast: [],
    booking: { provider: 'vibetix', url: null, enabled: true },
    plot: {
      lang: 'en',
      blocks: [
        { kind: 'p', text: 'An excerpt from our latest performance at UNI.T – Theater Berlin, inspired by The Tragedy of Melilla.' },
        { kind: 'p', text: 'This short piece briefly highlights some of the underlying reasons why Africans migrate from their homeland to Europe. While war is often perceived as one of the main reasons, it is far from being the only one.' },
        { kind: 'p', text: 'Colonialism, land grabbing, dispossession, and the expropriation of natural resources are among the many historical and ongoing factors that contribute to migration.' },
        { kind: 'p', text: 'Through this performance, we invite the audience to look beyond the usual narratives and reflect on the deeper roots of migration.' },
      ],
    },
    plotTranslations: {
      de: [
        { kind: 'p', text: 'Ein Ausschnitt aus unserer jüngsten Aufführung im UNI.T – Theater Berlin, inspiriert von The Tragedy of Melilla.' },
        { kind: 'p', text: 'Dieses kurze Stück beleuchtet einige der tieferliegenden Gründe, warum Menschen aus Afrika ihre Heimat verlassen und nach Europa migrieren. Krieg wird oft als einer der Hauptgründe wahrgenommen, ist aber bei weitem nicht der einzige.' },
        { kind: 'p', text: 'Kolonialismus, Landraub, Enteignung und die Ausbeutung natürlicher Ressourcen gehören zu den vielen historischen und bis heute wirkenden Faktoren, die Migration begünstigen.' },
        { kind: 'p', text: 'Mit dieser Performance laden wir das Publikum ein, über die üblichen Erzählungen hinauszuschauen und über die tieferen Wurzeln von Migration nachzudenken.' },
      ],
      fr: [
        { kind: 'p', text: 'Un extrait de notre dernière performance au UNI.T – Theater Berlin, inspirée de The Tragedy of Melilla.' },
        { kind: 'p', text: 'Cette courte pièce met en lumière certaines des raisons profondes qui poussent des personnes africaines à migrer de leur pays d’origine vers l’Europe. Si la guerre est souvent perçue comme l’une des raisons principales, elle est loin d’être la seule.' },
        { kind: 'p', text: 'Le colonialisme, l’accaparement des terres, la dépossession et l’expropriation des ressources naturelles font partie des nombreux facteurs historiques et toujours à l’œuvre qui contribuent aux migrations.' },
        { kind: 'p', text: 'À travers cette performance, nous invitons le public à dépasser les récits habituels et à réfléchir aux racines profondes des migrations.' },
      ],
    },
  },
  {
    slug: 'tam-tam',
    category: 'theater',
    shortTitle: 'Tam Tam',
    cast: [],
    booking: { provider: 'vibetix', url: null, enabled: true },
    introVideo: { provider: 'youtube', url: 'https://youtu.be/4y-sGFMKQxQ' },
    plot: {
      lang: 'en',
      blocks: [
        { kind: 'h3', text: 'Into the Roots of My Motherland' },
        { kind: 'p', text: 'In many African cultures, women traditionally dance for men to seduce them. Here, however, the roles are reversed. This is a short dance of grace performed by my character for women — an invitation to celebrate love.' },
      ],
    },
    plotTranslations: {
      de: [
        { kind: 'h3', text: 'Into the Roots of My Motherland' },
        { kind: 'p', text: 'In vielen afrikanischen Kulturen tanzen Frauen traditionell für Männer, um sie zu verführen. Hier sind die Rollen jedoch umgekehrt. Es ist ein kurzer, anmutiger Tanz, den meine Figur für Frauen aufführt – eine Einladung, die Liebe zu feiern.' },
      ],
      fr: [
        { kind: 'h3', text: 'Into the Roots of My Motherland' },
        { kind: 'p', text: 'Dans de nombreuses cultures africaines, les femmes dansent traditionnellement pour séduire les hommes. Ici, les rôles sont cependant inversés. Il s’agit d’une courte danse pleine de grâce, exécutée par mon personnage pour les femmes — une invitation à célébrer l’amour.' },
      ],
    },
  },
];

export function getProduction(slug: string): Production | undefined {
  return productions.find((production) => production.slug === slug);
}

/** The production featured on the home and Theater pages ("Save the date"). */
export const featuredProduction: ProductionSlug = 'douala-manga-bell';

/** Information page: synopsis, intro video, cast, dates. */
export const productionPath = (slug: ProductionSlug) => `/events/${slug}`;

/** Booking page – the single destination of every booking button for this production. */
export const bookingPath = (slug: ProductionSlug) => `${productionPath(slug)}/booking`;

/** Where the booking page sends visitors, or `null` when online booking is not available. */
export function resolveBooking({ booking }: Pick<Production, 'booking'>): { provider: string; url: string } | null {
  return booking.enabled && booking.url ? { provider: bookingProviders[booking.provider], url: booking.url } : null;
}
