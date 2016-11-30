$(document).ready(function(){

     ///// Code goes here

 $('#btnOne').on('click', function (){
   alert('hello');
 });

  $('#btnTwo').on('click', function(){
    $(".update-html").html('Hello World')

  });

  $('#btnThree').on('click', function(){
    $("#update-html").val('Hello World')

  });

  $('#btnCopyHtml').on('click', function(){
    var html = $('.copy-html').html()
    $('.paste-html').html(html)

  });
  $('#btnCopyValues').on('click', function(){
    var html = $('.copy-html').val()
    $('.copiedvalue').html(html)
      $("paste-text").val('copiedValue')  





  });
