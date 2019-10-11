

const apiConfig=require('./config/api.config');
const { isProdMode, isDevMode } = require('./environment')

module.exports = {
    //判断是否为开发环境
    dev: isDevMode,
    //该配置项用于定义应用客户端和服务端的环境变量。
    env: {
        baseUrl: apiConfig.baseUrl
    },
    /*
     ** 可选值：‘spa’（没有服务端渲染），‘universal’（服务器端呈现+客户端路由导航）同构应用程序
     */
    model: 'universal',
    /*
     *根据服务端需求，自定义webpack构建配置
     */
    build: {
    },
    /**
     * 参考vue-meta
     */
    head: {
        title: 'mynuxt',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0,user-scaleable=no'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'AlanLemon'
            }
        ],
    },
    /**
     * 加载进度条
     * 类型： Boolean 或 Object 或 String
     */
    loading: {
        color: '#fff'
    },
      //与css区别在于，不能实际样式，只能导入变量，minxins，函数等
    styleResources: {
        scss: "~/assets/init.scss"
    },
    /**
     * 全局样式
     */
    css: [
        { src:  "~/assets/app.scss", lang: 'sass' }
    ],
    /**
     * 引入vue.js插件
     */
    plugins: [
        '~/plugins/axios'
    ],
    /**
     * nuxt.js扩展
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        // 'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/font-awesome',
        '@nuxtjs/axios'
    ],
    //路由配置
    router: {
        linkActiveClass: "link-class"
    }

}