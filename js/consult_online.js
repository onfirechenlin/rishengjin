var sendOut = $("#send");
var chat = $("#talk");


sendOut.on("tap", function() {
	var len = $(".online-our").length;
	var newour = $(".online-our").eq(len-1).clone(true).css({
		'display':'block'
	});
	var sendValue = $("#sendtext").val();
	newour.find('span').text(sendValue);
	if (sendValue != "") {
		var sendOur = $(".online-our").eq(len-1);
		newour.insertAfter(sendOur);
		$("#sendtext").val("");
	}	
});
// 调用qq表情

// 绑定表情
$('.online-expression').SinaEmotion($('#sendtext'));

// 测试本地解析
function out(){
	var inputText = $('#sendtext').val();
	$('.online-our span').html(AnalyticEmotion(inputText));
}

// 宝贝评价
$('.evalu-star span').on('tap', function(){
	var len = $('.evalu-star span').length;
	for (var i = 0; i < len + 1; i++) {
		$('.evalu-star span').eq(i).css({
			'background': "url(../images/star.png) no-repeat",
			'background-size': "100%"
		})
	};
	var index = $(this).index();
	for (var i = 0; i < index + 1; i++) {
		$('.evalu-star span').eq(i).css({
			'background': "url(../images/yellow_star.png) no-repeat",
			'background-size': "100%"
		})
	};
})

var getLi = $(".graldel li");
var getlilength = getLi.length;
var atxtArr = [];
for (var i = 0; i < getlilength; i++) {
	atxtArr[i] = getLi.eq(i).children("p").children("a").text().substring(0, 22) + "...";
	console.log(atxtArr[i]);
	getLi.eq(i).children("p").children("a").text(atxtArr[i])
};

// 积分明细
/*var getPayGoodsinfo = $(".graldel li a");
		var payNeedTxt = getPayGoodsinfo.text().substring(0, 34) + "...";
		getPayGoodsinfo.text(payNeedTxt);*/