$(document).ready(function () {
    // スマホハンバーガーメニュークリックイベント
    $('.hamburger').click(function () {
        // ハンバーガーメニューを表示する
        $('.sp-nav').toggleClass('active');
    });
    // スマホハンバーガーメニュー内リンククリックイベント
    $('.sp-nav__item').click(() => {
        // ハンバーガーメニューを非表示にする
        $('.sp-nav').removeClass('active');
    })

    // コース・目的エリアタブクリックイベント
    $('.choose__tab').click(function () {
        let tabId = $(this).attr('id');
        // 表示中のタブを非表示にする
        $('.choose__tab').removeClass('choose__tab--active');
        $('.choose__content').removeClass('choose__content--active')
        // クリックしたタブを表示する
        $(this).addClass('choose__tab--active');
        $('#content-' + tabId).addClass('choose__content--active');
    });
});