module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addWatchTarget("./src/assets/");

    // Date formating
    const { DateTime } = require("luxon");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    
    eleventyConfig.addFilter("currentYear", () => {
        return DateTime.local().year;
    });
    // end date formatting
    

    return {
        dir: {
            input: "src",
            output: "public",
        },
        // Make sure the following actually work.
        templateFormats: ["html", "njk", "md"],
        passthroughFileCopy: true,
    };
};

