import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
  
 
    const renderContactList = props.contacts.map((contact) => {
        
        return (
            
            <ContactCard contact = {contact}/>
        )
    })
    
  return (
    <div className='ui celled list'>
       <h2>Contact list</h2>
       {renderContactList}
       
    </div>
  )
}

export default ContactList