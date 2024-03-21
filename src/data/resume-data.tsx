export const RESUME_DATA = {
  name: '肖学海',
  location: '武汉',
  workYear: '4年',
  position: '前端开发',
  summary:
    '有高度的积极性，热爱开发，有良好的学习习惯，喜欢探索和尝试各种新奇事物；对于我来说，编码不仅仅是一项工作，更是一种乐趣和探索的过程。',
  avatarUrl: '/avatar.png',
  contact: {
    email: '1379228273@qq.com',
    tel: '17671114894',
  },
  education: [
    {
      school: '武汉工程大学',
      tips: '成人本科(在读)',
      degree: '计算机科学与技术',
      start: '2023',
      end: '2025',
    },
    {
      school: '武汉城市职业学院',
      tips: '统招大专',
      degree: '计算机应用',
      start: '2018',
      end: '2021',
    },
  ],
  work: [
    {
      company: '武汉华隆物联科技有限公司',
      link: '#',
      title: '前端工程师',
      start: '2021.03',
      end: '至今',
      descriptions: [
        '负责搭建前端工程，开发公司saas系统，将公司部分桌面应用重写为web应用',
        '根据项目情况对常见的表格、表单、弹窗等公共业务组件及hooks进行封装',
        '对部分代码仓库改造为monorepo架构，将公共业务及组件抽离为可复用的独立子包',
        '为所有前端项目增加eslint、prettier、stylelint、husky等工程化配置，统一规范',
        '技术栈：react、typescript、tailwindcss、vue、uniapp、微信小程序',
        // '将公司所有vue2项目升级至vue2.7版本，使其兼容vue2的同时可以使用vue3的新特性',
      ],
    },
    {
      company: '武汉码上客信息科技有限公司',
      link: '#',
      title: '前端工程师',
      start: '2020.06',
      end: '2021.03',
      descriptions: [
        '负责公司博物馆蓝牙智能导览小程序项目的开发，使用uniapp开发微信小程序，使用vue开发管理后台及h5',
        '技术栈：vue，uniapp、微信小程序',
      ],
    },
  ],
  skills: [
    '熟悉html5、css3、javascript、typescript、es6等前端基础知识，有良好的审美，能够对界面布局及交互提出合理的建议',
    '熟悉react相关生态，如ant-design、react-router、zustand、redux、framer-motion，熟练使用typescript，能够独立搭建工程化项目，有独立开发的能力、良好的的开发习惯及代码规范，能够对组件进行合理的拆分',
    '熟悉next.js服务端框架，能够合理使用客户端组件及服务端组件',
    '熟悉taro.js、uniapp等跨端框架的使用，能够快速开发小程序',
    '熟悉vue相关生态，如vue2、vue3、vue-router、vuex、pinia、vueuse、element-ui、naive-ui、vue-cli，有过将vue2项目升级为vue2.7的经验，升级完成后在适配原有功能的同时可以使用vue3的新特性',
    '理解vue原理，能够独立解决开发过程中遇到的问题，有过vue项目的优化经验',
    '熟悉tailwindcss，能够熟练开发响应式布局，高效的还原设计稿',
    '熟悉webpack、vite前端构建工具的配置及使用，有过vite插件开发的经验',
    '熟悉eslint、prettier、stylelint、husky、commitlint的配置及使用',
    '熟悉移动端h5开发及微信相关生态，如微信小程序、微信h5开发，熟悉rem、vw等布局方式',
    '对node.js、express.js、nest.js、typeorm、mysql、redis、nginx、docker、drone-ci有一定的使用经验，能够和后端开发人员很好的沟通',
    '对react-native、expo有一定的使用使用经验，能够搭建react-native的开发环境',
    '对鸿蒙移动开发、arkTS有一定了解',
  ],
  projects: [
    {
      title: '华隆社区平台',
      descriptions: [
        '该项目使用react、zustand、typescript、ant-design、tailwindcss开发，是公司内部使用的系统，该系统分为代理商端和管理员端，管理员端主要对客户、代理商进行管理，内置了公司内部的知识库及工单系统',
        '项目基础结构搭建、动态路由封装、eslint、prettier、stylelint、husky、commitlint等工程化配置',
        '对ant-design的pro-components组件进行二次封装，将一些公共业务逻辑使用hooks进行封装',
        '使用echarts开发代理商端的可视化数据大屏',
      ],
    },
    {
      title: '华隆在线文档',
      descriptions: [
        '该项目使用react、zustand、typescript、ant-design、tailwindcss、nest.js、typeorm、mysql、redis开发，该项目是公司内部使用的系统，主要为公司桌面ERP、前台POS、Android应用等软件的更新进行记录以及软件包的上传，为实施人员提供了方便',
        '项目采用monorepo的方式进行管理，将公共方法、公共配置、公共类型抽离为独立的子包',
        '使用node.js+nest.js搭建服务端工程，将mysql、redis连接，文件上传等逻辑封装为独立模块',
      ],
    },
    {
      title: '华隆BS供应链',
      descriptions: [
        '该项目使用vue3、typescript、ant-design、tailwindcss开发，该项目是将公司原有的桌面应用重写为web应用，包含供应商端和商户端，为商户提供管理供应商及绑定下限供应商的功能，为供应商提供单据、财务、商品、报表等相关业务的功能',
        '项目使用vue3+typescript搭建，搭建基础的工程化配置，对常见图表、表格、表单、权限等业务使用hooks进行封装',
        '编写vite插件，在项目打包之后根据环境变量的内容动态生成一个配置文件，并结合vite-html-plugin插件将配置文件注入到html模板文件中，方便在项目打包结束后可以动态的修改配置',
      ],
    },
    {
      title: '社区团购saas系统',
      descriptions: [
        '该项目使用vue2、vuex、element-ui、uniapp开发，是一个社区团购saas平台，主要包含web商户端、小程序客户端、小程序商户端，为线下超市提供线上销售的能力',
        'web端的搭建，动态路由封装、eslint、prettier、stylelint、husky、commitlint等工程化配置',
        '根据项目的要求，提前规划好基本架构以及复用性高、灵活度高的业务组件和公共组件，将表格、表单等常见业务封装为重型组件',
        'vue2升级为vue2.7，处理npm依赖问题，使其可以使用vue3的新特性',
        '大量数据场景使用虚拟列表进行优化，解决部分页面卡顿问题',
        '搭建小程序首页自定义管理平台，让用户使用拖拉拽的方式对小程序首页布局样式及全局主题色进行自定义',
        '使用微信提供的ci工具，编写node.js脚本，一键上传小程序',
      ],
    },
    {
      title: '个人网站',
      descriptions: [
        '该项目使用next.js、react、typescript、tailwindcss、shadcn-ui、framer-motion、mdx开发',
        '搭建基础的工程化配置，使用mdx-bundler处理mdx文件，framer-motion实现动画效果，使用tailwindcss完成响应式布局，适配移动端、PC端等多种分辨率',
        '使用next.js服务器端渲染，提高渲染速度及SEO',
        '项目在线地址：https://www.xiaoxuehai.site',
      ],
    },
  ],
} as const;
