import { RootState } from '@/store';

export const selectStaffSettings = (state: RootState, staffId: string) => state.settings[staffId];
