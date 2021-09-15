$(function() {

  var imgHeight = $('.mv-inner').height(); // MV画像の高さを取得
  var bgHeight = $('.mv').height(); // MVの高さを取得

  $('.burger-btn').on('click', function() {
    if ($(window).scrollTop() < bgHeight - 50) {

      $('.bar').toggleClass('cross'); // ハンバーガーボタンのラインをクロスさせるクラス付け外し
      $('.header-nav').toggleClass('open'); // ナビゲーションの開閉クラス付け外し
      $('.burger-musk').fadeToggle(300); // マスクのフェイドインとアウト
      $('body').toggleClass('noscroll'); // ハンバーガーメニューが開いているときスクロール不可のクラスの付け外し
    } else {

      $(this).toggleClass('black'); // ハンバーガーボタンの色を変えるクラスの付け外し
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }

  });

  // スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('scroll', function() {
    
    if ($(window).scrollTop() < imgHeight - 50) {

      $('.header-ttl').removeClass('black'); // MV画像内ではクラスを外す

    } else {

      $('.header-ttl').addClass('black'); // MV画像より下にサイトロゴがくると黒くなる
    }

    if ($(window).scrollTop() < bgHeight - 50) {

      $('.burger-btn').removeClass('black'); // MV内ではクラスを外す

    } else {

      $('.burger-btn').addClass('black'); // MVより下にハンバーガーボタンがくると黒くなる
    }

  });


  });