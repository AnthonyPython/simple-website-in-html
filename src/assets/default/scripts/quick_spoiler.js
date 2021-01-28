jQuery(document).ready(function($){
	$("body").on("click", ".sp-head", function(event){
		$this = $(this);
		if ($this.hasClass("unfolded")) {
			$this.removeClass("unfolded");
			$this.next().slideUp("fast");
			$this.next().addClass("folded");
		} else {
			$this.addClass("unfolded");
			$this.next().slideDown("fast");
			$this.next().removeClass("folded");
		}
		c = $this.parent().children('.sp-body');
		var h = c.html();
		if (h.indexOf('<!--') == 0) {
			c.html(h.replace(/(^<!\-\-)(.*)(\-\->)/, '$2'));
		}
	});
	$("body").on("click", ".sp-foot", function(event){
		$this = $(this).closest("div.sp-body").prev();
		if ($this.hasClass("unfolded")) {
			$this.removeClass("unfolded");
			$this.next().slideUp("fast");
			$this.next().addClass("folded");
		} 
	});
});