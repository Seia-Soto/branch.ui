import * as React from 'react'
import {
  useRecoilState
} from 'recoil'
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
  Link
} from '@chakra-ui/react'
import {
  Link as PageLink
} from 'react-router-dom'
import fetch from 'unfetch'

import Container from '../components/Container'
import Header from '../components/Header'

import * as atoms from '../atoms'

import useInput from '../hooks/useInput'

import { server } from '../config'

const LoginPage = props => {
  const [user, setUser] = useRecoilState(atoms.user)
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

    try {
      const response = await fetch(server.url + '/user/token', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        })
      })
      const body = await response.json()

      if (body.status) {
        setUser({
          token: body.result
        })
      } else {
        alert('입력하신 이메일과 비밀번호가 올바르지 않거나 계정이 존재하지 않습니다.')
      }
    } catch (error) {
      alert('현재 서버에 연결할 수 없거나 처리 중에 오류가 발생했습니다. 잠시 후에 다시시도해주세요.')
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

export default LoginPage
