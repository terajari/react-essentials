import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(topic) {
    setSelectedTopic(topic)
  }

  let tabContent = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = (<div id="tab-content"><h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre></div>)
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcepts 
            title={CORE_CONCEPTS[0].title}
            desc={CORE_CONCEPTS[0].desc}
            image={CORE_CONCEPTS[0].img}
            />
          <CoreConcepts 
            title={CORE_CONCEPTS[1].title}
            desc={CORE_CONCEPTS[1].desc}
            image={CORE_CONCEPTS[1].img}
            />
            <CoreConcepts 
            title={CORE_CONCEPTS[2].title}
            desc={CORE_CONCEPTS[2].desc}
            image={CORE_CONCEPTS[2].img}
            />
            <CoreConcepts 
            title={CORE_CONCEPTS[3].title}
            desc={CORE_CONCEPTS[3].desc}
            image={CORE_CONCEPTS[3].img}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
            {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}


export default App;
