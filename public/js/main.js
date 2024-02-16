$(document).ready(function() {
    const container = document.querySelector('.fireworks');
    const fireworks = new Fireworks.default(container);
    var md = new MobileDetect(window.navigator.userAgent);
    if(md.mobile() != null){
        $('.container-fluid').css('transform','scale(2)');
    } else {
        $('.container-fluid').css('transform','scale(1)');
    }

    $('.btn-baucua').click(function() {
        var audio = new Audio("/sounds/xocdia_xoc.mp3");
        audio.play();

        if(!$('.img-baucua-first').hasClass("d-none")){
            $('.img-baucua-first').toggleClass('d-none animate__animated animate__backInDown');

        }

        if(!$('.img-baucua-second').hasClass("d-none")){
            $('.img-baucua-second').toggleClass('d-none animate__animated animate__backInDown');

        }

        if(!$('.img-baucua-third').hasClass("d-none")){
            $('.img-baucua-third').toggleClass('d-none animate__animated animate__backInDown');

        }


        $('.btn-baucua').prop("disabled", true);
        $('.animations-sencond-baucua').toggleClass('d-none');
        $('.animations-third-baucua').toggleClass('d-none');
        $('.animations-baucua').toggleClass('paused');
        $('.animations-baucua').toggleClass('d-none');

        fireworks.stop();
        $('.category-first-baucua').toggleClass('d-none');
        $('.category-sencond-baucua').toggleClass('d-none');
        $('.category-third-baucua').toggleClass('d-none');
        var animatedElement = $('.animations-baucua');
        var animationDuration = parseFloat(animatedElement.css('animation-duration')) * 3000;
        var stepDuration = animationDuration / 3;

        setTimeout(function() {
            $('.animations-baucua').toggleClass('paused');
            $('.animations-baucua').toggleClass('d-none');
            $('.animations-sencond-baucua').toggleClass('d-none');
            $('.animations-third-baucua').toggleClass('d-none');
            randomTest();
            $('.category-first-baucua').toggleClass('d-none');
            $('.category-sencond-baucua').toggleClass('d-none');
            $('.category-third-baucua').toggleClass('d-none');

            $('.btn-baucua').prop("disabled", false);
            resetPosition();
        }, animationDuration);

        console.log('Animation Duration:', animationDuration);
        console.log('Step Duration:', stepDuration);

    });


    function randomTest() {
        var first = Math.floor(Math.random() * 6) + 1;
        var second = Math.floor(Math.random() * 6) + 1;
        var third = Math.floor(Math.random() * 6) + 1;
        $('.category-first-baucua').css('background-image','url(../images/'+first+'.png)');
        $('.category-sencond-baucua').css('background-image','url(../images/'+second+'.png)');
        $('.category-third-baucua').css('background-image','url(../images/'+third+'.png)');
        $('.img-baucua-first').attr("src",'images/'+first+'.png');
        $('.img-baucua-second').attr("src",'images/'+second+'.png');
        $('.img-baucua-third').attr("src",'images/'+third+'.png');
    }

    var dragging = false,
    initialX,
    initialY,
    defaultPosition = { left: 0, top: 0 },
    offsetX = 0,
    offsetY = 0,
    minLeft = -500,
    maxLeft = 500,
    minTop = -500,
    maxTop = 500;

    var isFirst = false;
    function resetPosition() {
        initialX = 0;
        initialY = 0;
        offsetX = 0;
        offsetY = 0;
        $(".animations-third-baucua").css({
            'left': defaultPosition.left + 'px',
            'top': defaultPosition.top + 'px'
        });
        isFirst = false;
    }

    $(".animations-third-baucua").on('mousedown touchstart', function(e) {
        dragging = true;
        if (e.type === 'mousedown') {
            initialX = e.clientX - offsetX;
            initialY = e.clientY - offsetY;
        } else if (e.type === 'touchstart') {
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            initialX = touch.clientX - offsetX;
            initialY = touch.clientY - offsetY;
        }
    });

    $(document).on('mousemove touchmove', function(e) {
        if (dragging) {
            e.preventDefault();
            var clientX, clientY;
            if (e.type === 'mousemove') {
                clientX = e.clientX;
                clientY = e.clientY;
            } else if (e.type === 'touchmove') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                clientX = touch.clientX;
                clientY = touch.clientY;
            }

            var newX = clientX - initialX;
            var newY = clientY - initialY;

            if (newX < minLeft) {
                newX = minLeft;
            } else if (newX > maxLeft) {
                newX = maxLeft;
            }
            if (newY < minTop) {
                newY = minTop;
            } else if (newY > maxTop) {
                newY = maxTop;
            }

            if (newX < -250 || newX > 250 || newY < -250 || newY > 250) {
                if(!isFirst){
                    $('.img-baucua-first').toggleClass('d-none animate__animated animate__backInDown');
                    $('.img-baucua-second').toggleClass('d-none animate__animated animate__backInDown');
                    $('.img-baucua-third').toggleClass('d-none animate__animated animate__backInDown');
                    fireworks.start();
                    isFirst = true;
                }
            }

            $(".animations-third-baucua").css({
                'left': newX + 'px',
                'top': newY + 'px'
            });

            offsetX = clientX - initialX;
            offsetY = clientY - initialY;

        }
    });

    $(document).on('mouseup touchend', function() {
        dragging = false;
    });

});



