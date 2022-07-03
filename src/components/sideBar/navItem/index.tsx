import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CustomLink } from 'components/customLink';
import React from 'react';
import { IconType } from 'react-icons';
import SidebarHoverBox from '../hoverBox';

export const NavItem = ({
  sidebarSize,
  icon,
  title,
  link,
  variant,
}: {
  sidebarSize: 'small' | 'large';
  icon: IconType;
  title: string;
  link: string;
  variant: 'drawer' | 'sidebar';
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      mt='2'
      flexDir='column'
      w='100%'
      alignItems={sidebarSize === 'small' ? 'center' : 'flex-start'}
      color='gray.600'
      fontSize='sm'
    >
      {variant === 'sidebar' ? (
        <Menu placement='start' isOpen={isOpen}>
          <CustomLink to={link} sidebarSize={sidebarSize}>
            <MenuButton w='full' onMouseEnter={onOpen} onMouseLeave={onClose}>
              <Flex align='center'>
                <Icon as={icon} fontSize='xl' />
                <Text
                  fontWeight='bold'
                  ms='5'
                  display={sidebarSize === 'small' ? 'none' : 'flex'}
                >
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </CustomLink>
          <MenuList
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            py='0'
            w={200}
            h={200}
            ms={5}
          >
            <SidebarHoverBox title={title} icon={icon} description='' />
          </MenuList>
        </Menu>
      ) : (
        <CustomLink to={link} sidebarSize={sidebarSize}>
          <Flex align='center'>
            <Icon as={icon} fontSize='xl' />
            <Text
              fontWeight='bold'
              ms='5'
              display={sidebarSize === 'small' ? 'none' : 'flex'}
            >
              {title}
            </Text>
          </Flex>
        </CustomLink>
      )}
    </Flex>
  );
};
