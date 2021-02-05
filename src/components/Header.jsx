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
      padding='4px 0'
    >
      <Flex
        align='center'
      >
        <Heading size='md' as={PageLink} to='/'>
          {profile.name}
        </Heading>
        <Spacer />
        <Box>
          <ButtonGroup size='sm' variant='ghost'>
            <Button as={PageLink} to='/profile'>
              대시보드
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
