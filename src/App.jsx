// component imports
import Button from "./components/Button/Button";

// scss imports
import "./App.scss";
import "normalize.css";

// TODO Setup Router

function App() {
  return (
    <div className='app'>
      Primary
      <Button
        variant='btn-primary'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      <Button
        variant='btn-primary-disabled'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      Secondary
      <Button
        // disabled='true'
        variant='btn-secondary'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      <Button
        // disabled='true'
        variant='btn-secondary-disabled'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      Tertiary
      <Button
        // disabled='true'
        variant='btn-tertiary'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      <Button
        // disabled='true'
        variant='btn-tertiary-disabled'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      Destructive
      <Button
        // disabled='true'
        variant='btn-destructive'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      <Button
        // disabled='true'
        variant='btn-destructive-disabled'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
    </div>
  );
}

export default App;
