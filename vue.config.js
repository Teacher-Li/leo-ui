const path = require('path');
const chalk = require('chalk');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const DIST_DIR = 'dist';
const OUTPUT_DIR = `${DIST_DIR}/`;

const productionPrerender = false;

module.exports = {
  productionSourceMap: false,

  publicPath: productionPrerender ? `/` : './',
  outputDir: OUTPUT_DIR,
  assetsDir: 'static',

  configureWebpack: config => {
    const configure = {};

    if (process.env.NODE_ENV === 'production') {
      configure.plugins = [];
      productionPrerender && configure.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.resolve(__dirname, DIST_DIR),
          outputDir: path.resolve(__dirname, OUTPUT_DIR),
          indexPath: path.resolve(__dirname, OUTPUT_DIR + 'index.html'),
          routes: [
            '/button',
            '/input',
            '/select',
            '/upload',
            '/edit',
            '/form',
            '/table',
            '/page',
            '/load',
            '/carousels',
            '/masonry',
            '/heart',
            '/tooltip',
            '/drag-select'
          ],
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          },
          postProcess (renderedRoute) {
            renderedRoute.html = renderedRoute.html.replace(
                /<script[^<]*chunk-[a-z0-9]{8}\.[a-z0-9]{8}.js[^<]*><\/script>/g,
                target => {
                  console.log(chalk.bgRed('\n\n剔除的懒加载标签:'), chalk.magenta(target))
                  return ''
                }
            )
            return renderedRoute;
          }
        })
      )
    }

    return configure;
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },

  devServer: {
    host: 'localhost',
    port: 1024,
    https: false,
    open: false,
    hotOnly: false,
    proxy: null,
    before: app => {
    }
  }
};