(function () {
  if (console && console.log) {
    insertFindMes()
    window.foundit = step1_foundit
    window.finishit = step2_finishit
    step1()
  }

  function log() { console.log.apply(console, arguments) }

  function ajax(url, cb) {
    log('Querying server for ' + url)
    nanoajax.ajax({url: url}, function (statusCode, responseText) {
      if (statusCode !== 200) {
        log('Got a bad status code from the server, perhaps your answer was wrong?')
        return
      }

      try {
        var responseJson = JSON.parse(responseText)
      } catch (e) {
        log('Got an error parsing response, perhaps your answer was wrong?')
        console.error(e.stack)
        return
      }

      cb(responseJson)
    })
  }

  function ellipses(n, cb) {
    function run(m) {
      setTimeout(function () {
        var o = ''
        for (var i = 0, len = n - m; i < len; i++) o = o + '.'
        log(o)
        m ? run(m-1) : cb()
      }, 1000)
    }
    run(n-1)
  }

  function insertFindMes() {
    one = document.createElement('script')
    one.type = 'text/plain'
    one.setAttribute('data-findme', 'false')
    one.text = 'aiafjal891'
    document.querySelector('body').appendChild(one)

    two = document.createElement('a')
    two.setAttribute('data-findme', 'true!')
    two.href = 'a7189haf'
    two.innerText = ''
    document.querySelector('body').appendChild(two)

    three = document.createElement('meta')
    three.name = 'secret'
    three.content = '8sfajdhao'
    three.setAttribute('data-findme', 'true')
    document.querySelector('head').appendChild(three)
  }

  function step1() {
    log('Hello fellow developer! I\'m Jon Eisen. It\'s nice to meet you.')
    log('I have a little puzzle for you. Try and solve it!')
    log('Step 1: Find the HTML element with attribute "data-findme" equal to "true!"')
    log('On this element, you\'ll find an 8-digit alphanumeric code.')
    log('Run foundit(<code>) when you\'ve got it.')
  }

  function step1_foundit(code) {
    window.foundit = null

    ajax('/data/' + code + '.json', function (body) {
      if (body.sorry || !body.correct) {
        log('Sorry! The code was wrong:')
        log(JSON.stringify(body, null, 2))
        return
      }

      // body.correct is true!
      log('Yay! You got it right. Only one more step to go')
      log('Halfway there! Whaoooaah, living on a integer!')
      ellipses(4, function () {
        log('Ok, that was a bad joke. Anyway, let\'s get back to it!')
        step2(body.value)
      })
    })
  }

  function step2(secret) {
    window.localStorage.setItem('secret', JSON.stringify(secret))
    log('-------------')
    log('I\'ve put the secret we got from the server in the localStorage key "secret" (JSON-encoded)')
    log('It\'s an array of numbers. I want you to find the highest palindrome in the array.')
    log('If you\'re not sure what a palindrome is, check out https://en.wikipedia.org/wiki/Palindrome')
    log('Run finishit(<highest palindrome>) when you have it.')
  }

  function step2_finishit(pal) {
    if (!check_palindrome(pal)) {
      log('Sorry, thats not a palindrome.')
      return
    }

    log('Awesome! You found a palindrome.')
    ajax('/data/' + pal + '.json', function (body) {
      if (body.sorry || !body.correct) {
        log('Sorry! The palindrome wasn\'t the highest though...')
        log(JSON.stringify(body, null, 2))
        return
      }

      log('YAY! You\'ve solved the whole puzzle!')
      log('Now you can contact me at my extra-secret email only the most perseverant get.')
      log('Tell me how you completed it, if you liked the puzzle, or ways to improve it.')
      log('You can also hire me to do cool stuff for you too!')
      log('Email me at: jon-secret-' + pal + '@joneisen.works')
      log('Thanks for playing!')

      log('-------------')
      log('P.S. All solutions are valid, even looking at the unminified code at https://github.com/yanatan16/joneisen.works')
    })
  }

  function reverse(s) {
    return s.split('').reverse().join('')
  }

  function check_palindrome(pal) {
    var s = pal.toString()
      , len = s.length
    if (len % 2 === 0) {
      return s.substr(0, len / 2) === reverse(s.substr(len / 2))
    } else {
      return s.substr(0, (len - 1) / 2) === reverse(s.substr((len + 1) / 2))
    }
  }
})()
