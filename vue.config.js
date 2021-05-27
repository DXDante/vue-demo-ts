const path = require('path');
const PROCESS_ENV = process.env;
// const outputDir = `dist/${PROCESS_ENV.VUE_APP_ENV_MODE === 'production' ? 'point-livemanagement' : 'point-livemanagement-dev'}`;


module.exports = {
    publicPath: './',
    // outputDir,
    productionSourceMap: false,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.ts',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'DEMO-TS',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    // chainWebpack: config => {
    // },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
            alias: {
                // 系统配置级
                'assets': path.resolve(__dirname, './src/assets/'),
                'common': path.resolve(__dirname, './src/common/'),
                'config': path.resolve(__dirname, './src/config/'),
                'store': path.resolve(__dirname, './src/store'),
                'components': path.resolve(__dirname, './src/components/'),
                'services': path.resolve(__dirname, './src/services/'),
                'filters': path.resolve(__dirname, './src/filters/'),
                'hooks': path.resolve(__dirname, './src/hooks/'),
                'mixins': path.resolve(__dirname, './src/mixins/'),
                'librarys': path.resolve(__dirname, './src/librarys/'),
                'plugins': path.resolve(__dirname, './src/plugins/'),
                'utils': path.resolve(__dirname, './src/utils/'),
                'app': path.resolve(__dirname, './src/main.ts'),
                // 业务模块级
                'views': path.resolve(__dirname, './src/views/'),
                'api': path.resolve(__dirname, './src/api/'),
                // 静态目录
                // 'static': path.resolve(__dirname, './static/'),
            }
        },
        // externals: {
        //     JMessage: 'JMessage'
        // }
    },
    // devServer: {
    //     https: true
    // }
}