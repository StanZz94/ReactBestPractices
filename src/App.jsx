import Accordion from "./components/Accordion/Accordion";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];


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

    <section>
      <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
        {(item) => <Place item={item} />}
      </SearchableList>
    </section>
  </main>

}

export default App;
