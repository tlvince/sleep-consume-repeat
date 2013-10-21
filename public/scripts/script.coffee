# http://stackoverflow.com/a/210733
$.fn.centre = ->
  @css 'position', 'absolute'
  @css 'top', Math.max(0,
    (($(window).height() - $(@).outerHeight()) / 2) +
    $(window).scrollTop()) + 'px'
  @css 'left', Math.max(0,
    (($(window).width() - $(@).outerWidth()) / 2) +
    $(window).scrollLeft()) + 'px'

words = ['sleep', 'consume', 'repeat', '']
oneSec = 1000

random = (min, max) ->
  Math.floor(Math.random() * (max - min + 1)) + min

display = ->
  $.each words, (i, word) ->
    setTimeout (->
      $('p').text(word).css 'font-size', "#{random(1, 10)}em"
      $('div').centre()
    ), random(0, oneSec) * i

recurse = ->
  display()
  sleep = random(0, 1) * oneSec
  setTimeout recurse, sleep

warning = $('.warning')
warning.centre()

$('button').click ->
  warning.remove()
  recurse()
