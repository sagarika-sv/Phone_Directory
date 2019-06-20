$("#add").click(function(){

		var name = $("#inputName").val();
		var no = $("#inputNumber").val();
		$("input").val("");
		$("table tbody").append("<tr><td> "+name+ " </td><td> "+no+ "</td><td><span> <i class='fas fa-times-circle'></i></span></tr>");
});

$("table").on("click","span",function(event){

	$(this).closest('tr').remove();
});
