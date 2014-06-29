/**********************************************************
  @author mail@markus-falk.com
  @description sets css min-height of given elements to the highest calculated value
***********************************************************/

;(function($) {

  $.fn.mf_EqualHeight = function() {

    var heights = 0;

    this.each(function() {

      // cache object height
      var obj_height = $(this).height();

      // save it if it is higher than before
      if(heights < obj_height) {
        heights = obj_height;
      }
    });

    // set height of given elements to calculated value
    this.css('min-height', heights);

    // preserve chainability
    return this;
  };

})(jQuery);