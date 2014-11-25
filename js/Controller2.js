
define(["require", "jquery"], function(require, $) {
    var IE = false;
    var crypt;

    if ( IE ) {
        require(["sha3"], function(module) {
            crypt = module;
        });
    } else {
        require(["md5"], function(module) {
            crypt = module;
        });
    }

    return {
        init: function() {
            $("button").on("click", function() {
                var password = $("input").val();
                $("strong").text(crypt(password));
            })
        }
    }
});