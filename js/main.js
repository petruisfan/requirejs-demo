requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: [
            "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
            "../bower_components/jquery/dist/jquery.min"
        ],

        Controller: "Controller2",

        md5: "crypt/md5",
        sha3: "crypt/sha3"
    }
});

requirejs(["Controller"], function(Controller) {
    console.log("RequireJS working :)");

    Controller.init();
});