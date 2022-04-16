const $sliderWrap = $('.slider-wrap');
const $slider = $sliderWrap.find('.slider');
const $index = $slider.find('.index');
const $img = $slider.find('.img');
const sliderNum = $slider.length;
let indexWidth = $index.width() + 1;
let sliderWrapWidth = $sliderWrap.width();
const duration = 300;

$(window).on('resize', function() {
	sliderWrapWidth = $sliderWrap.width();
  console.log(sliderWrapWidth)
});

for(let i = 0; i < sliderNum; i++) {
  $slider.eq(i).css({
    left: i * indexWidth,
    width: sliderWrapWidth - (i * indexWidth)
  }); 
}

$index.on('click', function() {
  let num = $index.index(this);
  let start = sliderWrapWidth - (indexWidth * (sliderNum - num - 1));
  
  for(let i = num; i > 0; i--){
    $slider.eq(i).stop().animate({left: indexWidth * i}, duration, 'swing');
  }
 
  for(let i = num; i < sliderNum; i++) {
    $slider.eq(i + 1).stop().animate({left: start + (indexWidth * (i - num))}, duration, 'swing');
  }
})