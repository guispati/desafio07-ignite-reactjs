import { Box, Center, Divider, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { BannerHome } from '../components/BannerHome'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
    return (
        <Flex direction="column" w="100%" wrap="wrap" maxW={1440} m="0" p="0">
            <Header />
            <BannerHome />
            <Box mx="auto" w="100%" maxW={1160}>
                <TravelTypes />
                <Center mt="20">
                    <Divider orientation="horizontal" borderColor="black" borderBottomWidth={2} w={90} />
                </Center>
                <Center my="14">
                    <Heading as="h2" fontSize={["xl", "4xl"]} fontWeight="500" lineHeight="auto" textAlign="center">
                        Vamos nessa? <br /> Então escolha seu continente
                    </Heading>
                </Center>
                <Box mb="10">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <Link href="/continentes/europa" _hover={{textDecoration:'none'}}>
                                <Flex direction="column" justify="center" bgImg="/assets/Continent.png" align="center" h={450} bgSize="cover">
                                    <Heading color="white" fontWeight="bold" fontSize={["2xl", "5xl"]}>Europa</Heading>
                                    <Text color="gray.100" fontWeight="bold" fontSize={["sm", "2xl"]}>O continente mais antigo.</Text>
                                </Flex>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="/continentes/europa" _hover={{textDecoration:'none'}}>
                                <Flex direction="column" justify="center" bgImg="/assets/Continent.png" align="center" h={450} bgSize="cover">
                                    <Heading color="white" fontWeight="bold" fontSize={["2xl", "5xl"]}>Europa</Heading>
                                    <Text color="gray.100" fontWeight="bold" fontSize={["sm", "2xl"]}>O continente mais antigo.</Text>
                                </Flex>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="/continentes/europa" _hover={{textDecoration:'none'}}>
                                <Flex direction="column" justify="center" bgImg="/assets/Continent.png" align="center" h={450} bgSize="cover">
                                    <Heading color="white" fontWeight="bold" fontSize={["2xl", "5xl"]}>Europa</Heading>
                                    <Text color="gray.100" fontWeight="bold" fontSize={["sm", "2xl"]}>O continente mais antigo.</Text>
                                </Flex>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="/continentes/europa" _hover={{textDecoration:'none'}}>
                                <Flex direction="column" justify="center" bgImg="/assets/Continent.png" align="center" h={450} bgSize="cover">
                                    <Heading color="white" fontWeight="bold" fontSize={["2xl", "5xl"]}>Europa</Heading>
                                    <Text color="gray.100" fontWeight="bold" fontSize={["sm", "2xl"]}>O continente mais antigo.</Text>
                                </Flex>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </Flex>
    )
}
