// SCORING

// Initialize score to 0
let score = 0;

// Add click event listener to each clickable element
$('.btn').on('click', function() {
  // Increment score by 41.41 for each click
  score += 27.58;

  // Update score display with counter animation
  $('#score').prop('Counter', $('#score').text()).animate({
    Counter: score
  }, {
    duration: 4000,
    easing: 'swing',
    step: function(now) {
      $('#score').text(Math.ceil(now));
    }
  });
});


// Add click event listener to each clickable element
$('.winner').on('click', function() {
  // Increment score by 41.41 for each click
  score += 41.41;

  // Update score display with counter animation
  $('#score').prop('Counter', $('#score').text()).animate({
    Counter: score
  }, {
    duration: 4000,
    easing: 'swing',
    step: function(now) {
      $('#score').text(Math.ceil(now));
    }
  });
});

// Add click event listener to each clickable element
$('.superjump').on('click', function() {
  // Increment score by 41.41 for each click
  score += 62.09;

  // Update score display with counter animation
  $('#score').prop('Counter', $('#score').text()).animate({
    Counter: score
  }, {
    duration: 4000,
    easing: 'swing',
    step: function(now) {
      $('#score').text(Math.ceil(now));
    }
  });
});

// Add click event listener to each element that reduces score by 100
$('.loose').on('click', function() {
  // Reduce score by 62.09 for each click
  score -= 62.09;

  // Update score display with counter animation
  $('#score').prop('Counter', $('#score').text()).animate({
    Counter: score
  }, {
    duration: 4000,
    easing: 'swing',
    step: function(now) {
      $('#score').text(Math.ceil(now));
    }
  });
});

// Add click event listener to each element that reduces score by 500
$('.print').on('click', function() {
  // Reduce score by 33234 for each click
  score -= 33234;

  // Update score display with counter animation
  $('#score').prop('Counter', $('#score').text()).animate({
    Counter: score
  }, {
    duration: 4000,
    easing: 'swing',
    step: function(now) {
      $('#score').text(Math.ceil(now));
    }
  });
});

// Add click event listener to each element that divides score by 4.18
$('.divide-clickable').on('click', function() {
  // Divide score by 4.18
  score /= 4.18;

  // Update score display with counter animation
  $('#score').prop('Counter', $('#score').text()).animate({
    Counter: score
  }, {
    duration: 4000,
    easing: 'swing',
    step: function(now) {
      $('#score').text(Math.ceil(now));
    }
  });
});

// COUNTER

$(document).ready(function() {

  // Define a new intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Check if the observed element is intersecting the viewport
      if (entry.isIntersecting) {
        // Start the count up animation
        $(entry.target).prop('Counter',0).animate({
          Counter: $(entry.target).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(entry.target).text(Math.ceil(now));
          }
        });

        // Unobserve the element to prevent duplicate animations
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // Observe each counter element
  $('.counter').each(function () {
    observer.observe(this);
  });
});

// TYPEWRITER

'use strict';

function typeWriter(el) {
  const textArray = el.textContent.split('');
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    if (i < textArray.length) {
      el.textContent += textArray[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        typeWriter(el);
      }, 42000);
    }
  }, 23);
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typeWriter(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.typewriter').forEach(el => {
  observer.observe(el);
});

// SOUND SYSTEM

// Add click event listener to each clickable element
$('.winner').on('click', function() {
  // Play sound effect
  $('#win')[0].play();
});

$('.loose').on('click', function() {

  $('#loose')[0].play();
});

$('.print').on('click', function() {

  $('#print')[0].play();
});

$('.jump').on('click', function() {
  // Play sound effect
  $('#jump')[0].play();
});

$('.superjump').on('click', function() {
  // Play sound effect
  $('#superjump')[0].play();
});

$('.powerup').on('click', function() {
  // Play sound effect
  $('#powerup')[0].play();
});