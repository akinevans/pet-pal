import puppy from "../../assets/puppy.png";
import "./PetCard.css";

//TODO: fetch data from database for each card component
export default function PetCard(props) {
  return (
    <div className='pet-card-wrapper'>
      <img src={puppy} alt='pet image' className='pet-img' />

      <div className='pet-card-text-wrapper'>
        {/* place holder data */}
        <div className='name-breed'>
          <h1 className='name poppins-medium'>{props.name}</h1>
          <h2 className='breed poppins-medium'>{props.breed}</h2>
        </div>
        <div className='gender-age'>
          <p className='gender poppins-light'>Gender: {props.gender}</p>
          <p className='age poppins-light'>Age: {props.age}</p>
        </div>
      </div>
    </div>
  );
}
