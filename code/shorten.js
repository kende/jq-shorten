(function($) {
  
  $.fn.shorten = function(options) {
    
    var opts = $.extend({}, $.fn.shorten.defaults, options);
    var rootURL = "http://api.bit.ly/shorten?version=2.0.1&login=" + opts.login + "&apiKey=" + opts.apikey;
    
    var returnedURLs = []
    return $(this).each(function() {
      var link = $(this);
      
      var oldURL = $(this).attr('href')
      $.getJSON(rootURL + "&longUrl=" + oldURL + "&callback=?", function(data) {
        $.each(data.results, function(i, item) {
          link.attr('href', item.shortUrl);
        })
      });
      
  });
    
    $.fn.shorten.defaults = {login: null, apikey: null}
    
  };
  
  
})(jQuery);