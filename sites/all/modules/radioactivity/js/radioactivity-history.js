(function ($) {
Drupal.behaviors.radioactivity_history = {

  attach: function (context, settings) {

    if ($.fn.sparkline) {
      $('.radioactivity-history').once(function (match) {
        var dataset = $.parseJSON($(this).text());
        if (dataset) {
          $(this).sparkline(dataset.values, {
            type:'bar',
            height:'100%',
            width:'100%',
            chartRangeMin: dataset.cutoff,
            tooltipFormat: dataset.tooltipFormat,
            tooltipValueLookups: {
              tooltips: dataset.tooltips
            }
          });
        }
      });
    }
  }
};
})(jQuery);
