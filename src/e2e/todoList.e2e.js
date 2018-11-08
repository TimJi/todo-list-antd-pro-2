import puppeteer from 'puppeteer';

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

describe('TodoMVC 情境', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(1000000);
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto(`${BASE_URL}/demo/todo-list`, { waitUntil: 'networkidle2' });
    await page.evaluate(() => window.localStorage.setItem('antd-pro-authority', 'guest'));
  });

  afterEach(() => page.close());

  it('應顯示程式標題與輸入欄位', async () => {
    const text = await page.evaluate(() => document.body.innerHTML);
    expect(text).toContain('<h1>todo</h1>');
  });

  afterAll(() => browser.close());
});
