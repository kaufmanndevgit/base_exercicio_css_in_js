import styled from 'styled-components'

export const VagasForm = styled.form`
  display: grid;
  grid-template-coluns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const VagasButton = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18x;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

export const VagasInput = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
