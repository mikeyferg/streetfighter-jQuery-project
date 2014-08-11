$(document).ready(function() {
	$(".ryu").on("mouseenter", function() {
		$(this).find(".ryu-ready").show();
		$(this).find(".ryu-still").hide()
	})
	.on("mouseleave", function() {
		$(this).find(".ryu-ready").hide();
		$(this).find(".ryu-still").show()
	})
	.on("mousedown", function() {
		playHadouken();
		$(this).find(".ryu-ready").hide();
		$(this).find(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
		{'left': '300px'},
			500, function() {
			$(this).hide();
			$(this).css('left', '-212px');
			});
	})
	.on("mouseup", function() {
		$(this).find(".ryu-ready").show();
		$(this).find(".ryu-throwing").hide()

	})
	$(document).on("keydown", function(e) {
		if (e.keyCode==88) {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").show();
		}
	})
		$(document).on("keyup", function() {
			$(".ryu-still").show();
			$(".ryu-cool").hide();	
	})
})

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}