/* 定义地点栏点击事件 */

$("#locations_list>ul>li").click(function(){
	 $(this).children("span").toggle();
})
/* 定义回到顶部 */
$("#huiding").click(function(){
	 $("body,html").animate({"scrollTop":0},300);
})