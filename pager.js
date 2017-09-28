
	function pager(index,size,divClassName) {
		$('.'+divClassName).empty();
		var createSpan = function (content,pageNum,className){
			var span = $('<span></span>');
			span.html(content);
			span.addClass(className);
			if (pageNum > 0) {
				span.attr('pagenum',pageNum);
			}
			$('.'+divClassName).append(span);
		};
		if (index < 1){
			return;
		} else if (index == 1) {
			createSpan('首页',0,'pager-first-span-disable');
			createSpan('上一页',0,'pager-previous-span-disable');
		} else {
			createSpan('首页',1,'pager-first-span');
			createSpan('上一页',index-1,'pager-pervious-span')
		}
		if (size <= 8) {
			for (var i = 1; i <= size; i++) {
				if (i!=index) {
					createSpan(i,i,'pager-normal-span');
				} else {
					createSpan(i,0,'pager-index-span');
				}
			}
		} else {
			if (index-3 <= 1) {
				for (var i = 1; i < index + 5; i++) {
					if (i!=index) {
						createSpan(i,i,'pager-normal-span')
					} else {
						createSpan(i,0,'pager-index-span')
					}
				}
				createSpan('...',0,'pager-space-span');
				createSpan(size,size,'pager-space-span');
			} else if (index + 5 >=size) {
				createSpan('...',0,'pager-space-span');
				for (var i = index-5; i < size; i++) {
					if (i!=index) {
						createSpan(i,i,'pager-normal-span');
					} else {
						createSpan(i,0,'pager-index-span');
					}
				}
			} else {
				createSpan('...',0,'pager-space-span');
				for (var i = index-3; i <= index+5 ; i++) {
					if (i!=index) {
						createSpan(i,i,'pager-normal-span');
					} else {
						createSpan(i,0,'pager-index-span')
					}
				}
				createSpan('...',0,'pager-space-span');
				createSpan(size,size,'pager-space-span');
			}
		}
		if (index == size) {
			createSpan('下一页',0,'pager-next-span-disable');
			createSpan('尾部',0,'pager-last-span-disable');
		} else if (index<size) {
			createSpan('下一页',index+1,'pager-next-span');
			createSpan('尾页',size,'pager-last-span');
		}
	}