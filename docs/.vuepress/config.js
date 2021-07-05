const { path } = require('@vuepress/utils')

module.exports = {
  open: true,
  lang: 'zh-CN',
  base: "/blog-data/",
  title: "Blog",
  description: 'A blog and knowledge management system about data and visualization.',
  head: [
    ['link', { rel: 'icon', href: '/blog-data/images/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.13.5/dist/katex.min.css' }],
  ],
  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      },
    }
  },
  plugins: [
    require('./plugins/addTime.js'),
    [require('./plugins/createHomePage.js'),
    {
      cards: [
        {
          name: "Anaconda",
          image: "anaconda.svg"
        },
        {
          name: "Jupyter",
          image: "jupyter.svg"
        },
        {
          name: "Math",
          image: "math.svg"
        },
        {
          name: "Python",
          image: "python.svg"
        },
        {
          name: "Vis",
          image: "vis.svg"
        },
      ]
    }],
    [require('./plugins/generateListPages.js'),
    {
      postClassifications: ['anaconda', 'jupyter', 'math', 'python', 'vis']
    }],
    [require('./plugins/generateFolderPages.js'),
    {
      postFolders: ['anaconda', 'jupyter', 'math', 'python', 'vis']
    }],
  ],
  theme: path.resolve(__dirname, './theme/index.js'),
  themeConfig: {
    navbar: false,
    sidebar: false,
    contributors: false,
    lastUpdatedText: '更新时间',
    themePlugins: {
      backToTop: false,
      nprogress: false,
    }
  },
  markdown: {
    links: {
      externalIcon: false
    }
  },
  extendsMarkdown: (md) => {
    md.use(require('@neilsustc/markdown-it-katex'), { output: 'html' })
  },
  define: {
    __BASE__: "/blog-data/",
    __HOME_PAGE_TITLE__: "DATA",
    __HOME_PAGE_ICON__: "home_icon.png",
    __HOME_DESCRIPTION__: "这是我的<a href='https://benbinbin.github.io/tech-blog/' target='_blank' class='hover:text-blue-600 underline font-bold transition-colors'>部落格</a>之一，主要内容是我在学习数据分析和可视化相关过程中做的笔记。",
    __HOME_PAGE_COLOR__: '#FAE791',
    __AVATAR__: 'avatar.png',
    __CLASSIFICATIONS__: ['All', 'Anaconda', 'Jupyter', 'Math', 'Python', 'Vis'],
    __FOLDERS__: ['Anaconda', 'Jupyter', 'Math', 'Python', 'Vis'],
    __FOOTER_AVATAR_LINK__: 'https://github.com/Benbinbin/two-dishes-one-fish',
    __AUTHOR__: 'Benbinbin',
    __FOOTER_LICENSE__: 'CC-BY-SA-4.0',
    __FOOTER_LICENSE_LINK__: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
    __SOCIAL_MEDIA__: [
      {
        name: 'email',
        logo: 'email.svg',
        url: 'mailto:benthomsonbin@gmail.com'
      },
      {
        name: 'github',
        logo: 'github.svg',
        url: 'https://github.com/Benbinbin'
      },
      {
        name: 'juejin',
        logo: 'juejin.svg',
        url: 'https://juejin.cn/user/3175045314389278/posts'
      },
      {
        name: 'dribbble',
        logo: 'dribbble.svg',
        url: 'https://dribbble.com/BinBinDesign'
      },
      {
        name: 'twitter',
        logo: 'twitter.svg',
        url: 'https://twitter.com/Benbinbin_fun'
      },
      {
        name: 'weibo',
        logo: 'weibo.svg',
        url: 'https://weibo.com/binbindesign'
      },
    ],
  },
}