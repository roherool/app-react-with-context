import styled from 'styled-components'

export const HomeContainer = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  align-items: center;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: bold;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  gap: 1rem;
  line-height: 8rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem 1rem;
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  width: 4rem;
`
