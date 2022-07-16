import { Play } from 'phosphor-react'

import * as s from './styles'

export function Home() {
  return (
    <s.HomeContainer>
      <form action="">
        <s.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="minutesAmount">durante</label>
          <input id="minutesAmount" type="number" />

          <span>minutos.</span>
        </s.FormContainer>

        <s.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <s.Separator>:</s.Separator>
          <span>0</span>
          <span>0</span>
        </s.CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </s.HomeContainer>
  )
}
