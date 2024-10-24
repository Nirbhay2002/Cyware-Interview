import React from 'react'
// import { useAccordion } from './AccordionContext'
import { AccordionContext } from './AccordionContext';

function AccordionBody({eventKey, children}) {

   const {openItem, toggleItem} = React.useContext(AccordionContext);
//    console.log(openItem, eventKey)

  return (
    <div className='accordion-body' style = {{ display: openItem === eventKey ? 'block' : 'none' }}>{children}</div>
  )
}

export default AccordionBody