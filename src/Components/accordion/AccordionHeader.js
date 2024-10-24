import React from 'react'
// import { useAccordion } from './AccordionContext'
import { AccordionContext } from './AccordionContext'

function AccordionHeader({eventKey, children}) {

    const {openItem, toggleItem} = React.useContext(AccordionContext)
  return (
    <div onClick={() =>{toggleItem(eventKey)}} className='accordion-header'>{children}</div>
  )
}

export default AccordionHeader