console.log("It works");

$("document").ready(function() {
    $(".submit").click(function(e) {
        var name = $('.yourname').val();
        var email = $('.youremail').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusElement = $('.status');
        statusElement.empty();

        // Validation time!
        // Make sure the name is at least 3 chars.
        if (name.length > 3) {
            statusElement.append("<div>Valid name</div>");
        }
        else {
            e.preventDefault();
            statusElement.append("<div>Invalid name</div>");
        }

        // Make sure the email address is at least 5 chars, including '@' and '.'.
        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElement.append("<div>Valid email</div>");
        }
        else {
            e.preventDefault();
            statusElement.append("<div>Invalid email</div>");
        }

        if (subject.length >= 2) {
            statusElement.append("<div>Valid subject</div>");
        }
        else {
            e.preventDefault();
            statusElement.append("<div>Invalid subject</div>");
        }

        if (message.length > 10) {
            statusElement.append("<div>Valid message</div>");
        }
        else {
            e.preventDefault();
            statusElement.append("<div>Invalid message</div>");
        }
    })
})