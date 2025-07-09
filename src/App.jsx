import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <AccordionItem className="accordion-item" id="1" title="We got 20 years expirience!">
          <article>
            <p>Cant go wrong with us!</p>
            <p>Bla bla bla blablalbal balbalbal ballblbalba</p>
          </article>
        </AccordionItem>

        <AccordionItem className="accordion-item" id="2" title="We got 20 years expirience!">
          <article>
            <p>Cant go wrong with us!</p>
            <p>Bla bla bla blablalbal balbalbal ballblbalba</p>
          </article>
        </AccordionItem>
      </Accordion>
    </section>
  </main>

}

export default App;
