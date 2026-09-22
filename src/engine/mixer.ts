export interface RoomPreset {
  id: string;
  name: string;
  description: string;
  highPass: number;
  lowShelf: number;
  presence: number;
  air: number;
  glue: number;
  warmth: number;
  width: number;
  space: number;
}

export const ROOMS: RoomPreset[] = [
  {
    id: 'club', name: 'Club',
    description: 'Tight and loud, with the bottom end pushed forward.',
    highPass: 32, lowShelf: 2.5, presence: 1.5, air: 1, glue: 0.7, warmth: 0.45, width: 0.5, space: 0.75,
  },
  {
    id: 'studio', name: 'Studio',
    description: 'Even and close. Nothing exaggerated; everything audible.',
    highPass: 28, lowShelf: 1, presence: 1.8, air: 2, glue: 0.45, warmth: 0.25, width: 0.55, space: 1.0,
  },
  {
    id: 'hall', name: 'Hall',
    description: 'Open and distant, with a long decay behind the band.',
    highPass: 34, lowShelf: 0, presence: 0.5, air: 2.5, glue: 0.3, warmth: 0.15, width: 0.85, space: 1.7,
  },
  {
    id: 'room', name: 'Live room',
    description: 'A band playing together in one space, mics a few feet back.',
    highPass: 36, lowShelf: 0.5, presence: 2, air: 1.5, glue: 0.55, warmth: 0.4, width: 0.65, space: 1.3,
  },
  {
    id: 'tape', name: 'Tape',
    description: 'Warm and slightly squashed, with the top rolled off.',
    highPass: 40, lowShelf: 2, presence: -0.5, air: -2, glue: 0.75, warmth: 0.85, width: 0.4, space: 1.1,
  },
  {
    id: 'raw', name: 'Raw',
    description: 'No processing at all. What the synth actually puts out.',
    highPass: 20, lowShelf: 0, presence: 0, air: 0, glue: 0, warmth: 0, width: 0, space: 1.0,
  },
];

import type { ResolvedStyle } from '../data/styles/schema';
import { contractForGenre } from '../data/styles/contracts';

export function roomForStyle(style: ResolvedStyle): RoomPreset {
  const id = style.sound.masterProfile?.roomId ?? style.contract.timbreSpace.room;
  const room = ROOMS.find(r => r.id === id);
  if (!room) throw new Error(`Unknown room preset "${id}" for style ${style.id}`);
  return room;
}

export function roomFor(worldId: string): RoomPreset {
  const contract = contractForGenre(worldId);
  const room = ROOMS.find(r => r.id === contract.timbreSpace.room);
  if (!room) throw new Error(`No room preset for genre contract ${worldId}`);
  return room;
}

