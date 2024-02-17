import React from 'react'
import { ChatState } from '../context/ChatProvider'


const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div>
      chat page
    </div>
  )
}

export default ChatPage
