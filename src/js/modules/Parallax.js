import { makeCondition, revealSection } from '../_helpers';

export default () => {
  const heroContent    = document.querySelector('.hero__content'),
        heroShapes     = document.querySelector('.hero__shapes'),
        pricing        = document.querySelector('.pricing'),
        pricingItems   = document.querySelectorAll('.pricing-item'),
        sections       = document.querySelectorAll('.section'),
        section1       = sections[1],
        section2       = sections[2],
        section3       = sections[3],
        section4       = sections[4],
        offset         = window.pageYOffset,
        pricingOffset  = offset + pricing.getBoundingClientRect().top,
        section1Offset = offset + section1.getBoundingClientRect().top,
        section2Offset = offset + section2.getBoundingClientRect().top,
        section4Offset = offset + section4.getBoundingClientRect().top;

  if (makeCondition(section4, offset, section4Offset)) {
    revealSection(section4);
  }
  else if (
    !section3.classList.contains('visible') &&
    makeCondition(pricing, offset, pricingOffset)
  ) {
    revealSection(section3);
    pricingItems.forEach((item, i) => {
      setTimeout(() => {
        pricingItems[i].classList.add('pricing-item--is-showing');
      }, (800 * (Math.exp(i * 0.15))) - 800);
    })
  }
  else if (makeCondition(section2, offset, section2Offset)) {
    revealSection(section2);
  }
  else if (makeCondition(section1, offset, section1Offset)) {
    revealSection(section1);
  }

  if (window.screen.width > 1320) {
    if (offset >= 50) {
      heroContent.style.transform = `translate(0, -${offset / 8}%`;
      heroShapes.style.transform = `translate(0, ${offset / 8}%`;
    }
    else {
      heroContent.style.transform = 'none';
      heroShapes.style.transform = 'none';
    }
  }
}
