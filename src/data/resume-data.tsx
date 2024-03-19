export const RESUME_DATA = {
  name: '肖学海',
  location: '武汉',
  workYear: '4年',
  position: '前端开发',
  summary:
    '有高度的积极性，热爱开发，有良好的学习习惯，喜欢探索和尝试各种新奇事物；对于我来说，编码不仅仅是一项工作，更是一种乐趣和探索的过程。',
  avatarUrl: '/avatar.jpg',
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
      end: '2024.03',
      descriptions: [
        '负责搭建前端工程，开发公司saas系统，将公司部分桌面应用重写为web应用',
        '将公司所有vue2项目升级至vue2.7版本，使其兼容vue2的同时可以使用vue3的新特性',
        '对部分代码仓库改造为monorepo架构，将公共业务及组件抽离为可复用的独立子包',
        '为所有前端项目增加eslint、prettier、stylelint、husky等工程化配置，统一规范',
        '技术栈：react、vue3、typescript、tailwindcss、uniapp、微信小程序',
      ],
      // '，并；；技术栈：react、vue3、typescript、tailwindcss、uniapp、微信小程序',
    },
    {
      company: '武汉码上客信息科技有限公司',
      link: '#',
      title: '前端工程师',
      start: '2020.06',
      end: '2021.03',
      descriptions: [
        '负责公司博物馆蓝牙智能导览小程序项目的开发，使用uniapp开发微信小程序，使用vue2开发管理后台及h5',
        '技术栈：vue2，uniapp、微信小程序',
      ],
    },
  ],
  skills: [
    '熟悉html5、css3、javascript、typescript、es6',
    '熟练使用react、next.js、vue2、vue3',
    '熟练使用uniapp、taro',
    '熟悉tailwindcss、element-ui、ant-design、vant',
    '熟悉webpack、vite前端构建工具的配置及使用',
    '熟悉eslint、prettier、stylelint、husky、commitlint，具备良好的代码规范',
    '对node.js、express.js、nest.js、typeorm、mysql、redis有一定的使用经验',
  ],
  // 1.该项目主要为线下超市提供线上购物需求，该项目包括crm端、web管理端、小程序客户端，本人负责该
  // 项目crm端、web端的搭建、开发，项目技术栈为vue2、element-ui。
  // 2.根据项目的要求，提前规划好基本架构以及复用性高、灵活度高的业务组件和公共组件，利用插槽对常用
  // 的表格、表单等组件进行二次封装、使其json化，并配合mixins复用重复的业务逻辑。
  // 3.对前端导出excel、pdf等方法进行封装、可复用的逻辑采用mixins进行分模块封装。
  projects: [
    {
      title: '华隆社区平台',
      descriptions: [
        '该项目使用react、ant-design、tailwindcss开发，是公司内部使用的系统，该系统分为代理商端和管理员端，管理员端主要对客户、代理商进行管理，内置了公司内部的知识库及工单系统',
        '项目基础结构搭建、动态路由封装、eslint、prettier、stylelint、husky、commitlint等工程化配置',
        '对ant-design的pro-components组件进行二次封装',
        '代理商端的可视化大屏',
      ],
    },
    {
      title: '社区团购saas系统',
      descriptions: [
        '该项目使用vue2、element-ui、uniapp开发，是一个社区团购saas平台，为线下超市提供线上销售的能力',
        'web端的搭建，动态路由封装、eslint、prettier、stylelint、husky、commitlint等工程化配置',
        '根据项目的要求，提前规划好基本架构以及复用性高、灵活度高的业务组件和公共组件，将表格、表单等常见业务封装为重型组件',
        'vue2升级为vue2.7，处理npm依赖问题，使其可以使用vue3的新特性',
        '大量数据场景使用虚拟列表进行优化，解决部分页面卡顿问题',
        '搭建小程序首页自定义管理平台，让用户使用拖拉拽的方式对小程序首页布局样式及全局主题色进行自定义',
        '使用微信提供的ci工具，编写node.js脚本，一键上传小程序',
      ],
    },
  ],
} as const;
