import { createContext, useContext } from 'react';

export const JadwalContext = createContext();

export function useJadwal() {
  return useContext(AuthContext);
}