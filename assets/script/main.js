$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.sp-nav').toggleClass('active');
    });

    $('.choose__tab').click(function () {
        let tabId = $(this).attr('id');

        $('.choose__tab').removeClass('choose__tab--active');
        $(this).addClass('choose__tab--active');

        $('.choose__content').removeClass('choose__content--active')
        $('#content-' + tabId).addClass('choose__content--active');
    });
});