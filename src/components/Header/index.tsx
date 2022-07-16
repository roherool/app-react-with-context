import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'

import * as s from './styles'

export function Header() {
  return (
    <s.Container>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </s.Container>
  )
}
