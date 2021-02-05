import * as React from 'react'
import { useSelector } from 'react-redux'
import { Link as PageLink } from 'react-router-dom'
import {
  Box,
  Heading,
  Divider,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Stack,
  Switch,
  useColorMode
} from '@chakra-ui/react'

import Container from '../components/Container'
import Header from '../components/Header'
import Node from '../components/Node'

import useColorModeSwitch from '../hooks/useColorModeSwitch'

const ProfilePage = props => {
  const { profile } = useSelector(states => states.user)
  const { colorMode } = useColorMode()
  const [darkModeEnabled, setDarkModeEnabled] = useColorModeSwitch()

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Box
        background={colorMode === 'light' ? 'gray.200' : 'gray.600'}
        paddingTop='20px'
        paddingBottom='42px'
      >
        <Container>
          <Flex>
            <Box>
              <Heading size='md'>
                @{profile.username}
              </Heading>
              <Heading size='xl'>
                대시보드
            </Heading>
            </Box>
            <Spacer />
            <ButtonGroup
              size='sm'
              colorScheme='red'
            >
              <Button as={PageLink} to='/session/finish'>
                로그아웃
              </Button>
            </ButtonGroup>
          </Flex>
        </Container>
      </Box>
      <Divider />
      <Container as={Stack} paddingTop='12px' spacing={8}>
        <Stack spacing={2}>
          <Heading size='lg'>화면</Heading>
          <Divider />
          <Node
            heading='어두운 모드'
            text='어두운 모드를 사용하면 야간에도 글을 편하게 읽을 수 있도록 배경색이 어두워지고 본문의 색상이 반전됩니다.'
            rightContext={(
              <Switch
                isChecked={darkModeEnabled}
                onChange={setDarkModeEnabled}
              />
            )}
          />
        </Stack>
        <Stack spacing={2}>
          <Heading size='lg'>개인정보</Heading>
          <Divider />
          <Node
            heading='모든 장치에서 로그아웃'
            text='다른 사람이 계정에 로그인했을 경우나 공공장소에서 로그아웃을 하지 않고 자리를 비웠을 경우를 대비하여 모든 장치에서 로그아웃할 수 있습니다.'
          >
            <Button
              as={PageLink}
              to='/session/expire'
              colorScheme='red'
              size='sm'
            >
              모든 장치에서 로그아웃
            </Button>
          </Node>
        </Stack>
      </Container>
    </>
  )
}

export default ProfilePage
