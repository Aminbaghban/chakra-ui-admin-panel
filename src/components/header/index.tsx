import { Badge, Flex, IconButton, Image, Spinner } from '@chakra-ui/react';
import React from 'react';
import { FiAlignRight } from 'react-icons/fi';
import { Link, LinkProps } from 'react-router-dom';

export const Header = ({
  toggleDrawer,
  linkProps,
  toolsBox: ToolsBox,
}: {
  toggleDrawer: () => void;
  linkProps?: LinkProps;
  toolsBox: React.LazyExoticComponent<React.ComponentType<any>>;
}) => {
  return (
    <Flex
      bg='white'
      color='black'
      boxShadow='md'
      justifyContent='space-between'
      px={{ base: '4', md: '10' }}
      h={{ base: '60px', '2xl': '75px' }}
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
      >
        <Badge>1</Badge>
      </IconButton>

      <Flex>
        <Link to='#' {...linkProps}>
          <Image
            src='/assets/Logo.svg'
            w={{ base: '36', lg: '48' }}
            h={{ base: '12', md: 'full' }}
            mx='auto'
          />
        </Link>
      </Flex>
      <React.Suspense fallback={<Spinner size='xs' />}>
        <ToolsBox />
      </React.Suspense>
    </Flex>
  );
};

