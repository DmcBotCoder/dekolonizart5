import type { Messages } from '@/i18n/messages';
import type { ImageAsset } from './media';

type RoleKey = keyof Messages['team']['roles'];

interface TeamMember {
  name: string;
  role: RoleKey;
  photo?: ImageAsset & { position?: string };
}

/** Confirmed organisational team members. Artists belong in the artist/production records. */
export const team: TeamMember[] = [
  {
    name: 'Ngako Keuni',
    role: 'founder',
    photo: { src: '/img/team/ngako-keuni.webp', width: 1920, height: 1280, position: '63% 30%' },
  },
];

export function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
}
