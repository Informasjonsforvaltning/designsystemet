import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./Button";
import { action } from '@storybook/addon-actions';

function handleInput(e: any) {
  console.log("button.stories.tsx");
}

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action('clicked')}>Hello Button (button.stories.tsx)</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={e => handleInput(e)}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
    
  ))
  .add("with text2", () => (
    <Button onClick={action("hello")}>action?</Button>
  ));
