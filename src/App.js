import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 'jii321321',
      label: 'Can I use React on a project?',
      content: 'Yeah whatever.'
    },
    {
      id: 'nnjf239u',
      label: 'Can I use Javascript on a project?',
      content: 'Yeah whatever..'
    },
    {
      id: '93128ueh1',
      label: 'Can I use CSS on a project?',
      content: 'Yeah whatever...'
    }
  ]

  return <Accordion items={items} />
}

export default App;
