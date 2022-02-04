import {Box, Flex, Text, Avatar} from "@chakra-ui/react";
import {FaBed, FaBath} from "react-icons/fa";
import {BsGridFill} from "react-icons/bs";
import {GoVerified} from "react-icons/go";
import millify from "millify";

import { baseURL, fetchAPI } from "../../utils/fetchAPI";
import ImageScrollBar from "../../components/ImageScrollBar";

const PropertyDetails = ({propertyDetails: {price, rentFrequency, rooms, title, baths, agency, isVerified, description, area, type, purpose, furnishingStatus, amenities, photos}}) => (
    <Box maxWidth = "1000px" margin = "auto" p = "4">
        {photos && <ImageScrollBar data = {photos} />} 
        <Box w = "full" p = "6">
            <Flex paddingTop = "2" alignItems = "center">
                <Flex paddingTop = "2" alignItems = "center" justifyContent = "space-between">
                    <Flex alignItems = "center">
                        <Box paddingRight = "3" color = "green.400">
                            {isVerified && <GoVerified />}
                        </Box>
                        <Text fontWeight = "bold" fontSize = "lg" marginRight = "5"> AED {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar marginRight = "5" size = "xs" src = {agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>

                <Flex alignItems = "center" p = "1" justifyContent = "space-bewteen" w = "250px" color = "blue.400"> 
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
            </Flex>

            <Box marginTop = "2">
                <Text fontSize = "lg" marginBottom = "2" fontWeight = "bold">
                    {title}
                </Text>

                <Text lineHeight = "2" color = "gray.600">
                    {description}
                </Text>
            </Box>

            <Flex flexWrap = "Wrap" textTransform = "uppercase" justifyContent = "space-bewtween">
                <Flex w = "400px" borderBottom = "1px" borderColor = "gray.500" p = "3">
                    <Text paddingRight = "10px" fontWeight = "bold"> Type: </Text>
                    <Text fontWeight = "lighter">{type}</Text>
                </Flex>
            </Flex>

            <Flex flexWrap = "Wrap" textTransform = "uppercase" justifyContent = "space-bewtween">
                <Flex w = "400px" borderBottom = "1px" borderColor = "gray.500" p = "3">
                    <Text paddingRight = "10px" fontWeight = "bold"> Purpose: </Text>
                    <Text fontWeight = "lighter">{purpose}</Text>
                </Flex>
            </Flex>

            {furnishingStatus && (
                 <Flex flexWrap = "Wrap" textTransform = "uppercase" justifyContent = "space-bewtween">
                 <Flex w = "400px" borderBottom = "1px" borderColor = "gray.500" p = "3">
                     <Text paddingRight = "10px" fontWeight = "bold"> Furnishing Status: </Text>
                     <Text fontWeight = "lighter">{furnishingStatus}</Text>
                 </Flex>
             </Flex> 
            )}

            <Box>
               {amenities.length && <Text fontSize = "2xl" fontWeight = "black" marginTop = "5"> Amenities </Text>} 
               <Flex flexWrap = "wrap">
                   {amenities.map((item) => (
                       item.amenities.map((amenity) => (
                            <Text fontWeight = "bold" color = "blue.400" fontSize = "l" p = "2" bg = "gray.200" m = "1" borderRadius = "5" key = {amenity.text}> {amenity.text} </Text>
                       ))
                   ))}
               </Flex>
            </Box>
        </Box>
    </Box>
)

export default PropertyDetails;

export async function getServerSideProps({params: {id}}) {

    const data = await fetchAPI(`${baseURL}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    }
}