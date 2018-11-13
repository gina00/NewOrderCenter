## 项目说明
##### 使用人员：
IBOP系统的开发主要是供中国移动客服人员使用。
##### 功能模块
基于原有IBOP系统的订单中心重新划分功能模块
##### 现有需求 
采用有别于旧版的全新视觉效果，使用新的前端技术（原有系统使用DIV+CSS、JQuery、cvs管理项目代码）。
此订单中心旨在引进新技术和新视觉来引起客户变革，从而慢慢推进整套系统的整改需求。

## 前端技术
1. vue
2. element
3. Webpack
4. Express

## 开发工具
VScode，Git

## 界面测试
IE9及以上、Chrome浏览器

## 开发环境依赖
node v0.10.28+

## 部署步骤
1.  `npm install` 安装项目依赖包
2.  `npm run dev` 运行项目，端口8850

## 项目前端效果：

##### 订单概览:
![image](https://github.com/gina00/NewOrderCenter/blob/master/static/img/dashboard.png)

###### 统一订单管理
![image](https://github.com/gina00/NewOrderCenter/blob/master/static/img/2-1-1.png)

###### 流程图
![image](https://github.com/gina00/NewOrderCenter/blob/master/static/img/2-1-2.png)

###### 订单详情
![image](https://github.com/gina00/NewOrderCenter/blob/master/static/img/2-2.png)

###### 产品受理
![image](https://github.com/gina00/NewOrderCenter/blob/master/static/img/3-1.png)



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
