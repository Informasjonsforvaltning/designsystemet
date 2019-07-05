import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ButtonAdd } from "./ButtonAdd";
import { action } from '@storybook/addon-actions';

function handleInput(e: any) {
  console.log("button.stories.tsx");
}

storiesOf("ButtonAdd", module)
  .add("with text", () => (
    <ButtonAdd onClick={action('clicked')}>FDK ButtonAdd</ButtonAdd>
  ));
