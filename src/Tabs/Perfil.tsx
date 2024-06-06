import { VStack, Text, ScrollView, Avatar, Divider, Image } from 'native-base'
import { Titulo } from '../componentes/Titulo'
import Basquiat from '../assets/basquiat.png'
import Trofeu from '../assets/trofeu.png'

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>

                <Titulo color="blue.500">Meu perfil</Titulo>

                <Avatar size="xl" source={Basquiat} mt={5} />
                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Jean Michel Basquiat</Titulo>
                <Text>17/02/2004</Text>
                <Text>São Paulo, sp</Text>
                
                <Divider mt={5}/>
                <Titulo color="blue.500">Histórico de constribuições</Titulo>
                <Text>Praia 1</Text>
                <Text>Praia 2</Text>
                <Text>Praia 3</Text>

                <Divider mt={5}/>
                <Titulo> Parábens! Você tem 750 Points na tidetech, continue contribuindo!</Titulo>
                <Image source={Trofeu} alt="trofeu TideTech"/>

            </VStack>
        </ScrollView>
    )
}