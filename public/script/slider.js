$(document).ready(function () {
  $('.team-slider').slick({
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px'
        }
      }
    ]
  }).slick('slickGoTo', 2); // Set started slide

  // Fn for button nav
  function updateNavButtons(slider) {
    var slickObj = slider.slick('getSlick');
    if (slickObj.currentSlide === 0) {
      $('.prev-slide').css('opacity', '.5').prop('disabled', true);
    } else {
      $('.prev-slide').css('opacity', '').prop('disabled', false);
    }
    if (slickObj.currentSlide >= slickObj.slideCount - 1) {
      $('.next-slide').css('opacity', '.5').prop('disabled', true);
    } else {
      $('.next-slide').css('opacity', '').prop('disabled', false);
    }
  }

  updateNavButtons($('.team-slider'));

  // Prev btn
  $('.prev-slide').click(function () {
    var activeSlider = $('.active-slider');
    activeSlider.slick('slickPrev');
    updateNavButtons(activeSlider);
  });

  //Next btn
  $('.next-slide').click(function () {
    var activeSlider = $('.active-slider');
    activeSlider.slick('slickNext');
    updateNavButtons(activeSlider);
  });

  //Buttons actualization while change slide
  $('.team-slider').on('afterChange', function(event, slick, currentSlide){
    updateNavButtons($(this));
  });

  $('.team-slider__slide').hover(function () {
    $(this).find('.slide-hover-content').fadeIn();
  }, function () {
    $(this).find('.slide-hover-content').fadeOut();
  });

  // Open modal
  $('.open-modal-btn').click(function () {
    $('#myModal').fadeIn();
    $('#overlay').fadeIn();
  });

  // Close modal
  $('.close-modal-btn, #overlay').click(function () {
    $('#myModal').fadeOut();
    $('#overlay').fadeOut();
  });

  $('.team-block__radio-button').on('change', function () {
    var team = $(this).data('team');

    // Remove active class from all labels
    $('.team-block__radio').removeClass('team-block__radio--active');

    // Add active class to the label of the selected radio button
    $(this).parent('label').addClass('team-block__radio--active');
  });

  // Set team-block__radio--active as default on Team1 radio
  $('input[data-team="1"]').prop('checked', true).parent('label').addClass('team-block__radio--active');
  $('input[data-team!="1"]').prop('checked', false);

  // At start we show 1 slide as default
  $('#team1-slider').addClass('active-slider').slick('slickGoTo', 2);

  // Event listener for button
  $('.team-block__radio-button').on('change', function () {
    var team = $(this).data('team');

    // Show only that team which we click
    $('.team-slider').removeClass('active-slider').hide();
    $('#team' + team + '-slider').addClass('active-slider').show();

    $('#team' + team + '-slider').slick('slickGoTo', 2);

    updateNavButtons($('#team' + team + '-slider'));

    // off another radio button
    $('.team-block__radio-button').not(this).prop('checked', false);
  });

  // Close modal by touch around the block
  $(document).on('click', function (e) {
    if ($(e.target).is('#overlay') || $(e.target).closest('#myModal').length > 0) {
      $('#myModal').fadeOut();
      $('#overlay').fadeOut();
    }
  });
});
