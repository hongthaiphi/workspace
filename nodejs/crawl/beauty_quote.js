var request = require('request');
var fs = require('fs');
var _ = require('lodash');
var cheerio = require('cheerio');
var async = require('async');

// đường dẫn để crawl
var url = 'https://www.goodreads.com/quotes/tag/beauty?page=';

// hàm thực hiện truy vấn HTML và bóc tách dữ liệu
function crawl(currentPage, callback) {
  console.log('Going to crawl page: ' + currentPage);
  request(url + currentPage, function (r, e, b) {
    var $ = cheerio.load(b);
    $('script').remove();
    $('.quoteFooter').remove();
    $('.action').remove();
    $('.leftAlignedImage').remove();
    $('.clear').remove();
    var $rows = $('.quoteDetails');

    console.log($rows.length);
    // var rows = [];
    return $('.quoteText').eq(4).text();
  });
}

// quản lý hàng đợi, thực hiện 10 requests / thời điểm, tránh thực hiện DDOS server tiki
var queues = async.queue(function (page, done) {
  crawl(page, done);
}, 10);

// thực hiện xong
queues.drain = function (quote) {
  console.log('ALL DONE!' + quote);
}

// 16000 là số trang kết quả của tiki
for (var _i = 10; _i < 11; _i++) {
  queues.drain(queues.push(_i));
}