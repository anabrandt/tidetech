import { VStack, Divider, ScrollView, Image } from 'native-base'
import { Botao } from '../componentes/Botao'
import { CardContribuicao } from '../componentes/CardContribuicao'
import { Titulo } from '../componentes/Titulo'
import Praia from '../assets/praia.png'

export default function Consultas(){
  return(
    <ScrollView p="5">
      <Titulo color="blue.500">Minhas contribuições</Titulo>
      <Botao mt={5} mb={5}>Agendar nova contribuição</Botao>

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas contribuições</Titulo>
      <CardContribuicao 
        nome='Praia da barra'
        estado='Rio de Janeiro, rj'
        foto='https://github.com/anacarolinatvr.png'
        data='20/04/2023'
        foiAgendado
      />

      <Divider mt={5} />

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Contribuições anteriores</Titulo>
      <CardContribuicao 
        nome='Praia da barra'
        estado='Rio de Janeiro, rj'
        foto='https://github.com/anacarolinatvr.png'

        data='20/04/2023'
        foiAtendido
      />
      <CardContribuicao 
        nome='Praia da barra'
        estado='Rio de Janeiro, rj'
        foto='https://github.com/anacarolinatvr.png'
        data='20/04/2023'
        foiAtendido
      />
      <CardContribuicao 
        nome='Praia da barra'
        estado='Rio de Janeiro, rj'
        foto='https://github.com/anacarolinatvr.png'
        data='20/04/2023'
        foiAtendido
      />
    </ScrollView>
  )
}