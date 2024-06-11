const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("code/css");
    eleventyConfig.addPassthroughCopy("code/js");
    eleventyConfig.addPassthroughCopy("code/img");
    eleventyConfig.addPassthroughCopy("code/PDF");

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addCollection("noticias", function(collectionApi) {
        return collectionApi.getFilteredByTag("noticias")
            .sort((a, b) => b.date - a.date) // Ordenar por fecha en orden descendente directamente
            .slice(0, 5); // Limitar a las 5 publicaciones más recientes
    });

    eleventyConfig.addCollection("eventos", function(collectionApi) {
        return collectionApi.getFilteredByTag("eventos")
            .sort((a, b) => b.date - a.date) // Ordenar por fecha en orden descendente directamente
    });


    return{
        dir:{
            input:"code",
            output:"docs"
        }
    };
};