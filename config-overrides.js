const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    overrideDevServer,
    adjustWorkbox,
} = require("customize-cra");

const devServerconfig = () => config => {
    return {
        ...config,
        proxy: {
            "/cloud/api/": {
                pathRewrite: {
                    '^/cloud/api/': '/'
                },
                //target: "http://182.193.17.205:5013/",
                target: "http://localhost:5011/",
                changeOrigin: true,
            }
        }
    }
}

module.exports = {
    webpack: override(
        // enable legacy decorators babel plugin
        addDecoratorsLegacy(),

        // disable eslint in webpack
        disableEsLint(),

        // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
        process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

        // adjust the underlying workbox
        adjustWorkbox(wb =>
            Object.assign(wb, {
                skipWaiting: true,
                exclude: (wb.exclude || []).concat("index.html")
            })
        )
    ),
    devServer: overrideDevServer(
        devServerconfig()
    )
};