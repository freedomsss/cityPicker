$(document).ready(function($) {
	// 取出所有的省
	var provinces = [];
	for (var i = 0; i < cityData.length; i++) {
		if (cityData[i].id.substr(cityData[i].id.length-4)=='0000') {
			provinces.push(cityData[i].name);
		}
	}
	$('.province  .selector-list').addClass('hide');
	for (var i = 0; i < provinces.length; i++) {
		$('.province  .selector-list ul').append('<li class="caller">'+provinces[i]+'</li>');
	}
	// 显示
	$('.province a').click(function(e) {
		e.stopPropagation();
		// console.log('provinceClicked');
		$('.province  .selector-list').removeClass('hide').addClass('listing');
		// alert(1);
	});
	// 隐藏
	$(document).click(function(e) {
		$('.province  .selector-list').removeClass('listing').addClass('hide');
		// alert(2);
	});
	// 搜索
	$('.province .selector-list .input-search').keyup(function(e) {
		/* Act on the event */
		// console.log(e.target.value);
		// var newprovinces=provinces.filter(function(item,index) {
		// 	return item == e.target.value;
		// });
		var len = provinces.length;
		var newprovinces=[];
		var reg = new RegExp(e.target.value);
		for (var i = 0; i < len; i++) {
			//运用正则进行字符串的模糊匹配
			if (provinces[i].match(reg)) {
				newprovinces.push(provinces[i]);
			}
		}
		if (!e.target.value) {
			var html2='';
			for (var i = 0; i < provinces.length; i++) {
				html2+=('<li class="caller">'+provinces[i]+'</li>');
			}
			// console.log(html2);
			$('.province  .selector-list ul').html(html2);
			return;
		}
		if (newprovinces) {
			if (newprovinces[0]) {
				var html='';
				for (var i = 0; i < newprovinces.length; i++) {
					html += ('<li class="caller">'+newprovinces[i]+'</li>');
				}	
				$('.province  .selector-list ul').html(html);
			}else{
				html='<li class="caller">没有搜索到数据</li>';
				$('.province  .selector-list ul').html('');
				$('.province  .selector-list ul').html(html);
			}
		}
	});
	$('.province .selector-list ul').on('click', 'li', function(e) {
		// event.preventDefault();
		e.stopPropagation();
		$('.province a').text($(this).text());
		$('#pro').removeClass('listing').addClass('hide');
		console.log($('#pro').hasClass('listing'));
		console.log($('#pro').hasClass('hide'));
	});
	$('#search').click(function(e) {
		e.stopPropagation();
		$('#pro').removeClass('hide').addClass('listing');
		// alert(1);
	});
});


