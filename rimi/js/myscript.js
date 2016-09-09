$(document).ready(function() {
    $("#price-slider").slider({
        min: 0,
        max: 50000,
        step: 1000,
        values: [2000, 19000],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.priceSliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.priceSliderValue").change(function() {
        var $this = $(this);
        $("#price-slider").slider("values", $this.data("index"), $this.val());
    });
});
  