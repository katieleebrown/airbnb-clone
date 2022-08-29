import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cardData = data.map(card => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    )
  })

  return (
    <div className="">
      <Navbar />
      <Hero />
      <section className='cards'>
        {cardData}
      </section>
    </div>
  );
}

export default App;
