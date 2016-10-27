var searchUrlBefore = 'https://www.googleapis.com/customsearch/v1?q=';
var searchUrlAfter = '&fileType=jpg,png,bmp&imgColorType=color&num=5';

var doSearch = true;
var defaultResults = [
    'https://i.ytimg.com/vi/a6KGPBflhiM/hqdefault.jpg',
    'https://i.ytimg.com/vi/p336IIjZCl8/maxresdefault.jpg',
    'https://i.ytimg.com/vi/ZqZ9f89Xgcg/hqdefault.jpg',
    'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg'
];

function findImages(searchTerm, searchEngineCx, apiKey, callback) {
    if (!searchTerm) {
        return callback();
    }
    
    var searchUrl = buildSearchUrl(searchTerm, searchEngineCx, apiKey);
    console.log('finding images at: ' + searchUrl);
    if(!doSearch) {
        return callback(defaultResults);
    }
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', searchUrl);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var imgUrls = parseImageResults(xhr.responseText);
            return callback(imgUrls);
        } else {
            console.log('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

function buildSearchUrl(term, cx, key) {
    return searchUrlBefore + term + '&key=' + key + '&cx=' + cx + searchUrlAfter;
}

function parseImageResults(responseBody) {
    var imgUrls = [];
    var response = JSON.parse(responseBody);
    var numImages = response.items.length;
    for (var i=0; i<numImages; i++) {
        var item = response.items[i];
        var itemUrl = item.pagemap.imageobject[0].contenturl;
        if (!itemUrl) {
            itemUrl = item.pagemap.imageobject[0].url;
        }
        console.log('found image at: ' + itemUrl);
        imgUrls.push(itemUrl)
    }
    return imgUrls;
}