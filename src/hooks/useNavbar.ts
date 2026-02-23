import { useState } from 'react'

export type FilterType = 'all' | 'grocery' | 'beauty' | 'electronics'

export interface NavbarProps {
  cartCount: number
  activeFilter: FilterType
  onCartClick: () => void
  onFilterChange: (filter: FilterType) => void
}

export const filters: { label: string; value: FilterType }[] = [
  { label: 'VIEW ALL', value: 'all' },
  { label: 'GROCERY', value: 'grocery' },
  { label: 'BEAUTY', value: 'beauty' },
  { label: 'ELECTRONICS', value: 'electronics' },
]

export function useNavbar(props: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return {
    menuOpen,
    toggleMenu,
    filters,
    cartCount: props.cartCount,
    activeFilter: props.activeFilter,
    onCartClick: props.onCartClick,
    onFilterChange: props.onFilterChange,
  }
}
