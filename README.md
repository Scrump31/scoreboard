# Overview

"The Scoreboard" is a React with Redux application that allows users to add and delete players as they please. In addition to adding/removing players, the total score of all players combined is dynamically added together based on updated scores. Finally, the application has a 1 minute countdown timer that can be used to keep track of player rounds.

Note: Redux was not necessary to build this application. I simply wanted to learn more about Redux is commonly used in a React application.

<img  src="/scoreboard_screenshot.png"  alt="Scoreboard Screenshot"  height="353" width="1020"/>

# Technologies Used

The Scoreboard application utilizies the following packages:

- [Create React App](https://github.com/facebookincubator/create-react-app).

- [Redux](http://redux.js.org/)

- [React-Bootstrap](https://react-bootstrap.github.io/)

- [Lodash](https://lodash.com/)

- [Timrjs](https://github.com/joesmith100/timrjs)

# Install & Run The Project

To run the app, simply use the following commands:

`git clone https://github.com/Scrump31/scoreboard.git`

`cd scoreboard`

`npm install` or `yarn install`

`npm start` or `yarn start`

Then, open [http://localhost:3000/](http://localhost:3000/) to view the application

# Testing

`npm test` or `yarn test`

The application is tested using [Jest](https://jestjs.io/en/) and [Enzyme](http://airbnb.io/enzyme/). Jest is already included with create-react-app, so Enzyme was installed as an additional package. Components are tested with the `shallow()` and `mount()` methods from Enzyme. Jest [Snapshots](https://jestjs.io/docs/en/snapshot-testing) are also used to test components.
