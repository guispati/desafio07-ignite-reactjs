import { Box, Flex } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export function TravelTypes() {
    return (
        <Flex justifyContent="space-between" my="20">
            <TravelItem src="/assets/Nightlife.svg" />
            <TravelItem src="/assets/Beach.svg" />
            <TravelItem src="/assets/Modern.svg" />
            <TravelItem src="/assets/Classic.svg" />
            <TravelItem src="/assets/More.svg" />
        </Flex>
    );
}