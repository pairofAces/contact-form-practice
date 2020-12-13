console.log('this is working')

$(document).ready(function () {
    $('.submit').click(function (e) {
        e.preventDefault();
        console.log('this button has just been clicked!!!')

        //we need to get the individual input values and set to a variable
        let email = $('.email').val()
        let subject = $('.subject').val()
        let message = $('.message').val()
        let status = $('.status')
        status.empty()

        //create the error handling logic
        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            status.append('<div>email is valid</div>')
        } else {
            status.append('<div>email is NOT valid</div>')
        }

        if (subject.length > 2) {
            status.append('<div>Subject is valid</div>')
        } else {
            status.append('<div>Subject is NOT valid</div>')
        }

        if (message.length > 20) {
            status.append('<div>Message is Valid</div>')
        } else {
            status.append('<div>Message is NOT Valid</div>')
        }
    })
})