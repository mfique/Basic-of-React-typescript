const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry:path.resolve(_dirname, 'src','index.tsx'),
    output: {
        path:path.resolve(_dirname, 'src'),
        publicPath:'http://localhost:8080/src',
        filename:'bundle.js'
    },
    modules: {
        rules:[
            {
                test:/\.tsx?$/,
                exclude:/node_module/,
                laoder: 'ts-laoder'
            },
            {
                test:/\.(jpg|jpeg|gif|eot|otf|webp|mp4|webm|wav|mp3|m4a|aac|oga|ico|svg|woff|woff2|png|ttf)$/,
                use:[{
                    laoder:'file-location'
                }]
            }
        ]
    },
    plugin:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}