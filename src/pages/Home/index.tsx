import { useForm } from 'react-hook-form'
import { Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import * as s from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(10, 'O mínimo do ciclo é 10 minutos')
    .max(60, 'O máximo do ciclo é até 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <s.HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <s.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <s.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <s.StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </s.StartCountdownButton>
      </form>
    </s.HomeContainer>
  )
}
