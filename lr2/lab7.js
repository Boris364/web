$(document).ready(function(){
	var result, x1, x2, znak='';
	$("#del").click(function(){
		result = $("#result").text();
		result = result.substring(0, result.length-1);
		$("#result").text(result);
		if ($("#result").text()=='') {
			$("#result").text('0');
		}
	});

	$("#clear").click(function(){
		$("#result").text('0');
	});

	$("#plus").click(function(){
		x1 = $("#result").text();
		if (x1.lastIndexOf('+') != x1.length-1){
			$("#result").text(x1 + '+');
			znak = "+";
		}
	});

	$("#minus").click(function(){
		x1 = $("#result").text();
		if (x1.lastIndexOf('-') != x1.length-1){
			$("#result").text(x1 + '-');
			znak = "-";
		}
	});

	$("#multi").click(function(){
		x1 = $("#result").text();
		if (x1.lastIndexOf('*') != x1.length-1){
			$("#result").text(x1 + '*');
			znak = "*";
		}
	});

	$("#split").click(function(){
		x1 = $("#result").text();
		if (x1.lastIndexOf('/') != x1.length-1){
			$("#result").text(x1 + '/');
			znak = "/";
		}
	});

	var textArea = document.getElementById('result');
	$("#ravno").click(function(){
		textArea.innerHTML = eval(textArea.innerHTML);
	});

	$("#num1").click(function(){
		if ($("#result").text() == "0") $("#result").text("1")
			else $("#result").text($("#result").text() + "1");
	});
	$("#num2").click(function(){
		if ($("#result").text() == "0") $("#result").text("2")
			else $("#result").text($("#result").text() + "2");
	});
	$("#num3").click(function(){
		if ($("#result").text() == "0") $("#result").text("3")
			else $("#result").text($("#result").text() + "3");
	});
	$("#num4").click(function(){
		if ($("#result").text() == "0") $("#result").text("4")
			else $("#result").text($("#result").text() + "4");
	});
	$("#num5").click(function(){
		if ($("#result").text() == "0") $("#result").text("5")
			else $("#result").text($("#result").text() + "5");
	});
	$("#num6").click(function(){
		if ($("#result").text() == "0") $("#result").text("6")
			else $("#result").text($("#result").text() + "6");
	});
	$("#num7").click(function(){
		if ($("#result").text() == "0") $("#result").text("7")
			else $("#result").text($("#result").text() + "7");
	});
	$("#num8").click(function(){
		if ($("#result").text() == "0") $("#result").text("8")
			else $("#result").text($("#result").text() + "8");
	});
	$("#num9").click(function(){
		if ($("#result").text() == "0") $("#result").text("9")
			else $("#result").text($("#result").text() + "9");
	});
	$("#num0").click(function(text){
		if ($("#result").text() != "0") $("#result").text($("#result").text() + "0")
	});
});
