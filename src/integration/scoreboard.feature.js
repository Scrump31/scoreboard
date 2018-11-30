const scoreboard = require('./scoreboard');

beforeEach(async () => await scoreboard.loadApp(false, 100));
afterEach(async () => await scoreboard.closeBrowser());

test('Verify title is "Scoreboard"', async () => {
  const title = await scoreboard.getScoreboardTitle();
  expect(title).toEqual('Scoreboard');
});

test('Verify a new player can be added', async () => {
  await scoreboard.addNewPlayer('player four');
  const totalPlayers = await scoreboard.getTotalPlayers();
  expect(totalPlayers).toEqual('4');
});
