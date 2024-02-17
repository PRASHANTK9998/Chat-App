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
    <Container maxW="xl" centerContent  bgGradient={[
      'linear(to-tr, teal.300, yellow.400)',
      'linear(to-t, blue.200, teal.500)',
      'linear(to-b, orange.100, purple.300)',
    ]}>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow='outline'
      >
        <Text fontSize="4xl" fontFamily="Work sans" bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  >
          Anonymous-Chat-App
        </Text>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px" boxShadow='outline'>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
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