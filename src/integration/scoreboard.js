const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');
// const iPhone8Plus = devices['iPhone 8 Plus'];

const selectors = require('./selectors/selectors');

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

  async getScoreboardTitle() {
    const title = await this.page.$eval(
      selectors.scoreboardTitle,
      el => el.innerHTML,
    );
    return title;
  },

  async getTotalPlayers() {
    await this.page.waitForSelector(selectors.totalPlayers);
    const players = await this.page.$eval(
      selectors.totalPlayers,
      el => el.innerHTML,
    );

    return players;
  },

  async addNewPlayer(player = 'Test Player') {
    await this.page.waitForSelector(selectors.addPlayerInput);
    await this.page.click(selectors.addPlayerInput);

    await this.page.type(selectors.addPlayerInput, player);

    await this.page.waitForSelector(selectors.addBtn);
    await this.page.click(selectors.addBtn);
  },
};

module.exports = scoreboard;
