import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <h1 className='poppins-bold logo'>Pet Pal</h1>

      <ul>
        <li>
          <Link className='link' to='/'>
            Home
          </Link>
          <li>
            <Link className='link' to=''>
              My Pets
            </Link>
          </li>
          <li>
            <Link className='link' to=''>
              Something
            </Link>
          </li>
          <li>
            <Link className='link' to=''>
              Something
            </Link>
          </li>
        </li>
      </ul>
      <Button
        styling='poppins-regular dark-blue'
        title='Join the community'
        onClick={() => {
          console.log("nav btn pressed");
        }}
      ></Button>
    </nav>
  );
}
