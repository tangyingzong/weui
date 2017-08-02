//$(function () {
//    login(
//        var btn1 = document.getElementById('login');
//    alert(btn1.innerHTML);

//        )
    

//});


$("#login").click(function (event) {
    /* Act on the event */
    $.ajax({
        "url": sysSettings.domainPath + "BVSP_CUSTOMER_SEARCH",
        "async": true,
        "crossDomain": true,
        "type": "POST",
        "dataType": "json",
        "contentType": "application/json; charset=utf-8",
        "data": function (data) {
            var param = {
                "token": SecurityManager.generate(),
            }
            alert(data);
        }
    })
});