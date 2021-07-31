import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function BannerHome() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Flex w="100vw" m="0" p="0" h="auto" bgImage="/assets/Banner-Home.png" bgSize="cover">
            <Flex w={1160} my="6" mx="auto" align="center" justify="space-between">
                <Box w={["100%","50%"]} p={["1rem", "0"]}>
                    <Heading as="h1" fontWeight="500" mb="5" fontSize={["xl","4xl"]} color="white.0">
                        5 Continentes, <br />infinitas possibilidades.
                    </Heading>
                    <Text fontSize={["sm", "xl"]} color="gray.100">
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
                {isWideVersion && <Image src="/assets/Airplane.svg" alt="worldtrip" fit="cover" rotate="3" pos="relative" top={50} />}
            </Flex>
        </Flex>
    );
}