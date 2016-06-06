var crawl = require('crawl');

crawl.crawl("http://thaimeo.info", function (err, pages) {
    if (err) {
        console.error("An error occured", err);
        return;
    }

    console.log(JSON.stringify(pages));
});