document.addEventListener('DOMContentLoaded', function () {
    $('.tower1 .wall .window').click(function(){
        $('.tower1 .wall .window img').toggle('slow')
    })

    setTimeout(function () {
        $('.tower2 .horn1').addClass('active')
        $('.tower2 .horn2').addClass('active')
    }, 2500)

    $('.tower2 .wall .w1').click(function(){
        $('.tower2 .wall .w1 img').toggle()
        $(this).toggleClass('active')
    })

    $('.tower2 .wall .w2').click(function(){
        $(this).toggleClass('active')
    })

    $('.tower2 .wall .w3').click(function(){
        $('.tower2 .wall .w3 img').toggle('400')
    })

    $('.tower2 .wall .w4').click(function(){
        $('.tower2 .wall .w4 img').toggle()
    })

    setInterval(function () {
        $('.tower3 .roof img').toggle('slow')
    }, 1500)

    $('.tower3 .wall .w1').click(function(){
        $('.tower3 .wall .w1 img').toggle()
    })

    $('.tower3 .wall .w2').click(function(){
        $('.tower3 .wall .w2 img').toggle()
    })

    setTimeout(function () {
        $('.tower4 .horn1').addClass('active')
        $('.tower4 .horn2').addClass('active')
    }, 3000)
    setInterval(function () {
        $('.tower4 .roof .pictogram img').toggle('slow')
    }, 1500)

    $('.tower4 .wall .w1').click(function(){
        $(this).toggleClass('active')
    })

    $('.tower4 .wall .w2').click(function(){
        $('.tower4 .wall .w2 img').toggle('slow')
    })

    $('.tower4 .wall .w3').click(function(){
        $('.tower4 .wall .w3 img').toggle()
    })

    $('.tower4 .wall .w4').click(function(){
        $('.tower4 .wall .w4 img').toggle()
    })

    setTimeout(function () {
        $('.tower5 .horn1').addClass('active')
        $('.tower5 .horn2').addClass('active')
    }, 3500)

    $('.tower5 .wall .w1').click(function(){
        $(this).toggleClass('active')
    })

    $('.tower5 .wall .w2').click(function(){
        $('.tower5 .wall .w2 img').toggle('200')
    })

    $('.tower5 .wall .w3').click(function(){
        $(this).toggleClass('active')
    })

    $('.tower6 .wall .window').click(function(){
        $('.tower6 .wall .window img').toggle()
    })

    $('.logo').hover(function () {
        $(this).toggleClass('active')
    })

    setTimeout(function () {
        $('.logo').addClass('active')
    }, 2000)

    $('.foundation .door img').click(function(){
        if ($(this).attr('src') === 'img/door.svg') {
            $(this).attr('src', 'img/door_open.svg')
        }
        else {
            $(this).attr('src', 'img/door.svg')
        }
    })
    $('.foundation .door__mobile img').click(function(){
        if ($(this).attr('src') === 'img/door_mobile.svg') {
            $(this).attr('src', 'img/scull.svg')
        }
        else {
            $(this).attr('src', 'img/door_mobile.svg')
        }
    })
})