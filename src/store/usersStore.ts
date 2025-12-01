import { create } from 'zustand'
import type { User, UserStatus } from '../data/users'
import { users as staticUsers } from '../data/users'

export type SortField = 'name' | 'createdAt'
export type SortDirection = 'asc' | 'desc'

export interface UserFilters {
  search: string
  status: UserStatus | 'all'
  sortField: SortField
  sortDirection: SortDirection
  page: number
  pageSize: number
}

interface UsersState {
  users: User[]
  filters: UserFilters
  setSearch: (search: string) => void
  setStatus: (status: UserStatus | 'all') => void
  setSort: (field: SortField) => void
  setPage: (page: number) => void
  updateUser: (id: string, updates: Partial<Pick<User, 'name' | 'status'>>) => void
}

const DEFAULT_PAGE_SIZE = 8

export const useUsersStore = create<UsersState>((set) => ({
  users: staticUsers,
  filters: {
    search: '',
    status: 'all',
    sortField: 'createdAt',
    sortDirection: 'desc',
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
  },
  setSearch: (search) =>
    set((state) => ({
      filters: { ...state.filters, search, page: 1 },
    })),
  setStatus: (status) =>
    set((state) => ({
      filters: { ...state.filters, status, page: 1 },
    })),
  setSort: (field) =>
    set((state) => {
      const { sortField, sortDirection } = state.filters
      let nextDirection: SortDirection = 'asc'
      if (field === sortField) {
        nextDirection = sortDirection === 'asc' ? 'desc' : 'asc'
      }
      return {
        filters: {
          ...state.filters,
          sortField: field,
          sortDirection: nextDirection,
        },
      }
    }),
  setPage: (page) =>
    set((state) => ({
      filters: { ...state.filters, page },
    })),
  updateUser: (id, updates) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? { ...u, ...updates } : u)),
    })),
}))


