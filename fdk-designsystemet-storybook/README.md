# Run (port 9001)
npm run storybook

# webpack

## .storybook files separat folder
    "storybook": "start-storybook -p 9009 -s public",
    "build-storybook": "build-storybook -s public"

## .storybook files in component folder
    "storybook": "start-storybook -p 9009 -c .storybook",
    "build-storybook": "build-storybook -s public"


# Types
npm i @types/storybook__addon-actions
npm i --save @storybook/addon-actions

## Upgrade Storybook
npx npm-check-updates '/storybook/' -u && npm install