(function (){
    var sections;

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            var toc = document.querySelector('.toc')
            sections = find_sections()

            if (toc.style.display !== 'none') {
                document.addEventListener('scroll', onScroll)
                setupLinks()
                onScroll();
            }
        }, 500)
    })

    function find_sections() {
        return Array.prototype.map.call(
            document.querySelectorAll('.toc .toc-section-link'),
            function (toc) {
                var href = toc.getAttribute('href')
                , section = document.querySelector(href)

                if (!section)
                    throw new Error('couldnt get section for toc section: ' + href)
                return {toc: toc, section: section}
            }
        )
    }

    function onScroll(e) {
        sections.forEach(function(sec) {
            if (isElementInViewport(sec.section)) {
                if (!sec.toc.classList.contains('active'))
                    sec.toc.classList.add('active')
            } else {
                if (sec.toc.classList.contains('active'))
                    sec.toc.classList.remove('active')
            }
        })
    }

    function setupLinks() {
        sections.forEach(function (sec) {
            if (sec.section.scrollIntoView) {
                sec.toc.addEventListener('click', function (e) {
                    e.preventDefault()
                    sec.section.scrollIntoView({behavior: 'smooth', block: 'start'})
                })
            }
        })
    }

    function isElementInViewport (el) {
        var rect = el.getBoundingClientRect()
          , height = window.innerHieght || document.documentElement.clientHeight
        return !(rect.bottom < 0 || rect.top > height)
    }

})()
