module.exports = {
    configureWebpack: {
        devServer:{
            proxy: {
                '/query': {target: 'http://pzque.com:20007'}
            }
        }
    }
}
