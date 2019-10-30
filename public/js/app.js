
$(function () {
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

  $('#myInfos').click(function () {
    $.ajax({
      url: 'ajax/info.html',
      type: 'GET',
      success: function (html) {
        $('#infoBlock').html(html)
      },
      error: function () {
        console.log('error')
      }
    })
  })

  $('#formulaire').submit(function () {

    var data = $(this).serializeArray()
    
    var values = {}

    data.forEach(function (data) {
      values[data.name] = data.value
    });

    $.ajax({
      url: '/user',
      method: 'POST',
      data: values,
      success: function(html) {
        $('#formResult').html(html)
      }
    })

  })


});
