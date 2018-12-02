const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('src/integration/features/scoreboard.feature');
const scoreboard = require('../pageObjects/scoreboard');

beforeEach(async () => await scoreboard.loadApp(false, 100));
afterEach(async () => await scoreboard.closeBrowser());

defineFeature(feature, test => {
  test('The banner is "Scoreboard"', async ({ given, then }) => {
    let title;

    given('The scoreboard is loaded', async () => {
      title = await scoreboard.getScoreboardTitle();
    });
    then('The banner text is "Scoreboard"', () => {
      expect(title).toEqual('Scoreboard');
    });
  });

  test('A newly added player increases total players', async ({
    given,
    when,
    then,
  }) => {
    let totalPlayers;
    given(
      'A new player is added to the board with 3 current players',
      async () => {
        await scoreboard.addNewPlayer('player four');
      },
    );
    when('the "Players" total is viewed', async () => {
      totalPlayers = await scoreboard.getTotalPlayers();
    });
    then('"Players" has increased to 4', () => {
      expect(totalPlayers).toEqual('4');
    });
  });

  test('Clicking + button adds 1 to player points', async ({
    given,
    when,
    then,
  }) => {
    given('a player with 31 points', async () => {
      const score = await scoreboard.getPlayer1Score();
      expect(score).toEqual('31');
    });
    when('the + button is clicked', async () => {
      await scoreboard.add2Player1Score();
    });
    then('the total points is increased to 32', async () => {
      const newScore = await scoreboard.getPlayer1Score();
      expect(newScore).toEqual('32');
    });
  });

  test('Clicking the + button increases total points by 1', async ({
    given,
    when,
    then,
  }) => {
    given('a scoreboard with 108 points', async () => {
      const points = await scoreboard.getTotalPoints();
      expect(points).toEqual('108');
    });
    when('a player + button is clicked', async () => {
      await scoreboard.add2Player1Score();
    });
    then('the total points is increased to 109', async () => {
      const points = await scoreboard.getTotalPoints();
      expect(points).toEqual('109');
    });
  });
});
