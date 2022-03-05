var page = require('webpage').create()
var system = require('system')
var address = system.args[1]
page.open(address, function () {
  page.render('github.png')
  phantom.exit()
})
