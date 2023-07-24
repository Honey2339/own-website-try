import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./About.css";
import {
  Card,
  CardBody,
  ChakraProvider,
  theme,
  Text,
  CardHeader,
  Heading,
  CardFooter,
  Divider,
  Button,
  Box,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

delete theme.styles.global;

function About() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <motion.div className="main-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="under-container"
        >
          <Navbar />
          <Box className="grid-container" display="flex">
            <Card
              className="cardbody-container"
              mt="120px"
              ml="120px"
              maxW="250px"
              bg="whiteAlpha.1100"
              borderRadius="10px"
            >
              <CardHeader>
                <Heading color="black">MERN Auth</Heading>
              </CardHeader>
              <CardBody color="black">
                <Text>
                  This project illustrate the working of jwt (json-web-token) to
                  auth the user with MERN Stack
                </Text>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button
                  colorScheme="purple"
                  border="0"
                  leftIcon={<LinkIcon className="icon" />}
                >
                  <Link
                    className="anchor"
                    to="https://github.com/Honey2339/loginAuth-MERN"
                  >
                    Source Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </Box>
          <motion.div>
            <img className="donut" src="./images/donut.png"></img>
            <img className="sphere" src="./images/sphere.png"></img>
            <img className="pills" src="./images/pills.png"></img>
            <img className="square" src="./images/square.png"></img>
            <p className="info">
              This is not 100% built plus the website is not compatible for
              mobile and yet to be completed. For more info you can click on my
              name to redirect to my Linkedin profile
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </ChakraProvider>
  );
}

export default About;
