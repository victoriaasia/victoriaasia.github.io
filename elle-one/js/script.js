$(document).ready(function(){
    $('.av-result').addClass("av-hidden");

    $('.av-img').click(function() {

        var $this = $(this).children();

        if ($this.hasClass("av-hidden")) {
            $this.removeClass("av-hidden");
        } else {
            $this.addClass("av-hidden");
        }
    });
});
