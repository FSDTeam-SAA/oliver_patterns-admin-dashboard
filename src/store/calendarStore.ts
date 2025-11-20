// ==================== FILE: stores/calendarStore.ts ====================
import { create } from 'zustand'

interface CalendarStore {
  startDate: string
  endDate: string
  setStartDate: (date: string) => void
  setEndDate: (date: string) => void
  setDateRange: (start: string, end: string) => void
}

export const useCalendarStore = create<CalendarStore>((set) => ({
  startDate: '',
  endDate: '',
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setDateRange: (start, end) => set({ startDate: start, endDate: end }),
}))
