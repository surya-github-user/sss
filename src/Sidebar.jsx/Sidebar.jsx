import React from 'react'
import { Sidebarheader } from './Sidebarheader'
import Userlist from './Userlist.js'

export const Sidebar = ({setIstrue,setUserlist}) => {
    const pass = (data) =>{
        setIstrue(true)
        setUserlist([data])
    }

  return (
    <div>
         <div className='sidebar'>
        <Sidebarheader></Sidebarheader>
        <div>
            {Userlist.map((kk) => (
                <div className="user" onClick={()=>pass(kk)}>
                    <img className="img" src={kk.profile}></img>
                    <div className='username'>{kk.name}</div>
                </div>
                 
             
            ))}
           
        </div>

    </div>

    </div>
   
  )
}
