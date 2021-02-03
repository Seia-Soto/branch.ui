import * as React from 'react'
import {
  Box,
  Heading,
  Flex,
  Spacer,
  ButtonGroup,
  Button
} from '@chakra-ui/react'
import {
  Link as PageLink
} from 'react-router-dom'

import { profile } from '../config'

const Header = props => {
  return (
    <Box
      padding='8px 0'
    >
      <Flex
        align='center'
      >
        <Heading size='md' as={PageLink} to='/'>
          {profile.name}
        </Heading>
        <Spacer />
        <Box>
          <ButtonGroup size='sm'>
            <Button as={PageLink} to='/session'>
              시작하기
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
