export function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

export function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = 'none';
    } 
    else {
      requestAnimationFrame(fade);
    }
  })();
}

export function revealSection(section) {
  fadeIn(section)
  section.classList.add('visible')
}

export function makeCondition(a, b, c) {
  return !a.classList.contains('visible') && b >= c - (window.innerHeight / 2);
}
