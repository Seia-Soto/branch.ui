import * as React from 'react'
import {
  useDispatch
} from 'react-redux'
import {
  Box,
  Heading,
  Text,
  Stack,
  Spinner,
  useColorMode
} from '@chakra-ui/react'

import Container from '../components/Container'
import Header from '../components/Header'
import Node from '../components/Node'

import fetch from '../fns/fetch'
import { getPost } from '../api'

const MainPage = props => {
  const dispatch = useDispatch()
  const { colorMode } = useColorMode()
  const [recentPosts, setRecentPosts] = React.useState()

  const backgroundImage = 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?&auto=format&fit=crop&q=80'
  const filterColor = colorMode === 'light' ? '255,255,255' : '0,0,0'
  const filterRate = 0.65

  React.useEffect(() => {
    const getRecentPosts = async () => {
      const posts = await fetch('/post?align=recent')

      if (!posts.success) {
        return
      }

      const list = []

      for (let i = 0, l = posts.payload.result.length; i < l; i++) {
        const postId = posts.payload.result[i]
        const post = await getPost(postId)

        if (post) {
          list.push(post)
        }
      }

      setRecentPosts(list)
    }

    getRecentPosts()
  }, [dispatch])

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
      <Container paddingTop='25px'>
        <Stack
          spacing={4}
        >
          <Box>
            <Heading size='lg'>
              마지막 문장
            </Heading>
            <Text>
              방금 전에 투고된 글들을 확인해보세요.
            </Text>
          </Box>
          {
            recentPosts && recentPosts.map((item, key) => (
              <Node
                key={key}
                heading={item.title}
                link={'/post/' + item.id}
              />
            ))
          }
          {
            !recentPosts && <Spinner />
          }
        </Stack>
      </Container>
    </>
  )
}

export default MainPage
