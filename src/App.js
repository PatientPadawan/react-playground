import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './messages';
import TheDate from './state/TheDate';
import Counter from './Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={3}>
      This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        <Tooltip message='one more tooltip message'>
          <br />Necessitatitbus?
        </Tooltip>
        <HelloWorld />
        <br />
        <TheDate />
      </Split>
      <Split className='right' flexBasis={4}>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
        <Counter count={123} />
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <Bomb />
        <RouletteGun />
        <Tabs tabs={tabsProp} />
        <Accordion />
      </Split>
    </main>
  );
}

export default App;
