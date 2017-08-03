//$(function () {
//    login(
//        var btn1 = document.getElementById('login');
//    alert(btn1.innerHTML);

//        )
    

//});


$("#login").click(function (event) {
    /* Act on the event */
    var param = {
        "Phone": $("#telno").val()
    }
    $.ajax({
        "url": "https://www.billionvouchers.com/BVwebapi/" + "BVSP_CUSTOMER_SEARCH",
        "async": true,
        "crossDomain": true,
        "type": "POST",
        "dataType": "json",
        "contentType": "application/json; charset=utf-8",
        "data":JSON.stringify(param),
        "success": function (result) {
            if (result.ResultSets[0].length > 0) {
                console.log('登陆成功');
                location.href = "home.html"
            }
            else
                console.log('登陆失败');
            }
        })
});
