'use strict'

function scroll() {
  $('.anchor-element').click(function(e) {
    e.preventDefault()
    var jumpId = $(this).attr('href')
    $('body, html').animate(
      {
        scrollTop: $(jumpId).offset().top,
      },
      'slow',
    )
  })
}

function smooth_scroll() {
  $('a.scroll').each(function() {
    $(this).on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault()
        var hash = this.hash
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          1000,
          function() {
            $('.header__container').addClass('active')
          },
        )
      }
    })
  })
}

function sliders() {
  var slider = $('.section02__slider-01').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    accessibility: false,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
  })

  var product_slider = $('.main-product__slider').slick({
    // slidesToShow: 1,
    infinite: true,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
    respondTo: 'slider',
    arrows: false,
  })

  slider.on('afterChange', function(event, slick, currentSlide) {
    $('.section02__slider-02 div')
      .find('.active')
      .removeClass('active')
    $(`.section02__slider-02 div:nth-child(${currentSlide + 1}) a`).addClass(
      'active',
    )
  })

  $('.section02__slider-02 > div').click(function() {
    $('.section02__slider-01').slick('slickGoTo', $(this).index())
    $('.section02__slider-02 div')
      .find('.active')
      .removeClass('active')
    $(`.section02__slider-02 div:nth-child(${$(this).index() + 1}) a`).addClass(
      'active',
    )
  })
} // Run functions on load

$(function() {
  scroll()
  sliders()
})
