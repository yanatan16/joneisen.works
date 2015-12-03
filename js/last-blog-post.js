(function () {
    function getLastBlogTitle(cb) {
        var req = {url: 'http://joneisen.me/last-post-title.txt'}
        nanoajax.ajax(req, function (statusCode, body, request) {
            if (statusCode == 200) {
                var split = body.split('\n')
                cb(split[0], split[1])
            }
            // silently fail
        })
    }

    function appendLastBlogPost(title, link) {
        var top = document.querySelector('.last-blog-post'),
            a = document.querySelector('.last-blog-post .last-blog-title')

        a.text = title
        a.href = link
        top.style.display = 'inherit'
    }

    getLastBlogTitle(appendLastBlogPost)
})()
