import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Button} from "@chakra-ui/react";
import { baseURL, fetchAPI } from "../utils/fetchAPI";
import Property from "../components/Property";

const Banner = ({purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl}) => ( //reusabel component with a destructured prop called purpose
  <Flex flexWrap = "wrap" justifyContent = "left" alignItems = "center" m ="10">
    <Image src = {imageUrl} width = {500} height = {300} alt = "banner image"/>
    <Box p = "5">
      <Text color = "#333" fontSize = "sm" fontWeight = "medium"> {purpose} </Text>
      <Text  fontSize = "3x1" fontWeight = "bold"> {title1} <br /> {title2} </Text>
      <Text  color = "gray.700" fontSize = "lg" paddingTop = "3" paddinBottom = "3" fontWeight = "medium"> {desc1} <br /> {desc2}</Text>
      <Button fontSize="xl">
        <Link href = {linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForSale, propertiesForRent}) { //in the home component we are using the prop "purpose"
  console.log(propertiesForSale, propertiesForRent);
  return (
    <Box>
      <Banner 
        purpose={"For Rent"}
        title1 = "Rental Homes for"
        titl2 = "Everyone"
        desc1= "explore apartments, villas, homes"
        desc2 = "and more!"
        buttonText = "Rent now"
        linkName = "/search?purpose=for-rent"
        imageUrl = "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <Flex flexWrap = "wrap" marginBottom = "100px">
        {propertiesForRent.map((property) => 
          <Property property = {property} key = {property.id} />
        )}
      </Flex>

      <Banner 
        purpose={"BUY A HOME"}
        title1 = "Find, Buy & Own Your"
        titl2 = "Dream Home"
        desc1= "explore apartments, villas, homes"
        desc2 = "and more!"
        buttonText = "Buy now"
        linkName = "/search?purpose=for-sale"
        imageUrl = "https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />

      <Flex flexWrap = "wrap">
        {propertiesForSale.map((property) => 
          <Property property = {property} key = {property.id} />
        )}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {

  const propertyForSale = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}
