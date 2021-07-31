import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CardContinenteProps {
    cidade: string,
    pais: string,
    img: string,
    icon: string,
}

export function CardContinente({cidade, pais, img, icon}: CardContinenteProps) {
    return (
        <Box>
            <Image src={`/assets/continentes/europa/${img}`} />
                <Flex
                    border="1px solid rgba(255, 186, 8, 0.5)"
                    px="6"
                    py="4"
                    borderTop="none"
                    pos="relative"
                    top={-1}
                    zIndex="hide"
                    borderRadius="base"
                    justify="space-between"
                    align="center"
                >
                    <Flex direction="column">
                        <Heading as="h3" fontSize="xl" fontWeight="600" mb="3">
                            {cidade}
                        </Heading>
                        <Text fontSize="md" fontWeight="500" color="gray.300">
                            {pais}
                        </Text>
                    </Flex>
                <Image src={`/assets/continentes/europa/${icon}`} width="auto" height="100%" />
                </Flex>
        </Box>
        
    );
}