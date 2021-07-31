import { Box, Image, ImageProps as ChakraImageProps, useBreakpointValue } from "@chakra-ui/react";

interface TravelItemProps extends ChakraImageProps {
    src: string;
}

export function TravelItem({ src, ...rest}: TravelItemProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            {isWideVersion && <Image src={src} />}
        </Box>
    );
}