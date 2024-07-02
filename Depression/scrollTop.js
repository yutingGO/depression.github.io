$(document).ready(function () {
  // 回到最上方的按鈕
    $('.toTop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({ 
            scrollTop: 0,
        }, 700)
    });
    $('aside').on('click','a',function (e) {// 監聽 aside 下的每個 a
        e.preventDefault();
        const anchor = $(this).attr('href');//取得個別點擊時的href，就是個別id的區塊
        const linkScroll = $(anchor).offset().top;// 每個區塊的最上方距離 document 最上方有多遠
        $('html,body').stop().animate({ // 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
            scrollTop: linkScroll -100 // 100是top 的高度，因為 top 設定 fixed 所以扣掉
        },700)
    });
});