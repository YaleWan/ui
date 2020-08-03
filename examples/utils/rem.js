(function(doc, win) {
  var docEl = doc.documentElement

  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

  var recalc = function() {
    var clientWidth = docEl.clientWidth

    if (!clientWidth) return

    if (clientWidth >= 750) {
      docEl.setAttribute('style', 'font-size:100px !important')
    } else {
      docEl.setAttribute('style', 'font-size:' + 100 * (clientWidth / 750) + 'px !important')
    }
  }

  if (!doc.addEventListener) return

  win.addEventListener(resizeEvt, recalc, false)

  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
