const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');
// const iPhone8Plus = devices['iPhone 8 Plus'];

const {
  addPlayerInput,
  addBtn,
  totalPlayers,
  scoreboardTitle,
} = require('./selectors/selectors');

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
    const title = await this.page.$eval(scoreboardTitle, el => el.innerHTML);
    return title;
  },

  async getTotalPlayers() {
    await this.page.waitForSelector(totalPlayers);
    const players = await this.page.$eval(totalPlayers, el => el.innerHTML);

    return players;
  },

  async addNewPlayer(player = 'Test Player') {
    await this.page.waitForSelector(addPlayerInput);
    await this.page.click(addPlayerInput);

    await this.page.type(addPlayerInput, player);

    await this.page.waitForSelector(addBtn);
    await this.page.click(addBtn);
  },
};

module.exports = scoreboard;
