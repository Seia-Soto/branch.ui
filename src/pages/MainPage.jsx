import * as React from 'react'
import {
  Box,
  Heading,
  useColorMode
} from '@chakra-ui/react'

import Container from '../components/Container'
import Header from '../components/Header'

const MainPage = props => {
  const { colorMode } = useColorMode()

  const backgroundImage = 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?&auto=format&fit=crop&q=80'
  const filterColor = colorMode === 'light' ? '255,255,255' : '0,0,0'
  const filterRate = 0.65

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Box
        paddingTop='25px'
        paddingBottom='250px'
        background={`linear-gradient(to right,rgba(${filterColor},${filterRate}),rgba(${filterColor},${filterRate})), url(${backgroundImage})`}
        backgroundSize='cover'
        backgroundPosition='center'
      >
        <Container>
          <Heading size='md'>
            부담없이 깔끔한 글로 시작하기
          </Heading>
          <Heading size='2xl'>
            Writing like Gothic.
        </Heading>
        </Container>
      </Box>
    </>
  )
}

export default MainPage
