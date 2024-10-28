// component imports
import Button from "./components/Button/Button";
import Button_Social from "./components/Button_Social/Button_Social";

// scss imports
import "./App.scss";
import "normalize.css";

// TODO Setup Router

function App() {
  return (
    <div className='app'>
      <p>Primary</p>
      <Button
        variant='btn-primary'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      <p>Primary disabled</p>
      <Button
        variant='btn-primary-disabled'
        size='btn-small'
        type='button'
        text='Button CTA'
        onClick={() => {
          console.log("btn clicked");
        }}
      />
      <p>Secondary</p>
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
      <p>Secondary disabled</p>
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
      <p>Tertiary </p>
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
      <p>Tertiary disabled</p>
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
      <p>Destructive </p>

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
      <p>Destructive disabled</p>

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

      <p>Button Social</p>
      <Button_Social
        text='Sign in with Email'
        icon=''
        alt=''
        onClick={() => {
          console.log("sign in with email pressed");
        }}
      />
      <Button_Social
        text='Sign in with Google'
        icon='google'
        alt='google logo'
        onClick={() => {
          console.log("sign in with google pressed");
        }}
      />
    </div>
  );
}

export default App;
