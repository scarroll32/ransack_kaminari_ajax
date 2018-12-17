$(document).on('turbolinks:load', function(){
  var loadingHTML = "<h1 class='loader'>...loading</h1>";
  var loading = false;
  var currentPage = 1;
  var nextPage = null;
  if($('.load-more').length > 0){
    console.log('length');
    window.onscroll = function(ev) {
      console.log('scroll');
      if((window.scrollY + window.innerHeight + 100) > document.body.scrollHeight){
        var loader = $('#loader');
        if(loader.length > 0){
          nextPage = parseInt(loader.attr('href').match(/page=([0-9]+)/)[1],10);
        }

        if(Number.isInteger(nextPage) && currentPage < nextPage){
          currentPage = nextPage;
          $('#loader').click();
          $('#loader').after(loadingHTML);
          var url = $('#loader').attr('href');
          console.log(url);
          Rails.ajax({
            type: 'GET',
            url: url,
            dataType: 'script',
            success: function(resp){
              // console.log('success');
            },
            error: function(resp){
              // console.log('error');
            }
          });
        } else {
          $('#loader').remove();
        }
      }
    };
  }
});
