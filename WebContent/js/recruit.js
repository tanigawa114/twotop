// @author Ueki
$(function() {

	// .accordion1の中のp要素がクリックされたら
	$('.accordion1 p').click(function() {

		// クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
		$(this).next('ul').slideToggle();

	});
});

$(function() {
	$("#header").load("header.html");
});

$(function() {
	$("#footer").load("footer.html");
});
