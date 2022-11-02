const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://search1.epizy.com/");

  const grabParagraph = await page.evaluate(() => {
    const pgTag = document.querySelector("body");
    return pgTag.innerText;
  });

  console.log(grabParagraph);
  //   await browser.close();
})();
