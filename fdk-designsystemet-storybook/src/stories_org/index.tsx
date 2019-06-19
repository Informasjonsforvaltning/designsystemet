import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "../components/Button";

function handleInput(e: any) {
  console.log("clicked");
}

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={e => handleInput(e)} >Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button>😀 😎 👍 💯</Button>
  ));