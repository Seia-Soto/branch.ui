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

const PostCreation = props => {
  const history = useHistory()
  const toast = useToast()
  const user = useSelector(states => states.user)
  const [loading, setLoading] = React.useState(false)
  const [title, setTitle] = useInput('')

  const authenticate = async () => {
    const shouldLogin =
      (!loading)
    if (!shouldLogin) {
      return
    }

    setLoading(true)

    const post = await fetch('/post', {
      method: 'POST',
      key: user.key,
      body: {
        title
      },
      toast
    })

    if (!post.success) {
      setLoading(false)

      return toast({
        title: '글 생성 실패',
        description: '시스템에 새로운 글을 생성할 수 없습니다. 잠시 후에 다시시도해주세요.',
        status: 'error',
        isClosable: true
      })
    }

    history.push('/edit/' + post.payload.result)
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
            새 글 투고하기
          </Heading>
          <Text>
            시작하기 전에 새로운 글의 제목을 지어주세요.
          </Text>
          <Input
            type='text'
            placeholder='제목'
            value={title}
            onChange={setTitle}
          />
          <Flex>
            <Spacer />
            <ButtonGroup size='md'>
              <Button colorScheme='teal' isLoading={loading} onClick={authenticate}>
                편집하기
              </Button>
            </ButtonGroup>
          </Flex>
        </Stack>
      </Center>
    </>
  )
}

export default PostCreation
