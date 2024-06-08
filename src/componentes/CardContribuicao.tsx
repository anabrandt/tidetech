import { Text, Avatar, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardProps {
    nome: string;
    foto: string;
    estado: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

export function CardContribuicao({
    nome,
    foto,
    data,
    estado,
    foiAgendado,
    foiAtendido
}: CardProps) {
    return (
        <VStack w="100%" bg={foiAtendido ? 'blue.100' : 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
            <VStack flexDir="row">
                <Avatar size="lg" source={{ uri: foto }} />
                <VStack pl="4">
                    <Text fontSize="md" bold>{nome}</Text>
                    <Text>{estado}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4}>
                {foiAgendado ? 'Cancelar' : 'Agendar contribuição'}
            </Botao>
        </VStack>
    )
}