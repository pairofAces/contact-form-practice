console.log('this is working')

$(document).ready(function () {
    $('.submit').click(function (e) {
        e.preventDefault();
        console.log('this button has just been clicked!!!')
    })
})