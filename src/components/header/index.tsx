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
} from '@chakra-ui/react';
import React from 'react';
import { FiAlignRight, FiBell } from 'react-icons/fi';

export const Header = ({
  toggleDrawer,
  userName,
  menuContentList,
}: {
  toggleDrawer: () => void;
  userName: string;
  menuContentList?: React.ReactElement;
}) => {
  return (
    <Flex
      bg='white'
      color='black'
      boxShadow='md'
      justifyContent='space-between'
      px={{ base: '4', md: '10' }}
      h={{ base: '75px', md: '75px' }}
      alignItems='center'
      position='relative'
      zIndex={10}
    >
      <IconButton
        display={{ lg: 'none' }}
        variant='unstyled'
        aria-label='اعلانات'
        size='lg'
        icon={<FiAlignRight />}
        onClick={toggleDrawer}
      />

      <Flex>
        <Image
          src='/assets/Logo.svg'
          w={{ base: '36', lg: '48' }}
          h={{ base: '12', md: 'full' }}
          mx='auto'
        />
      </Flex>

      <Flex align='center' justifyContent='end'>
        <HStack spacing='4'>
          <IconButton
            variant='ghost'
            aria-label='اعلانات'
            icon={<FiBell />}
            display={{ base: 'none', lg: 'flex' }}
          />
          <Avatar display={{ base: 'none', lg: 'initial' }} />
          <Menu>
            <>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg='transparent'
                fontSize='sm'
              >
                {userName}
              </MenuButton>
              {menuContentList}
            </>
          </Menu>
        </HStack>
      </Flex>
    </Flex>
  );
};
