$(function() {
  $.ajax({
    url: 'ajax/content.html',
    type: 'GET',
    success: function (html) {
      console.log(html)
      $('#ajaxFlower').html(html)
    },
    error: function (response) {
      console.log('error')
    }
  })
});
