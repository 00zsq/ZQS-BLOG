import { defineConfig } from 'vitepress'
import path from 'path' // 引入 path 模块

export default defineConfig({
  title: "ZQS-BLOG",
  description: "a vue2 and vue3 ui",
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png'}]
  ],
  themeConfig: {
    logo: '/images/logo.png', 
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/my-blog/aboutMe' },
      {
        text: '面经总结',
        items: [
          { text: 'HTML/CSS', link: '/my-blog/HTML-CSS/selector' },
          { text: 'JS', link: '/my-blog/JS/closure' },
          { text: 'Vue', link: '/my-blog/Vue/v-DOM' },
          { text: '计网', link: '/my-blog/computer-network/https' },
          { text: '浏览器', link: '/my-blog/browser/URL' },
          { text: '可恶的手撕', link: '/my-blog/hand-tearing/flat' },
          { text: '打包工具', link: '/my-blog/vite-webpack/HMR' },
        ]
      },
      {
        text: '组件库',
        items: [
          {
            text: '指南',
            items: [
              { text: 'ZQS-UI2 指南', link: '/zqs-ui/guide/zqs-ui2/install' },
              { text: 'ZQS-UI3 指南', link: '/zqs-ui/guide/zqs-ui3/install' }
            ]
          },
          {
            text: '组件',
            items: [
              { text: 'ZQS-UI2 组件', link: '/zqs-ui/components/zqs-ui2/zqs-button' },
              { text: 'ZQS-UI3 组件', link: '/zqs-ui/components/zqs-ui3/zqs-button' }
            ]
          }
        ]
      },
      {
        text: '插件',
        items: [
          {
            items: [
              { text: 'console插件', link: '/plug/zqs-console' },
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/zqs-ui/guide/zqs-ui2/': [
        {
          text: 'ZQS-UI2 指南',
          items: [
            { text: '安装', link: '/zqs-ui/guide/zqs-ui2/install' },
            { text: '快速开始', link: '/zqs-ui/guide/zqs-ui2/use' }
          ]
        }
      ],
      '/zqs-ui/guide/zqs-ui3/': [
        {
          text: 'ZQS-UI3 指南',
          items: [
            { text: '安装', link: '/zqs-ui/guide/zqs-ui3/install' },
            { text: '快速开始', link: '/zqs-ui/guide/zqs-ui3/use' }
          ]
        }
      ],
      '/zqs-ui/components/zqs-ui2/': [
        {
          text: '基础组件',
          items: [
            { text: 'zqs-button', link: '/zqs-ui/components/zqs-ui2/zqs-button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'zqs-checkbox', link: '/zqs-ui/components/zqs-ui2/zqs-checkbox' },
            { text: 'zqs-input', link: '/zqs-ui/components/zqs-ui2/zqs-input' },
            { text: 'zqs-select', link: '/zqs-ui/components/zqs-ui2/zqs-select' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'zqs-table', link: '/zqs-ui/components/zqs-ui2/zqs-table' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'zqs-backTop', link: '/zqs-ui/components/zqs-ui2/zqs-backTop' },
            { text: 'zqs-header', link: '/zqs-ui/components/zqs-ui2/zqs-header' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'zqs-alert', link: '/zqs-ui/components/zqs-ui2/zqs-alert' }
          ]
        }
      ],
      '/zqs-ui/components/zqs-ui3/': [
        {
          text: '基础组件',
          items: [
            { text: 'zqs-button', link: '/zqs-ui/components/zqs-ui3/zqs-button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'zqs-checkbox', link: '/zqs-ui/components/zqs-ui3/zqs-checkbox' },
            { text: 'zqs-input', link: '/zqs-ui/components/zqs-ui3/zqs-input' },
            { text: 'zqs-select', link: '/zqs-ui/components/zqs-ui3/zqs-select' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'zqs-table', link: '/zqs-ui/components/zqs-ui3/zqs-table' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'zqs-backTop', link: '/zqs-ui/components/zqs-ui3/zqs-backTop' },
            { text: 'zqs-header', link: '/zqs-ui/components/zqs-ui3/zqs-header' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'zqs-alert', link: '/zqs-ui/components/zqs-ui3/zqs-alert' }
          ]
        }
      ],
      '/plug/': [
        {
          text: '插件',
          items: [
            { text: 'console插件', link: '/plug/zqs-console' }
          ]
        }
      ],
      '/my-blog/HTML-CSS': [
        {
          text: 'HTML/CSS',
          items: [
            { text: '选择器权重', link: '/my-blog/HTML-CSS/selector' },
            { text: '盒模型', link: '/my-blog/HTML-CSS/box' },
            { text: '垂直水平居中', link: '/my-blog/HTML-CSS/vertical-horizontal-center' },
          ]
        }
      ],
      '/my-blog/JS': [
        {
          text: 'JavaScript',
          items: [
            { text: '闭包', link: '/my-blog/JS/closure' },
            { text: 'add(1)(2)(3)', link: '/my-blog/JS/add' },
            { text: 'Promise', link: '/my-blog/JS/promise' },
            { text: '变量提升', link: '/my-blog/JS/var-lifting' },
          ]
        }
      ],
      '/my-blog/Vue': [
        {
          text: 'Vue',
          items: [
            { text: 'v-DOM', link: '/my-blog/Vue/v-DOM' },
            { text: '路由的hash和history', link: '/my-blog/Vue/router-hash-his' },
            { text: '父子组件的渲染流程', link: '/my-blog/Vue/f-s-com' },
          ]
        }
      ],
      '/my-blog/computer-network': [
        {
          text: '计算机网络',
          items: [
            { text: 'HTTPS', link: '/my-blog/computer-network/https' },
            { text: 'TCP/UDP', link: '/my-blog/computer-network/TCP-UDP' },
            { text: 'SEE/WebSocket', link: '/my-blog/computer-network/SSE-websocket' },
          ]
        }
      ],
      '/my-blog/browser': [
        {
          text: '浏览器原理',
          items: [
            { text: '输入URL到页面渲染', link: '/my-blog/browser/URL' },
            { text: '事件循环', link: '/my-blog/browser/evenlop' },
            { text: '浏览器缓存', link: '/my-blog/browser/cache' },
            { text: '跨tab通信', link: '/my-blog/browser/tab-communication' },
            { text: '浏览器垃圾回收机制', link: '/my-blog/browser/trash-recycling' },
          ]
        }
      ],
      '/my-blog/hand-tearing': [
        {
          text: '手撕',
          items: [
            { text: '扁平化', link: '/my-blog/hand-tearing/flat' },
            { text: 'call(),apply(),bind()', link: '/my-blog/hand-tearing/call-apply-bind' }, 
          ]
        } 
      ],
      '/my-blog/vite-webpack': [
        {
          text: '打包工具',
          items: [
            { text: 'HMR', link: '/my-blog/vite-webpack/XMR' },
          ]
        }
      ],
    },

        
    socialLinks: [
      { icon: 'github', link: 'https://github.com/00zsq' }
    ]
  },
})
