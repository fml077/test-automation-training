module.exports = {
  // 构建生成的文件路径，相对于根目录而言
  dest: './docs-dist',

  // 设置站点根路径，否则静态资源路径会有问题
  base: '/test-automation-training/',

  // 添加 github 链接，用于 gh-pages -d dist 命令
  repo: 'https://github.com/matmanjs/test-automation-training',

  title: 'matman.js',
  description: 'web 端对端测试解决方案',
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  themeConfig: {
    locales: {
      '/': {
        navs: [
          { text: 'web端对端测试方案', link: '/docs/' },
          { text: 'API手册', link: '/api/' },
          { text: '工具', link: '/tool/' },
          { text: '发布日志', link: '/release/' },
          { text: 'Issues', link: 'https://github.com/matmanjs/matman/issues' },
        ],
        sidebar: {
          '/docs/': [
            {
              title: '关于 matman',
              path: '/docs/',
              collapsable: false,
            },
            {
              title: '安装和升级',
              path: '/docs/install',
              collapsable: false,
            },
            {
              title: '快速开始',
              path: '/docs/getting-started/',
              collapsable: false,
            },
            {
              title: '使用指南',
              collapsable: false,
              children: [
                'develop/baidu_01',
                'develop/baidu_02',
                'develop/test-automation-training',
              ],
            },
            {
              title: '综合案例详解',
              collapsable: false,
              children: [
                'improve/summary',
                'improve/simple',
                'improve/transaction',
                'improve/withdraw',
                'improve/jsBridge',
              ],
            },
            {
              title: '基本理论',
              collapsable: false,
              children: [
                'basic-concepts/page-snapshot',
                'basic-concepts/data-snapshot',
                'basic-concepts/test-by-mock',
              ],
            },
            {
              title: 'FAQ',
              collapsable: false,
              children: ['faq/common'],
            },
          ],
          '/api/': [
            {
              title: 'API说明',
              path: '/api/',
            },
            {
              title: 'matman.config.js 配置',
              path: '/api/matman-config',
            },
            {
              title: 'matman API',
              path: '/api/matman',
            },
            {
              title: 'PageDriver 对象',
              path: '/api/pageDriver',
            },
            {
              title: 'MatmanResult 对象',
              path: '/api/matman-result.md',
            },
            {
              title: '爬虫工具：web-crawl-util',
              path: '/api/web-crawl-util',
            },
            {
              title: 'matman-cli',
              path: '/api/matman-cli',
            },
          ],
          '/tool/': [
            {
              title: '工具首页',
              path: '/tool/',
            },
            {
              title: '开发者工具',
              collapsable: false,
              children: [
                {
                  title: '脚手架：create-matman-app',
                  path: '/tool/create-matman-app',
                },
                {
                  title: 'Chrome 插件：Matman',
                  path: 'matman-chrome-devtools-extensions',
                },
                {
                  title: 'VSCode 插件：Matman',
                  path: 'matman-vscode-plugin',
                },
              ],
            },
            {
              title: 'Mock Server',
              collapsable: false,
              children: [
                {
                  title: 'MockStar',
                  path: '/tool/mockstar',
                },
                {
                  title: 'Chrome 插件：MockStar',
                  path: 'mockstar-chrome-devtools-extensions',
                },
              ],
            },
            {
              title: '代理工具',
              collapsable: false,
              children: [
                {
                  title: 'Whistle',
                  path: '/tool/whistle',
                },
                {
                  title: 'Chrome 插件：Proxy SwitchyOmega',
                  path: 'proxy-switchyomega',
                },
              ],
            },
          ],
          '/release/': true,
        },
      },
    },
  },
};
