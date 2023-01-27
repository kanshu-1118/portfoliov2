import { ChakraProvider } from '@chakra-ui/react'
import App from './App'


const Home = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

export default Home