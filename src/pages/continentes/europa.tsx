import { Box, Flex, Heading, Icon, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { BannerContinente } from "../../components/BannerContinente";
import { Header } from "../../components/Header";
import { RiInformationLine } from 'react-icons/ri'
import { CardContinente } from "../../components/CardContinente";

export default function Europa() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex direction="column" w="100%" wrap="wrap" maxW={1440} m="0" p="0">
            <Header />
            <BannerContinente />
            <Box mx="auto" w="100%" maxW={1160} mt={["6", "20"]}>
                <Flex justify="space-between" gridGap="16" px={["1rem", "0"]} wrap={["wrap", "nowrap"]}>
                    <Box w={["100%", "50%"]}>
                        <Text textAlign="justify" fontSize={["sm", "2xl"]}>
                            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                        </Text>
                    </Box>
                    <Flex w={["100%", "50%"]} alignItems="center" justifyContent="space-between">
                        <Flex direction="column" align={["flex-start", "center"]}>
                            <Text color="yellow" fontWeight="600" fontSize={["2xl", "5xl"]}>
                                50
                            </Text>
                            <Text fontWeight={["normal", "600"]} fontSize={["lg", "2xl"]}>
                                países
                            </Text>
                        </Flex>
                        <Flex direction="column" align={["flex-start", "center"]}>
                            <Text color="yellow" fontWeight="600" fontSize={["2xl", "5xl"]}>
                                60
                            </Text>
                            <Text fontWeight={["normal", "600"]} fontSize={["lg", "2xl"]}>
                                línguas
                            </Text>
                        </Flex>
                        <Flex direction="column" align={["flex-start", "center"]}>
                            <Text color="yellow" fontWeight="600" fontSize={["2xl", "5xl"]}>
                                27
                            </Text>
                            <Text fontWeight={["normal", "600"]} fontSize={["lg", "2xl"]}>
                                cidades +100
                                {isWideVersion &&
                                <Tooltip label="Cidades do continente que estão entre as 100 cidades mais visitadas do mundo" fontSize="md">
                                    <span>
                                        <Icon as={RiInformationLine} fontSize="md" ml="1" color="gray.300" />
                                    </span>
                                </Tooltip>}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Box mt="20" px={["1rem", "0"]}>
                    <Heading as="h2" fontWeight="500" fontSize={["2xl", "4xl"]}>
                        Cidades +100
                    </Heading>
                    <Flex justify={["center", "start"]} gridGap="10" mt="10" wrap="wrap">
                        <CardContinente cidade="Londres" pais="Reino Unido" img="Londres-Card.png" icon="UK-FLag.png" />
                        <CardContinente cidade="Paris" pais="França" img="Paris-Card.png" icon="France-FLag.png" />
                        <CardContinente cidade="Roma" pais="Itália" img="Rome-Card.png" icon="Italy-FLag.png" />
                        <CardContinente cidade="Praga" pais="República Tcheca" img="Praga-Card.png" icon="Czech-FLag.png" />
                        <CardContinente cidade="Amsterdã" pais="Holanda" img="Amsterdam-Card.png" icon="Netherlands-FLag.png" />
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}