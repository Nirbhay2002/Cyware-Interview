import React from 'react'
import { AccordionProvider } from './AccordionContext'

function Accordion({children}) {

  return (
    <AccordionProvider>{children}</AccordionProvider>
  )
}

export default Accordion