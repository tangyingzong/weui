
$("#genvoucher").click(function (event) {

    alert(123123);
    var param = {
        "Phone": $("#telno").text(),
        "PIN_Code": $("#pincode").val()
    }
    $.ajax({
        "url": "https://www.billionvouchers.com/BVwebapi/" + "BVSP_VOUCHER_GENERATE",
        "async": true,
        "crossDomain": true,
        "type": "POST",
        "dataType": "json",
        "contentType": "application/json; charset=utf-8",
        "data": JSON.stringify(param),
        "success": function (result) {

            if (result.ResultSets.length == 0) {
                console.log('激活成功');
               
                location.href = "msg_success_genvoucher.html";
            }
            else if (result.ResultSets[0].length > 0) {
                console.log('激活失败：' + result.ResultSets[0][0].msg);
                location.href = "msg_warn_genvoucher.html";
                
            }
            else {

            }
        }
    })
});