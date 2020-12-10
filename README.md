# 微信公共平台

## 项目安装
```
npm install
```

### 本地启动服务
```
npm run serve
```

### production编译打包
```
npm run build
```

### 修改配置
在根目录下的vue.config.js下进行配置修改

### css设置
/src/assets/style/ 目录下修改全局的一下css设置   
variables.scss 文件存放的 scss 变量，全局的css属性值，如果需要替换主题色这件修改变量即可  
common.scss  文件设置全局的样式。


### 项目结构
src
├── App.vue
├── assets        ## 静态资源
│   └── logo.png
├── components    ## 公共组件目录
│   └── Hello.vue
├── main.js
├── views         ## 页面目录
├── store         ## vuex store
├── router
│   └── index.js
└── utils         ## 工具
    └── http.js   ## 封装axios
