import { Flex, Link } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {
    return (
        <Flex as="header" w="100%" maxW={1480} h={[50, 100]} mx="auto" align="center" justify="center">
            <Link href="/">
                <Logo />
            </Link>
        </Flex>
    );
}