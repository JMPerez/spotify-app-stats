const puppeteer = require("puppeteer");
const fetch = require("node-fetch");

class SpotifyAppStats {
  constructor() {
    this.browser = null;
    this.accessToken = null;
  }

  async init() {
    this.browser = await puppeteer.launch();
  }

  async login(username, password) {
    const page = await this.browser.newPage();
    await new Promise(async (resolve, reject) => {
      await page.goto("https://developer.spotify.com/dashboard/applications");
      const [popup] = await Promise.all([
        new Promise((resolve) => page.once("popup", resolve)),
        page.click('button[class="btn btn-sm btn-primary"]'),
      ]);

      await popup.waitFor("#login-username");
      await popup.focus("#login-username");
      await popup.keyboard.type(username);

      await popup.waitFor("#login-password");
      await popup.focus("#login-password");
      await popup.keyboard.type(password);

      await popup.click('button[id="login-button"]');
      popup.on("close", async (popup) => {
        if (
          page.url() === "https://developer.spotify.com/dashboard/tos-accept"
        ) {
          await page.click("input[ng-model=acceptTOS]");
          await page.click("input[type=submit]");
        }
        this.accessToken = await page.evaluate(() => {
          return localStorage.getItem("_sp_self_prov_accessToken");
        });
        if (this.accessToken) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  async getStats(applicationId) {
    return await fetch(`https://api.spotify.com/v1/appstats/${applicationId}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        Authorization: `Bearer ${this.accessToken}`,
      },
      method: "GET",
    }).then((res) => res.json());
  }

  async destroy() {
    await this.browser.close();
  }
}

module.exports = SpotifyAppStats;
