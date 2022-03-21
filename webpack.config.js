const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack
    webpack.mergeWebpack({ resolve: {
            fallback:{
                    "@triniwiz/nativescript-toasty": require.resolve("nativescript-toasty/toasty.android.js"),
                    "@naderio/nativescript-socket.io": require.resolve("nativescript-socket.io/socketio.android.js"),
                    "@triniwiz/nativescript-socketio": require.resolve("nativescript-socketio"),
                    "utils/utils": require.resolve("@nativescript/core/utils/index.android.js"),
                    "tns-core-modules/application/application": require.resolve("@nativescript/core/application/index.android.js")
            }    
        }
    }),

webpack.chainWebpack(config => {
  config.resolve.alias.set('tns-core-modules', '@nativescript/core')
})
	return webpack.resolveConfig();
};


