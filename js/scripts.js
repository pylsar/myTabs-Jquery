$(document).ready(function($) {
	//при загрузке
	$(".tab_content, .tab_content2, .tab_content3").hide();
	$(".items_tabs__vue li:first").addClass("items_tabs__vue_active").show().find("label input:radio").attr("checked",""); 
	$(".items_tabs__height li:first").addClass("items_tabs__height_active").show().find("label input:radio").attr("checked","");
	$(".items_tabs__constructors li:first").addClass("items_tabs__constructors_active").show().find("label input:radio").attr("checked","");
	$(".tab_content:first, .tab_content2:first, .tab_content3:first").show();

	

 	 //при клике
  		//вид подключения
	$(".items_tabs__vue li").click(function() {
		$(".items_tabs__vue li").removeClass("items_tabs__vue_active"); // удаляем активные классы
		$(".items_tabs__vue li").removeClass("items_tabs_border"); // удаляем обводку таба
		$(".items_tabs__check_vue_box, .items_tabs__check_vue_sign").removeClass("items_tabs__check_vue_active"); // удаляем галочку
		
		$(".items_tabs__vue li").find("label input:radio").attr("checked",""); // ищем класс с checked
		$(this).addClass("items_tabs__vue_active").find("label input:radio").attr("checked","checked");
		$(this).addClass("items_tabs_border"); // добавляем обводку табу
		$(".items_tabs__vue_active .items_tabs__check_vue_box, .items_tabs__vue_active .items_tabs__check_vue_sign").addClass("items_tabs__check_vue_active"); // добавляем галочку
		$(".tab_content").hide(); // прячем содержимое контента
		var activeTab = $(this).find("label input:radio").val(); //Find the href attribute value to identify the active tab + content
		$("#" + activeTab).fadeIn(); //Fade in the active ID content	
		return false;
	});
	
		// высота	
	$(".items_tabs__height li").click(function() {
		$(".items_tabs__height li").removeClass("items_tabs__height_active");
		$(".items_tabs__height li").removeClass("items_tabs_border");
		$(".items_tabs__check_height_box, .items_tabs__check_height_sign").removeClass("items_tabs__check_height_active");
		
		$(".items_tabs__height li").find("label input:radio").attr("checked","");
		$(this).addClass("items_tabs__height_active").find("label input:radio").attr("checked","checked");
		$(this).addClass("items_tabs_border");
		$(".items_tabs__height_active .items_tabs__check_height_box, .items_tabs__height_active .items_tabs__check_height_sign").addClass("items_tabs__check_height_active");
		$(".tab_content2").hide(); 
		var activeTab = $(this).find("label input:radio").val(); //Find the href attribute value to identify the active tab + content
		$("#" + activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});	
		// Конструкция радиатора
	$(".items_tabs__constructors li").click(function() {
		$(".items_tabs__constructors li").removeClass("items_tabs__constructors_active");
		$(".items_tabs__constructors li").removeClass("items_tabs_border");
		$(".items_tabs__check_constructor_box, .items_tabs__check_constructors_sign").removeClass("items_tabs__check_constructor_active");
		
		$(".items_tabs__constructors li").find("label input:radio").attr("checked","");
		$(this).addClass("items_tabs__constructors_active").find("label input:radio").attr("checked","checked");
		$(this).addClass("items_tabs_border");
		$(".items_tabs__constructors_active .items_tabs__check_constructor_box, .items_tabs__constructors_active .items_tabs__check_constructors_sign").addClass("items_tabs__check_constructor_active");
		$(".tab_content3").hide(); 
		var activeTab = $(this).find("label input:radio").val(); //Find the href attribute value to identify the active tab + content
		$("#" + activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});	

		

// переключаем урл	

		$(".items_tabs li").each(function(i){ 
		    $("li").click(function(){
		    var $one = $(".items_tabs__vue_active");
		    var $two = $(".items_tabs__height_active");
		    var $three = $(".items_tabs__constructors_active");
// убираем # из урла	
		    var $hash ="/newUrl/" + "&" + $one[i].id + "&" + $two[i].id + "&" + $three[i].id;
				if (window.location.search != $hash) {
				history.pushState("", "", $hash);
			}
		});
	});	    
});