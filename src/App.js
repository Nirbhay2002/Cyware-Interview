import './index.css';
import Body from './Body'
import Accordion from './Components/accordion/Accordion';
import AccordionItem from './Components/accordion/AccordionItem';
import AccordionHeader from './Components/accordion/AccordionHeader';
import AccordionBody from './Components/accordion/AccordionBody';

function App() {
  return (
    <div className="home">
      <Body />
      <Accordion>
        <AccordionItem>
          <AccordionHeader eventKey='1'>Item 1</AccordionHeader>
          <AccordionBody eventKey='1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader eventKey='2'>Item 2</AccordionHeader>
          <AccordionBody eventKey='2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
