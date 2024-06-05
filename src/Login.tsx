import { VStack, Image } from 'native-base'
import Logo from './assets/logo.png'

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt="Logo TideTech"/>
    </VStack>
  );
}

