import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import PetCard from "./components/PetCard/PetCard";

function App() {
  return (
    <div className='app'>
      <Nav />
      <Hero />
      <div className='pet-card-container-header'>
        <h1>Your Pets</h1>
        <h2>something something</h2>
      </div>
      <div className='pet-card-container'>
        <PetCard
          //
          name='Alphonse'
          breed='Husky'
          gender='male'
          age='6 months'
        />
        <PetCard
          //
          name='Alphonse'
          breed='Husky'
          gender='male'
          age='6 months'
        />
        <PetCard
          //
          name='Alphonse'
          breed='Husky'
          gender='male'
          age='6 months'
        />
        <PetCard
          //
          name='Alphonse'
          breed='Husky'
          gender='male'
          age='6 months'
        />
        <PetCard
          //
          name='Alphonse'
          breed='Husky'
          gender='male'
          age='6 months'
        />
        <PetCard
          //
          name='Alphonse'
          breed='Husky'
          gender='male'
          age='6 months'
        />
        <PetCard
          //
          name='Alphonse'
          breed='Husky'
          gender='male'
          age='6 months'
        />
        <PetCard
          //
          name='Alphonse'
          breed='Husky'
          gender='male'
          age='6 months'
        />
      </div>
    </div>
  );
}

export default App;
