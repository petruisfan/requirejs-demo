
define(["jquery", "sha3"], function($, crypt) {
    return {
        init: function() {
            $("button").on("click", function() {
                var password = $("input").val();
                $("strong").text(crypt(password));
            })
        }
    }
});