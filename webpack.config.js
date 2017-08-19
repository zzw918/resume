module.exports = {
    entry: ["./index.js"],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    watch: true,
    module: {
    	loaders: [
    	{
    		test: /\.jsx?$/,
    		loader: 'babel-loader',
    		exclude: /node_modules/,
    		query: {
    			presets: ['es2015', 'react']
    		}
    	},
    	{
    		test: /\.css$/,
    		loader: 'style-loader!css-loader'
    	},
        {
            test: /\.less$/,
            use: [{
                 loader: "style-loader" // creates style nodes from JS strings
             }, {
                 loader: "css-loader" // translates CSS into CommonJS
             }, {
                 loader: "less-loader" // compiles Less to CSS
             }]
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: 'url-loader'
        }
    	]
    },
    resolve: {
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: [".js", ".jsx", '.less'],
    },
}