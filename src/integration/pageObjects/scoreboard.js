const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');
// const iPhone8Plus = devices['iPhone 8 Plus'];

const selectors = require('../selectors/selectors');

const scoreboard = {
  browser: {},
  page: {},

  async loadApp(headless, slowMo = 0) {
    this.browser = await puppeteer.launch({ headless, slowMo });
    this.page = await this.browser.newPage();
    await this.page.goto('http://localhost:3000/');
  },

  async closeBrowser() {
    await this.browser.close();
  },

  async getTotalPlayers() {
    await this.page.waitForSelector(selectors.totalPlayers);
    const players = await this.page.$eval(
      selectors.totalPlayers,
      el => el.innerHTML,
    );

    return players;
  },
  async getTotalPoints() {
    await this.page.waitForSelector(selectors.totalPoints);
    const points = await this.page.$eval(
      selectors.totalPoints,
      el => el.innerHTML,
    );

    return points;
  },

  async addNewPlayer(player = 'Test Player') {
    await this.page.waitForSelector(selectors.addPlayerInput);
    await this.page.click(selectors.addPlayerInput);

    await this.page.type(selectors.addPlayerInput, player);

    await this.page.waitForSelector(selectors.addBtn);
    await this.page.click(selectors.addBtn);
  },

  async getPlayer1Score() {
    const score = await this.page.$eval(
      selectors.player1Score,
      el => el.innerHTML,
    );
    return score;
  },

  async add2Player1Score() {
    await this.page.waitForSelector(selectors.player1AddBtn);
    await this.page.click(selectors.player1AddBtn);
  },
  async subtractPlayer1Score() {
    await this.page.waitForSelector(selectors.player1SubstractBtn);
    await this.page.click(selectors.player1SubstractBtn);
  },

  // async startTimer() {},
  // async pauseTimer() {},
  // async stopTimer() {},
  // async getTime() {},
};

module.exports = scoreboard;

// await this.page.screenshot({
//   path: './src/integration/test-screenshot.png',
// });
