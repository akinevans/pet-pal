import hero_banner from "../../assets/hero-banner.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className='hero-wrapper'>
      <img
        className='hero-banner'
        src={hero_banner}
        alt='happy woman holding a corgi dog'
      />
      <div className='text-wrapper poppins-regular'>
        <h1 className='title poppins-bold'>Place Holder</h1>
        <h2 className='sub-title poppins-medium'>Place Holder Text</h2>
        <p className='body poppins-regular'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, soluta
          explicabo! Odio laudantium voluptatem eveniet sed beatae architecto,
          esse.
        </p>
      </div>
    </div>
  );
}
