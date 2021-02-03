import * as React from 'react'
import {
  Box,
  Heading,
  Flex,
  Spacer,
  ButtonGroup,
  Button
} from '@chakra-ui/react'

import { profile } from '../config'

const Header = props => {
  return (
    <Box
      padding='8px 0'
    >
      <Flex
        align='center'
      >
        <Heading size='md'>
          {profile.name}
        </Heading>
        <Spacer />
        <Box>
          <ButtonGroup size='sm'>
            <Button>
              시작하기
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
