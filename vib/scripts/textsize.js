// Text Size Changer

	if($.cookie('TEXT_SIZE')) {
				$('body').addClass($.cookie('TEXT_SIZE'));	

			}
			$('.resizer a').click(function() {
				var textSize = $(this).parent().attr('id');
				$('body').removeClass('small medium large').addClass(textSize);
				$.cookie('TEXT_SIZE',textSize, { path: '/', expires: 10000 });
				return false;
			});
