import * as React from 'react'
import {
  useDispatch,
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
  Link,
  useToast
} from '@chakra-ui/react'
import {
  Link as PageLink,
  useHistory
} from 'react-router-dom'

import Container from '../components/Container'
import Header from '../components/Header'

import fetch from '../fns/fetch'

import useInput from '../hooks/useInput'

import { setUser } from '../actions/user'

const SessionPage = props => {
  const history = useHistory()
  const toast = useToast()
  const dispatch = useDispatch()
  const user = useSelector(states => states.user)
  const [loading, setLoading] = React.useState(false)
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')

  const authenticate = async () => {
    const shouldLogin =
      (!loading) &&
      (email) &&
      (password)
    if (!shouldLogin) {
      return
    }

    setLoading(true)

    const token = await fetch('/user/token', {
      method: 'POST',
      body: {
        email,
        password
      },
      toast
    })

    if (!token.success) {
      setLoading(false)

      return toast({
        title: '로그인 실패',
        description: '이메일과 비밀번호가 올바른지 확인해주신 후에 다시시도해주세요.',
        status: 'error',
        isClosable: true
      })
    }

    const profile = await fetch('/user', {
      key: token.payload.result,
      toast
    })

    dispatch(setUser({
      key: token.payload.result,
      profile: profile.payload.result
    }))
    toast({
      title: '반가워요 👋',
      description: profile.payload.result.username + '님, Branch입니다!',
      status: 'success',
      isClosable: true
    })
    setLoading(false)

    history.push('/profile')
  }

  React.useEffect(() => {
    const findUser = async () => {
      if (!user || !user.key) {
        return
      }

      const profile = await fetch('/user')

      if (profile.success) {
        toast({
          title: '계정 감지됨',
          description: '이미 Branch에 로그인되어 있습니다. 새로 로그인하면 기존 계정에서 로그아웃됩니다.',
          status: 'info',
          isClosable: true
        })
      }
    }

    findUser()
  }, [])

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
            로그인
          </Heading>
          <Text>
            로그인하여 Branch의 모든 기능을 사용하세요.
          </Text>
          <Input
            type='email'
            placeholder='user@domain.tld'
            value={email}
            onChange={setEmail}
          />
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
                로그인
              </Button>
            </ButtonGroup>
          </Flex>
          <Stack
            spacing={1}
            shouldWrapChildren
          >
            <Link as={PageLink} to='/session/create'>
              계정 만들기
            </Link>
            <Link as={PageLink} to='/session/lost-password'>
              비밀번호 찾기
            </Link>
          </Stack>
        </Stack>
      </Center>
    </>
  )
}

export default SessionPage
