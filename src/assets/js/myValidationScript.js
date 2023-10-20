$('.DigitsOnly')
  .keypress(function (e) {
    var charCode = e.which ? e.which : e.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
  })
  .on('paste', function (e) {
    var $this = $(this)
    setTimeout(function () {
      $this.val($this.val().replace(/[^0-9]/g, ''))
    }, 5)
  })
  .attr('autocomplete', 'off')

$('.TextOnly')
  .keypress(function (e) {
    var key = e.keyCode
    if (key >= 48 && key <= 57) {
      e.preventDefault()
    }
  })
  .attr('autocomplete', 'off')
