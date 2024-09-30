const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './public/static/**/*.css',
    });

    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy("src/**/*.js");

    eleventyConfig.addPlugin(eleventyAutoCacheBuster);

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};