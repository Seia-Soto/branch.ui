import * as React from 'react'
import {
  Box,
  Heading
} from '@chakra-ui/react'

import Container from '../components/Container'
import Header from '../components/Header'

const MainPage = props => {
  const backgroundImage = 'https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg?auto=compress&cs=tinysrgb&dpr=2'
  const backgroundFilter = 0.35

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Box
        paddingTop='25px'
        paddingBottom='250px'
        background={`linear-gradient(to right,rgba(0,0,0,${backgroundFilter}),rgba(0,0,0,${backgroundFilter})), url(${backgroundImage})`}
        backgroundSize='cover'
        backgroundPosition='center'
      >
        <Container>
          <Heading size='md'>
            부담없이 깔끔한 글로 시작해보세요
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
