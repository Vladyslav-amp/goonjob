$(document).ready(function() {
  var $select = $('#job-type');
  var $label = $select.parent('label');
  var $arrow = $('<span class="contact-form__select-arrow"></span>');
  $label.append($arrow);

  $select.on('focus', function() {
    $arrow.addClass('contact-form__select-arrow--active');
  });

  $select.on('blur', function() {
    $arrow.removeClass('contact-form__select-arrow--active contact-form__select-arrow--selected');
  });

  $select.on('change', function() {
    var $option = $(this).find('option:selected');
    $label.addClass('contact-form__label--selected');
    $arrow.addClass('contact-form__select-arrow--selected');
  });


  $('#myForm').on('submit', function(event) {
    event.preventDefault(); 

    // Show modal
    $('#myModalBlock').fadeIn();
    $('#overlayForm').fadeIn();

    // Clear data
    $(this).trigger('reset');

    return false;
  });

  $('.myModal-close').on('click', function() {
    $('#myModalBlock').fadeOut();
    $('#overlayForm').fadeOut();
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.modal-content').length) {
      $('#myModalBlock').fadeOut();
      $('#overlayForm').fadeOut();
    }
  });
});
