(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict



document.addEventListener("DOMContentLoaded", (number) => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment
     obj.textContent = current
     if (current == end) {
      clearInterval(timer)
     }
    }, step)
  }
  counter("count1", 0, 100, 3000)
  counter("count2", 0, 200, 2500)
  counter("count3", 0, 10, 3000)
  counter("count4", 0, 450, 3000)
 })
 
 function getEbook() {
  let email = document.getElementById('email').value
  let res = document.querySelector('div#res')
  var database = firebase.database()
  var timestamp = new Date().getTime()

  if(email == "") {
    res.innerHTML = "Campo email esta vazio"
    res.style.display = "block"
    res.classList.add('alert-danger')
  
  }else {
      database.ref(timestamp).set({
      email: email
  })
  console.log(email)
    res.innerHTML = "Seu pedido foi enviado com sucesso!"
    res.style.display = "block"
    res.classList.remove('alert-danger')
    res.classList.add('alert-success')

  }
}