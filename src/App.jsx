import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Examples from './components/Examples/Examples.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
         <Examples />
      </main>
    </>
  );
}

export default App;