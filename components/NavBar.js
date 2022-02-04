import Link from "next/link";
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from "@chakra-ui/react";

import {FcMenu, FcHome, FcAbout} from "react-icons/fc";
import {BsSearch} from "react-icons/bs";
import {FiKey} from "react-icons/fi";
import { Text } from "@chakra-ui/react";

const NavBar = () => (

    <Flex p = "2" borderBottom = "1px" borderColor = "gray.400">
        <Box fontSize = "3xl" p = "5" paddingTop = "10" paddingBottom = "10" color = "blue.400" fontWeight = "bold" borderRight = "2px" borderColor = "blue.600">
            <Link href = "/" paddingLeft = "2"> Simple Realtor App - </Link>
            <Text marginTop = "2.5" fontSize = "xl" fontWeight = "lighter">react.js, next.js, axios, @chakra-ui, rapidAPI</Text>
        </Box>

        <Spacer/>

        <Box>
            <Menu>
                <MenuButton as = {IconButton} icon = {<FcMenu />} size = "lg" variant = "outline" color = "red.400" />
                <MenuList fontSize = "20">
                    <Link href = "/" passHref>
                        <MenuItem icon = {<FcHome />}> Home </MenuItem>
                    </Link>

                    <Link href = "/search" passHref>
                        <MenuItem icon = {<BsSearch />}> Search </MenuItem>
                    </Link>

                    <Link href = "/search?purpose=for-sale" passHref>
                        <MenuItem icon = {<FcAbout />}> Buy Now </MenuItem>
                    </Link>

                    <Link href = "/search?purpose=for-rent" passHref>
                        <MenuItem icon = {<FiKey />}> Rent Now </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default NavBar;