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
        card={card}
      // img={'../../images/' + card.coverImg}
      // rating={card.stats.rating}
      // reviewCount={card.stats.reviewCount}
      // location={card.location}
      // title={card.title}
      // price={card.price}
      // openSpots={card.openSpots}
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
