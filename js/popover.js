(function () {
    document.addEventListener('DOMContentLoaded', function () {
        function isMobile() {
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                x = w.innerWidth || e.clientWidth || g.clientWidth

            return x < 750
        }

        if (!isMobile()) {
            setTimeout(function () {
                var items = document.querySelectorAll('a.popover[title]')

                Array.prototype.forEach.call(items, function (item) {
                    var div = document.createElement('div')
                    div.classList.add("popover-box")
                    var title = div.innerHTML = item.getAttribute('title')
                    div.style.opacity = 0
                    div.style.position = "absolute"
                    var rect = item.getBoundingClientRect()
                    div.style.top = (rect.bottom + window.scrollY) + "px"
                    div.style.left = (rect.left + window.scrollX) + "px"
                    item.title = ""

                    document.body.appendChild(div)

                    item.addEventListener('mouseover', function () {
                        div.style.opacity = 1
                    })
                    item.addEventListener('mouseleave', function () {
                        div.style.opacity = 0
                    })
                })
            }, 500)
        }
    })
})()
