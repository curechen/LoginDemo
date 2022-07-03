$(document).ready(function () {
    $(".box").animate({
        opacity: '1',
        top: '-=8%'
    }, 800);
    // $(".inputBox input").blur(function () {
    //     var val = $("input").val();
    //     if (val == "") {
    //         $("input").attr("placeholder", "文本不能为空！")
    //     }
    // });
    $(".login").click(function () {

        username = $(".username").val();
        password = $(".password").val();
        $.ajax({
            url: "http://39.106.140.83/test/",
            type: "POST",
            data: {
                "username": username,
                "password": password
            },
            // function()括号中要写data
            success: function (data) {
                alert(data.msg)
            },
            error: function () {
                alert("请求失败")
            },
            dataType: "json"
        })

    });
});