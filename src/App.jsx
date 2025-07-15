import Accordion from "./components/Accordion/Accordion";


function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <Accordion.Item className="accordion-item">
          <Accordion.Title className="accordion-item-title" id="1">We got 20 years expirience!</Accordion.Title>
          <Accordion.Content className="accordion-item-content" id="1">
            <article>
              <p>Cant go wrong with us!</p>
              <p>Bla bla bla blablalbal balbalbal ballblbalba</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="accordion-item">
          <Accordion.Title className="accordion-item-title" id="2">We got 50 years expirience!</Accordion.Title>
          <Accordion.Content className="accordion-item-content" id="2">
            <article>
              <p>Cant go wrong with us!</p>
              <p>Bla bla bla blablalbal balbalbal ballblbalba</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>

}

export default App;
