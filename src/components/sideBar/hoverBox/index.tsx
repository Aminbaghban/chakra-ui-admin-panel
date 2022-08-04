import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

export default function SidebarHoverBox({
  title,
  icon,
  description,
}: {
  title: string;
  icon: IconType;
  description: string;
}) {
  return (
    <>
      <Flex
        pos='absolute'
        mt='calc(100px - 7.5px)'
        ms='-10px'
        zIndex={10000000000}
        width={0}
        height={0}
        borderTop='10px solid transparent'
        borderBottom='10px solid transparent'
        borderLeft='10px solid #1967d27d'
      />
      <Flex
        h={100}
        w='100%'
        flexDir='column'
        alignItems='center'
        justify='center'
        bg='#1967d27d'
        borderRadius='10px'
        color='#fff'
        textAlign='center'
      >
        <Icon as={icon} fontSize='xl' mb={4} />
        <Heading size='sm' fontWeight='normal'>
          {title}
        </Heading>
        <Text fontSize='sm'>{description}</Text>
      </Flex>
    </>
  );
}
