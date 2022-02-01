import type { NextPage } from 'next'
import styled from 'styled-components'

import { flexRowCenter } from 'theme'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexRowCenter}
  ${(props) => props.theme.color}
`

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  )
}

export default Home
