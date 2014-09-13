
(function( $ ){

$.fn.mytoolbox = function() {
            return this.each(function() {

                   alert("$(\"#\"+this.id).html():"+$("#"+this.id).html());
                    //或
                   alert("$(this).html():"+$(this).html());

            });
};

})(jQuery)