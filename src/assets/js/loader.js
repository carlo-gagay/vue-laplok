function startLoader() {
  setTimeout(function () {
    $('#loader').fadeOut('slow')
  }, 1000)
}

function showLoader() {
  $('#loader').fadeIn('slow')
}

function hideLoader() {
  $('#loader').fadeOut('slow')
}

function hide_i_Loader() {
  $('#loader').fadeOut('fast')
}
