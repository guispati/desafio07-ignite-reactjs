import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export function BannerContinente() {
    return (
        <Flex w="100vw" m="0" p="0" h={[150, 500]} bgImage="/assets/Banner-Europa.png" bgSize="cover">
            <Flex w={1160} my="6" mx="auto" align={["center", "flex-end"]} justify={["center", "space-between"]}>
                <Heading as="h1" fontWeight="600" mb="5" fontSize={["3xl", "5xl"]} color="white.100">
                    Europa
                </Heading>
            </Flex>
        </Flex>
    );
}