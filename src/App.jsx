import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import PetCard from "./components/PetCard/PetCard";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className='app'>
      <Nav />
      <Hero />

      <div className='pet-card-container'>
        <div className='pet-card-header-container'>
          <h1 className='pet-title poppins-medium'>Your Pets</h1>
          <div className='btn-wrapper'>
            <Button
              //
              styling='dark-blue'
              title='Add'
              onClick=''
            />
            <Button
              //
              styling='white'
              title='Edit'
              onClick=''
            />
          </div>
        </div>
        <div className='pet-card-component-container'>
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
    </div>
  );
}

export default App;
