import { Play } from 'phosphor-react'

import * as s from './styles'

export function Home() {
  return (
    <s.HomeContainer>
      <form action="">
        <s.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <s.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <s.MinutesInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={10}
            min={10}
            max={60}
          />

          <span>minutos.</span>
        </s.FormContainer>

        <s.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <s.Separator>:</s.Separator>
          <span>0</span>
          <span>0</span>
        </s.CountdownContainer>

        <s.StartCountdownButton type="submit" disabled>
          <Play size={24} />
          Começar
        </s.StartCountdownButton>
      </form>
    </s.HomeContainer>
  )
}
