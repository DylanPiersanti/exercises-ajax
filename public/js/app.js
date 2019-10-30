$(function() {
  $.ajax({
    url: 'ajax/content.html',
    type: 'GET',
    success: function (html) {
      $('#ajaxFlower').html(html)
    },
    error: function (response) {
      console.log('error')
    }
  })

  var sTimeOut = setTimeout(function () {
    $.ajax({
      url: 'ajax/delay5.html',
      type: 'GET',
      success: function (html) {
        $('#timeOut').html(html)
      },
      error: function (response) {
        console.log('error')
      }
    })
  }, 5000)
});
