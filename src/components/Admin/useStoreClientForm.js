import { create, createStore } from 'zustand'

export const useStoreClientForm = create((set) => ({
  latitud: '',
  setLatitud: (lat) => set(() => ({ latitud: lat})),
  longitud: '',
  setLongitud: (longitud) => set((state) => ({ ...state, longitud })),
  conductor: '',
  setConductor: (conductor) => set((state) => ({ ...state, conductor })),
  cliente: '',
  setClientName: (cliente) => set((state) => ({ ...state, cliente })),
}))



// export const createStoreClientForm = (initialState) => {
//   return createStore((set) => ({
//     ...initialState,
//     updateLatitud: (lat) => set((state) => ({ ...state, latitud: lat }))
//   }))
// }