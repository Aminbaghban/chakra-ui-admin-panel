import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from '@chakra-ui/react';
import React from 'react';

export function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <Alert
      status='error'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        مشکلی رخ داده است.
      </AlertTitle>
      {process.env.NODE_ENV === 'development' && (
        <AlertDescription maxWidth='sm'>{error.message}</AlertDescription>
      )}
      <Button
        variant='outline'
        colorScheme='red'
        mt='5'
        onClick={() => window.location.reload()}
      >
        بارگذاری مجدد
      </Button>
    </Alert>
  );
}
