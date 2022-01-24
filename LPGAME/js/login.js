$(function () {
    //注册功能
    $("#register").on("submit", function (e) {
        e.preventDefault();
        alert("请求失败！请检查网络连接！")
    })
    //背景随鼠标移动
    window.addEventListener('mousemove', function (e) {

        let x = e.clientX;
        let y = e.clientY;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let setX = -(x - width / 2) * 0.1;
        let setY = -(y - height / 2) * 0.1;
        $('.box').css({
            "left": setX + "px",
            "top": setY + "px"
        })
    })
    //背景切换
    let flag = 1;
    $("#form-type").on('change', function () {
        if (flag) {
            $('.box').css({
                "background": "url(../images/02.jpg) no-repeat",
                "background-size": "cover"
            })
            flag = 0;
        } else {
            $('.box').css({
                "background": "url(../images/01.jpg) no-repeat",
                "background-size": "cover"
            })
            flag = 1;
        }
    })

    $('.form-input').on('click', function () {
        $('.form-input').removeClass('form-error');
        $('.form-input>.error-info').remove();
    })

})