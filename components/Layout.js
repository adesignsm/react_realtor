import Head from "next/head";
import {Box} from "@chakra-ui/react";
import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({children}) => (

    <React.Fragment>
        <Head>
            <title>Real Estate</title> 
        </Head>

        <Box maxWidth = "1920px" m = "auto" p = "auto" bg = "#333">
            <header>
                <NavBar />
            </header>

            <main>
               {children} 
            </main>

            <footer>
                <Footer />
            </footer>
        </Box>
    </React.Fragment>
)

export default Layout;