const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    
    // entry: './src/index.js', // default, relative to project root
    output: {
        // filename: './app.bundle.js' // default, relative to dist/
    },
    plugins: [
        new HtmlPlugin({
	    template: './src/index.html' // no default value, relative to project root
            // filename: './index.html' // default, relative to dist/
        }),
	new CopyPlugin({
	    patterns: [
		{ context: './src/', from: '*.jpg' },
		{ context: './src/', from: '*.png' }
	    ]
	})
   ]

}
