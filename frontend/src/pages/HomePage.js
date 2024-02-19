import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/SignUp";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent bg >
      <Box
        fontWeight={800}
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow='outline'
        backdropFilter="blur(8px)"
      >
        <Text fontSize="4xl" fontFamily="Work sans" bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  >
          Real Time Chat App
        </Text>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px" boxShadow='outline' backdropFilter="blur(8px)">
        <Tabs isFitted variant="soft-rounded" textColor="#E2E8F0">
          <TabList mb="1em">
            <Tab textColor="white">Login</Tab>
            <Tab  textColor="white">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;