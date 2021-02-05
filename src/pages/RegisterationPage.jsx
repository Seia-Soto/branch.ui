import * as React from 'react'
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

const RegisterationPage = props => {
  const history = useHistory()
  const toast = useToast()
  const [loading, setLoading] = React.useState(false)
  const [username, setUsername] = useInput('')
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')
  const [passwordConfirm, setPasswordConfirm] = useInput('')

  const authenticate = async () => {
    const shouldLogin =
      (!loading) &&
      (email) &&
      (password) &&
      (passwordConfirm)
    if (!shouldLogin) {
      return
    }

    setLoading(true)

    try {
      const registeration = await fetch('/user', {
        method: 'POST',
        body: {
          username,
          email,
          password
        }
      })

      if (!registeration.success) {
        return alert('서버에서 계정 생성을 취소하였습니다. 모든 값들이 정확히 입력되었는지 확인 후에 다시시도해주세요. 이후에 지속적으로 같은 일이 발생한다면 페이지를 새로고침해보세요.')
      }

      alert('환영합니다! 새 Branch 계정이 준비되어 로그인하면 바로 사용하실 수 있습니다.')

      history.push('/session')
    } catch (error) {
      toast({
        title: '서버 연결 실패',
        description: '현재 서버가 사용가능한 상태가 아닙니다. 잠시 후에 다시시도해주세요.',
        status: 'error',
        isClosable: true
      })
    } finally {
      setLoading(false)
    }
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
            계정 만들기
          </Heading>
          <Text>
            Branch 계정을 만들면 즉시 여러분의 생각을 퍼블리싱할 수 있습니다.
          </Text>
          <Input
            type='text'
            placeholder='username'
            value={username}
            onChange={setUsername}
          />
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
          <Input
            type='password'
            placeholder='password confirmation'
            value={passwordConfirm}
            onChange={setPasswordConfirm}
          />
          <Flex>
            <Spacer />
            <ButtonGroup size='md'>
              <Button colorScheme='teal' isLoading={loading} onClick={authenticate}>
                계정 만들기
              </Button>
            </ButtonGroup>
          </Flex>
          <Stack
            spacing={1}
            shouldWrapChildren
          >
            <Link as={PageLink} to='/session'>
              로그인
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

export default RegisterationPage
