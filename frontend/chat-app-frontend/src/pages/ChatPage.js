import React, { useEffect } from 'react'
import axios from 'axios'

const ChatPage = () => {
      const fetchChats = async () => {
        const data = await axios.get('http://127.0.0.1:5000/users/test')

        console.log(data)
      }

      useEffect(() => {
        fetchChats();
      }, [])
      

      return <div>Chat Page</div>

}

export default ChatPage