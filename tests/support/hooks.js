const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  await this.openBrowser();
});

After(async function () {
  await this.closeBrowser();
});

After(async function (scenario) {
  if (scenario.result.status === 'failed' && this.page) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
});