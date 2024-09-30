const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './public/static/**/*.css',
    });

    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy("src/**/*.js");

    eleventyConfig.addPlugin(eleventyAutoCacheBuster);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
        pathPrefix: "/11ty-test/",
    };
};