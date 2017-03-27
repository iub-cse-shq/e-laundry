$(document).ready(function(){
	$("#order").hide();
		$("#pickup").hide();
		$("#package").hide();
		$("#pr").hide();

	$("#profile").click(function(){
		$("#order").hide();
		$("#pickup").hide();
		$("#package").hide();
		$("#pr").show();
    	
});
	$("#mypackage").click(function(){
		$("#order").hide();
		$("#pr").hide();
		$("#pickup").hide();
		$("#package").show();
    	
});
	$("#pickuprequest").click(function(){
		$("#order").hide();
		$("#pr").hide();
		$("#package").hide();
		$("#pickup").show();
    	
});
	$("#orderinfo").click(function(){
		$("#pickup").hide();
		$("#pr").hide();
		$("#package").hide();
		$("#order").show();
    	
});


});