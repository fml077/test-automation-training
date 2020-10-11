const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = await matman.launch(new BrowserRunner(), pageDriverOpts,{
    crawlerInjectJQuery: true
  });

  // 设置浏览器打开时所模拟的设备参数
  await pageDriver.setDeviceConfig({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
    viewport: {
      width: 1024,
      height: 520
    }
  });

  // 设置截屏
  await pageDriver.setScreenshotConfig(true);

  // 设置页面地址
  await pageDriver.setPageUrl('https://www.sogou.com');

  // 第一步：开始操作之前，等待页面加载完成
  await pageDriver.addAction('init', async page => {
    await page.waitFor('#stb');
  });

  // 第二步：搜索输入框输入: matman
  await pageDriver.addAction('input_key_word', async page => {
    await page.type('#query', 'matman');
  });

  // 第三步：点击搜索按钮，获得搜索结果
  await pageDriver.addAction('click_to_search', async page => {
    await page.click('#stb');
    await page.waitFor('#main');
  });

  // 计算并返回结果
  return pageDriver.evaluate(() => {
    return {
      title: document.title,
      width: window.innerWidth,
      height: window.innerHeight,
      userAgent: navigator.userAgent,
      searchBtnTxt: $('#stb').val(),
      searchKeyWorld: $('#query').val(),
      // searchResultInfo: (() => {
      //   const result = [];
      //   const doms = document.querySelectorAll('#content_left .c-container .t');
      //   if (doms) {
      //     doms.forEach(curDom => {
      //       result.push(curDom.innerText);
      //     });
      //   }
      //   return result;
      // })()
    };
  });
};

module
  .exports({ show: true, doNotCloseBrowser: true, useRecorder: false })
  .then(function (result) {
    console.log(JSON.stringify(result));
  })
  .catch(function (error) {
    console.error('failed:', error);
  });
