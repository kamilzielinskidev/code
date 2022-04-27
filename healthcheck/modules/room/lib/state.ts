import create from 'zustand';

import { Room } from '../do';

interface RoomState {
  room: Room | null;
  setRoom: (u: Room | null) => void;
}

export const roomState = create<RoomState>((set) => ({
  room: null,
  setRoom: (room) => set({ room }),
}));
