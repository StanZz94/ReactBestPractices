import Accordion from "./components/Accordion/Accordion";


function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <Accordion.Item id="1" className="accordion-item">
          <Accordion.Title className="accordion-item-title">We got 20 years expirience!</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>Cant go wrong with us!</p>
              <p>Bla bla bla blablalbal balbalbal ballblbalba</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id="2" className="accordion-item">
          <Accordion.Title className="accordion-item-title">We got 50 years expirience!</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
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
