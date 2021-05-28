import styled from 'styled-components'

export const Container = styled.article`
  display: grid;
  grid-template-rows: 33vh 33vh 33vh;
  grid-template-columns: auto;
`

export const Column = styled.section`
  padding: 5%;

  column-gap: 5%;
  column-width: 50vw;
`
