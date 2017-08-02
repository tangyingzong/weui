//$(function () {
//    login(
//        var btn1 = document.getElementById('login');
//    alert(btn1.innerHTML);

//        )
    

//});


$("#login").click(function (event) {
    /* Act on the event */
    $.ajax({
        "url": "https://www.billionvouchers.com/BVwebapi/" + "BVSP_CUSTOMER_SEARCH",
        "async": true,
        "crossDomain": true,
        "type": "POST",
        "dataType": "json",
        "contentType": "application/json; charset=utf-8",
        "data": {Phone: $("#telno").val()},
            //function () {
            //        var param = {
            //            "Phone": $("#telno").val()
            //        }
            //        console.log(param);

            //        return JSON.stringify(param);
            //    },
            "success": function (result) {
                console.log(result.ResultSets[0]);
            }
        })
});
