import { create } from 'zustand'

const useHeaderStore = create((set) => ({
    selectedRegister: '',
    selectedLogin: '',
    setSelectedRegister: (selectedRegister) => set({ selectedRegister }),
    setSelectedLogin: (selectedLogin) => set({ selectedLogin })
}))

export default useHeaderStore