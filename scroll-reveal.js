(function () {
  var reveals = document.querySelectorAll('.reveal');
  function reveal() {
    for (var i = 0; i < reveals.length; i++) {
      var el = reveals[i];
      var top = el.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      var threshold = 120;
      if (top < windowHeight - threshold) el.classList.add('animated');
    }
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
  reveal();
})();
