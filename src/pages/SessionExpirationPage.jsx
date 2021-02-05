import * as React from 'react'
import {
  useSelector
} from 'react-redux'
import {
  Center,
  Heading,
  Stack,
  Input,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Text,
  useToast
} from '@chakra-ui/react'
import {
  useHistory
} from 'react-router-dom'

import Container from '../components/Container'
import Header from '../components/Header'

import fetch from '../fns/fetch'

import useInput from '../hooks/useInput'

const SessionExpirationPage = props => {
  const history = useHistory()
  const toast = useToast()
  const user = useSelector(states => states.user)
  const [loading, setLoading] = React.useState(false)
  const [password, setPassword] = useInput('')

  const authenticate = async () => {
    const shouldLogin =
      (!loading) &&
      (password)
    if (!shouldLogin) {
      return
    }

    setLoading(true)

    const token = await fetch('/user/token', {
      method: 'DELETE',
      body: {
        email: user.profile.email,
        password
      },
      toast
    })

    if (!token.success) {
      setLoading(false)
      setPassword('')

      return toast({
        title: '계정 인증 실패',
        description: '이메일과 비밀번호가 올바른지 확인해주신 후에 다시시도해주세요.',
        status: 'error',
        isClosable: true
      })
    }

    history.push('/session/finish')
  }

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Center paddingTop='55px'>
        <Stack
          spacing={2}
          maxWidth='350px'
        >
          <Heading size='lg'>
            모든 세션 종료
          </Heading>
          <Text>
            모든 세션을 종료하려면 비밀번호를 한 번 더 입력하세요.
          </Text>
          <Input
            type='password'
            placeholder='password'
            value={password}
            onChange={setPassword}
          />
          <Flex>
            <Spacer />
            <ButtonGroup size='md'>
              <Button colorScheme='teal' isLoading={loading} onClick={authenticate}>
                모든 세션 종료
              </Button>
            </ButtonGroup>
          </Flex>
        </Stack>
      </Center>
    </>
  )
}

export default SessionExpirationPage
