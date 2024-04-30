import React, { useEffect, useState } from 'react'
import { Header } from './Sidebar.jsx/Header'
import { Iconbar } from './Sidebar.jsx/Iconbar'
import { Sidebar } from './Sidebar.jsx/Sidebar'
import { Message } from './Sidebar.jsx/Message'
import { Defaultmessage } from './Sidebar.jsx/Defaultmessage'
import { Messageheader } from './Sidebar.jsx/Messageheader'
import { Messages } from './Sidebar.jsx/Messages'
import { Messageinput } from './Sidebar.jsx/Messageinput'

export const Chatapp = () => {
  const [istrue,setIstrue] = useState(false)
  const [inputdata,setInputdata] = useState('')
  const [inputarray,setInputarray] = useState([])
  const [userlist,setUserlist] = useState([])
 
  
  return (
    <div>
      <Header></Header>
      <div className='main'>
        <Iconbar></Iconbar>
        <div className='maintwo'>
        <Sidebar setIstrue={setIstrue} setUserlist={setUserlist}></Sidebar>
          {istrue
            ? <div>
              <Messageheader setIstrue={setIstrue} userlist={userlist}></Messageheader>
            <Messages inputarray={inputarray} setInputarray={setInputarray}></Messages>
            <Messageinput setInputarray={setInputarray} inputarray={inputarray} inputdata={inputdata} setInputdata={setInputdata}></Messageinput> 
            </div>
            :
            <Defaultmessage></Defaultmessage>
          }
         
          

          <Message></Message>
          
        </div>
      </div>
   
       
     
    </div>
  )
}
