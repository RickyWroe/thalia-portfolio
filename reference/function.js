$(document).ready(function () {
  function t(t) {
    var n = $(".side-nav").find(".is-active"),
      s = $(".side-nav").children().index(n),
      r = $(".side-nav").children().length - 1,
      o = 0;
    "swipeup" === t.type || 40 === t.keyCode || t > 0
      ? s !== r
        ? ((o = s + 1), e(o), i(s, o, r))
        : (e(o), i(s, o, r))
      : ("swipedown" === t.type || 38 === t.keyCode || 0 > t) &&
      (0 !== s
        ? ((o = s - 1), e(o), i(s, o, r))
        : ((o = r), e(o), i(s, o, r)));
  }
  function e(t) {
    $(".side-nav, .outer-nav").children().removeClass("is-active"),
      $(".side-nav").children().eq(t).addClass("is-active"),
      $(".outer-nav").children().eq(t).addClass("is-active");
  }
  function i(t, e, i) {
    $(".main-content").children().removeClass("section--is-active"),
      $(".main-content").children().eq(e).addClass("section--is-active"),
      $(".main-content .section")
        .children()
        .removeClass("section--next section--prev"),
      (t === i && 0 === e) || (0 === t && e === i)
        ? $(".main-content .section")
          .children()
          .removeClass("section--next section--prev")
        : e > t
          ? $(".main-content")
            .children()
            .eq(t)
            .children()
            .addClass("section--next")
          : $(".main-content")
            .children()
            .eq(t)
            .children()
            .addClass("section--prev"),
      0 !== e && e !== i
        ? $(".header--cta").addClass("is-active")
        : $(".header--cta").removeClass("is-active");
  }
  function n() {
    $(".header--nav-toggle").click(function () {
      $(".perspective").addClass("perspective--modalview"),
        setTimeout(function () {
          $(".perspective").addClass("effect-rotate-left--animate");
        }, 25),
        $(".outer-nav, .outer-nav li, .outer-nav--return").addClass("is-vis");
    }),
      $(".outer-nav--return, .outer-nav li").click(function () {
        $(".perspective").removeClass("effect-rotate-left--animate"),
          setTimeout(function () {
            $(".perspective").removeClass("perspective--modalview");
          }, 400),
          $(".outer-nav, .outer-nav li, .outer-nav--return").removeClass(
            "is-vis"
          );
      });
  }
  function s() {
    $(".slider--prev, .slider--next").click(function () {
      var t = $(this),
        e = $(".slider").find(".slider--item-left"),
        i = $(".slider").children().index(e),
        n = $(".slider").find(".slider--item-center"),
        s = $(".slider").children().index(n),
        r = $(".slider").find(".slider--item-right"),
        o = $(".slider").children().index(r),
        a = $(".slider").children().length,
        l = $(".slider--item-left"),
        c = $(".slider--item-center"),
        h = $(".slider--item-right"),
        u = $(".slider--item");
      $(".slider").animate({ opacity: 0 }, 400),
        setTimeout(function () {
          t.hasClass("slider--next")
            ? a - 1 > i && a - 1 > s && a - 1 > o
              ? (l
                .removeClass("slider--item-left")
                .next()
                .addClass("slider--item-left"),
                c
                  .removeClass("slider--item-center")
                  .next()
                  .addClass("slider--item-center"),
                h
                  .removeClass("slider--item-right")
                  .next()
                  .addClass("slider--item-right"))
              : i === a - 1
                ? (u
                  .removeClass("slider--item-left")
                  .first()
                  .addClass("slider--item-left"),
                  c
                    .removeClass("slider--item-center")
                    .next()
                    .addClass("slider--item-center"),
                  h
                    .removeClass("slider--item-right")
                    .next()
                    .addClass("slider--item-right"))
                : s === a - 1
                  ? (l
                    .removeClass("slider--item-left")
                    .next()
                    .addClass("slider--item-left"),
                    u
                      .removeClass("slider--item-center")
                      .first()
                      .addClass("slider--item-center"),
                    h
                      .removeClass("slider--item-right")
                      .next()
                      .addClass("slider--item-right"))
                  : (l
                    .removeClass("slider--item-left")
                    .next()
                    .addClass("slider--item-left"),
                    c
                      .removeClass("slider--item-center")
                      .next()
                      .addClass("slider--item-center"),
                    u
                      .removeClass("slider--item-right")
                      .first()
                      .addClass("slider--item-right"))
            : 0 !== i && 0 !== s && 0 !== o
              ? (l
                .removeClass("slider--item-left")
                .prev()
                .addClass("slider--item-left"),
                c
                  .removeClass("slider--item-center")
                  .prev()
                  .addClass("slider--item-center"),
                h
                  .removeClass("slider--item-right")
                  .prev()
                  .addClass("slider--item-right"))
              : 0 === i
                ? (u
                  .removeClass("slider--item-left")
                  .last()
                  .addClass("slider--item-left"),
                  c
                    .removeClass("slider--item-center")
                    .prev()
                    .addClass("slider--item-center"),
                  h
                    .removeClass("slider--item-right")
                    .prev()
                    .addClass("slider--item-right"))
                : 0 === s
                  ? (l
                    .removeClass("slider--item-left")
                    .prev()
                    .addClass("slider--item-left"),
                    u
                      .removeClass("slider--item-center")
                      .last()
                      .addClass("slider--item-center"),
                    h
                      .removeClass("slider--item-right")
                      .prev()
                      .addClass("slider--item-right"))
                  : (l
                    .removeClass("slider--item-left")
                    .prev()
                    .addClass("slider--item-left"),
                    c
                      .removeClass("slider--item-center")
                      .prev()
                      .addClass("slider--item-center"),
                    u
                      .removeClass("slider--item-right")
                      .last()
                      .addClass("slider--item-right"));
        }, 400),
        $(".slider").animate({ opacity: 1 }, 400);
    });
  }
  function r() {
    $(".work-request--information input").focusout(function () {
      var t = $(this).val();
      "" === t
        ? $(this).removeClass("has-value")
        : $(this).addClass("has-value"),
        window.scrollTo(0, 0);
    });
  }
  var o = !0,
    a = null;
  $(this).on("mousewheel DOMMouseScroll", function (e) {
    if (!$(".outer-nav").hasClass("is-vis")) {
      e.preventDefault();
      var i = e.originalEvent.wheelDelta
        ? -e.originalEvent.wheelDelta
        : 20 * e.originalEvent.detail;
      i > 50 && o
        ? ((o = !1),
          clearTimeout(a),
          (a = setTimeout(function () {
            o = !0;
          }, 800)),
          t(1))
        : -50 > i &&
        o &&
        ((o = !1),
          clearTimeout(a),
          (a = setTimeout(function () {
            o = !0;
          }, 800)),
          t(-1));
    }
  }),
    $(".side-nav li, .outer-nav li").click(function () {
      if (!$(this).hasClass("is-active")) {
        var t = $(this),
          n = t.parent().find(".is-active"),
          s = t.parent().children().index(n),
          r = t.parent().children().index(t),
          o = $(this).parent().children().length - 1;
        e(r), i(s, r, o);
      }
    }),
    $(".cta").click(function () {
      var t = $(".side-nav").find(".is-active"),
        n = $(".side-nav").children().index(t),
        s = $(".side-nav").children().length - 1,
        r = s;
      e(s), i(n, r, s);
    });

  if (typeof Hammer !== "undefined") {
    var l = document.getElementById("viewport"),
      c = new Hammer(l);
    c.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL }),
      c.on("swipeup swipedown", function (e) {
        t(e);
      });
  } else {
    console.warn("Hammer.js not loaded - touch gestures disabled");
  }

  $(document).keyup(function (e) {
    $(".outer-nav").hasClass("is-vis") || (e.preventDefault(), t(e));
  }),
    n(),
    s(),
    r();
});

var stairsContainer;
var capybaraLoader;

window.triggerStairsTransition = function (callback, isReverse = false) {
  if (!stairsContainer) {
    stairsContainer = document.getElementById("stairs-transition");
  }
  if (!stairsContainer) {
    console.log("Stairs container not found, executing callback directly");
    if (callback) callback();
    return;
  }
  console.log("Triggering smooth stairs transition, reverse:", isReverse);
  stairsContainer.classList.remove("hidden", "animate-out", "animate-reverse");
  stairsContainer.classList.add("animate-in");
  setTimeout(function () {
    if (callback) callback();
    stairsContainer.classList.remove("animate-in");

    if (isReverse) {
      stairsContainer.classList.add("animate-reverse");
    } else {
      stairsContainer.classList.add("animate-out");
    }
    setTimeout(function () {
      stairsContainer.classList.add("hidden");
      stairsContainer.classList.remove("animate-out", "animate-reverse");
    }, 700);
  }, 800);
};

// Global variable to track topology loading
window.topologyLoaded = false;

document.addEventListener("DOMContentLoaded", function () {
  stairsContainer = document.getElementById("stairs-transition");
  capybaraLoader = document.getElementById("capybara-loader");
  if (capybaraLoader) {
    capybaraLoader.classList.remove("hidden");
  }
  
  // Function to hide loader and show stairs animation
  function hideLoaderAndShowStairs() {
    if (capybaraLoader) {
      capybaraLoader.classList.add("hidden");
    }
    if (stairsContainer) {
      stairsContainer.classList.remove("hidden");
      stairsContainer.classList.add("animate-in");
      setTimeout(function () {
        stairsContainer.classList.remove("animate-in");
        stairsContainer.classList.add("animate-out");
        setTimeout(function () {
          stairsContainer.classList.add("hidden");
          stairsContainer.classList.remove("animate-out");
        }, 500);
      }, 600);
    }
  }
  
  // Wait for topology to load before hiding loader
  function checkTopologyLoaded() {
    if (window.topologyLoaded) {
      hideLoaderAndShowStairs();
    } else {
      // Check again after 100ms
      setTimeout(checkTopologyLoaded, 100);
    }
  }
  
  // Start checking after minimum 1.5 seconds
  setTimeout(checkTopologyLoaded, 1500);
});

const container = document.querySelector(".pixelated-image-card");
if (!container) {
  console.warn("Pixelated image container not found");
} else {
  const pixelGrid = container.querySelector(".pixelated-image-card__pixels");
  const defaultEl = container.querySelector(".pixelated-image-card__default");
  const activeEl = container.querySelector(".pixelated-image-card__active");
  const gridSize = 16;
  const pixelColor = "#ededed";
  const animationStepDuration = 0.4;
  let isActive = false;
  let delayedCall;
  const size = 100 / gridSize;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixelated-image-card__pixel");
      pixel.style.backgroundColor = pixelColor;
      pixel.style.width = `${size}%`;
      pixel.style.height = `${size}%`;
      pixel.style.left = `${col * size}%`;
      pixel.style.top = `${row * size}%`;
      pixelGrid.appendChild(pixel);
    }
  }

  function animatePixels(activate) {
    if (typeof gsap === "undefined") {
      console.warn("GSAP not loaded, skipping pixel animation");
      return;
    }

    isActive = activate;
    const pixels = pixelGrid.querySelectorAll(".pixelated-image-card__pixel");
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCall) delayedCall.kill();

    gsap.set(pixels, { display: "none" });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: { each: staggerDuration, from: "random" },
    });

    delayedCall = gsap.delayedCall(animationStepDuration, () => {
      if (activate) {
        defaultEl.style.display = "none";
        activeEl.style.display = "flex";
      } else {
        activeEl.style.display = "none";
        defaultEl.style.display = "block";
      }
    });

    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: { each: staggerDuration, from: "random" },
    });
  }

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  if (!isTouchDevice) {
    container.addEventListener("mouseenter", () => {
      if (!isActive) animatePixels(true);
    });
    container.addEventListener("mouseleave", () => {
      if (isActive) animatePixels(false);
    });
  } else {
    container.addEventListener("click", () => {
      animatePixels(!isActive);
    });
  }

  defaultEl.style.display = "block";
  activeEl.style.display = "none";
}


// Form validation and reset functionality for hire me section
$(document).ready(function() {
  const workRequestForm = document.querySelector('.work-request');
  
  if (workRequestForm) {
    const submitBtn = workRequestForm.querySelector('#submit-btn');
    const checkboxes = workRequestForm.querySelectorAll('input[type="checkbox"][name="services[]"]');
    const errorMessage = workRequestForm.querySelector('#services-error');
    const optionsContainer = workRequestForm.querySelector('.work-request--options');
    
    // Function to check if at least one checkbox is selected
    function hasSelectedService() {
      return Array.from(checkboxes).some(function(checkbox) {
        return checkbox.checked;
      });
    }
    
    // Function to show error message
    function showError(message) {
      if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        if (optionsContainer) {
          optionsContainer.classList.add('has-error');
        }
      }
    }
    
    // Function to hide error message
    function hideError() {
      if (errorMessage) {
        errorMessage.textContent = '';
        errorMessage.classList.remove('show');
        if (optionsContainer) {
          optionsContainer.classList.remove('has-error');
        }
      }
    }
    
    // Add event listeners to all checkboxes
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        // Hide error when user selects a checkbox
        if (hasSelectedService()) {
          hideError();
        }
      });
      
      // Add keyboard support for accessibility
      checkbox.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    });
    
    // Validate on form submit - only check for service selection
    // HTML5 validation will handle name and email automatically with default browser messages
    workRequestForm.addEventListener('submit', function(e) {
      // Check if at least one service is selected
      // This check happens independently of HTML5 validation
      if (!hasSelectedService()) {
        e.preventDefault();
        e.stopPropagation();
        showError('Please select at least one service.');
        
        // Focus on first checkbox for accessibility
        if (checkboxes.length > 0) {
          checkboxes[0].focus();
        }
        
        return false;
      }
      
      setTimeout(function() {
        workRequestForm.reset();
        
        const inputs = workRequestForm.querySelectorAll('.work-request--information input');
        inputs.forEach(function(input) {
          input.classList.remove('has-value');
        });
        
        checkboxes.forEach(function(checkbox) {
          checkbox.checked = false;
        });
        
        hideError();
      }, 100);
    });
  }
});
