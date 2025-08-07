import { Box, Heading, VStack, Button, Link as ChakraLink } from '@chakra-ui/react'

function ChakraDemo() {
  return (
    <Box p={8} maxW="container.md" mx="auto" textAlign="center">
      <Heading mb={6}>Welcome to Chakra UI + Vite</Heading>
      <VStack spacing={4}>
        <Button colorScheme="teal">Click me</Button>
        <ChakraLink href="https://chakra-ui.com/docs/components/concepts/overview" color="teal.500" isExternal>
          See Components
        </ChakraLink>
      </VStack>
    </Box>
  )
}

export default ChakraDemo