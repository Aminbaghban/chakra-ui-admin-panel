import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { FiAlignRight, FiBell, FiHeart } from 'react-icons/fi';

export const Header = ({
  toggleDrawer,
  userName,
}: {
  toggleDrawer: () => void;
  userName: string;
}) => {
  return (
    <Flex
      bg='white'
      color='black'
      boxShadow='md'
      justifyContent='space-between'
      px={{ base: '4', md: '12' }}
      h={{ base: '75px', md: '100px' }}
      alignItems='center'
      position='relative'
      zIndex={10}
    >
      <IconButton
        display={{ md: 'none' }}
        variant='unstyled'
        aria-label='اعلانات'
        size='lg'
        icon={<FiAlignRight />}
        onClick={toggleDrawer}
      />

      <Flex>
        <Image
          src='/assets/Logo.svg'
          w='36'
          h={{ base: '12', md: 'full' }}
          mx='auto'
        />
      </Flex>

      <Flex
        display={{ base: 'none', md: 'flex' }}
        align='center'
        justifyContent='end'
      >
        <HStack spacing='4'>
          <IconButton
            variant='ghost'
            aria-label='علاقه‌مندی ها'
            icon={<FiHeart />}
          />
          <IconButton variant='ghost' aria-label='اعلانات' icon={<FiBell />} />
          <Avatar />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg='transparent'
              fontSize='sm'
            >
              {userName}
            </MenuButton>
            <MenuList>
              <MenuItem>سلام</MenuItem>
              <MenuItem>سلام</MenuItem>
              <MenuItem>سلام</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
      <Flex display={{ md: 'none' }}>
        <Avatar />
      </Flex>
    </Flex>
  );
};
