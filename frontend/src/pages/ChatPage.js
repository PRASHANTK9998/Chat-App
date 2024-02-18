import React from 'react'
import Header from '../components/other_files/Header';
import { Box } from '@chakra-ui/layout';
import ChatBox from '../components/ChatBox';
import MyChats from '../components/MyChats';

const ChatPage = () => {

  return (
    <div style={{ width: "100%" }}>
      {<Header />}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        w={"100%"}
        h={'91.5vh'}
        p={'10px'}
      >
         {<MyChats />}
         {<ChatBox />}
      </Box>
    </div>
  )
}

export default ChatPage
