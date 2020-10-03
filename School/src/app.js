$(document).on("click", "#form", function(e) {
    bootbox.alert("SAVED SCHOOL", function() {
        console.log("Alert Callback");
    });
});