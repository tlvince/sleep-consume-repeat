// Generated by CoffeeScript 1.9.3
(function() {
  var display, oneSec, random, recurse, warning, words;

  $.fn.centre = function() {
    this.css('position', 'absolute');
    this.css('top', Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + 'px');
    return this.css('left', Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + 'px');
  };

  words = ['sleep', 'consume', 'repeat', ''];

  oneSec = 1000;

  random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  display = function() {
    return $.each(words, function(i, word) {
      return setTimeout((function() {
        $('p').text(word).css('font-size', (random(1, 10)) + "em");
        return $('div').centre();
      }), random(0, oneSec) * i);
    });
  };

  recurse = function() {
    var sleep;
    display();
    sleep = random(0, 1) * oneSec;
    return setTimeout(recurse, sleep);
  };

  warning = $('.warning');

  warning.centre();

  $('button').click(function() {
    warning.remove();
    return recurse();
  });

}).call(this);