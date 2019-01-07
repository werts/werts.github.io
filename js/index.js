(function(win, doc) {
	var indexTypeWriter = new Typewriter('#content', {
		loop: false,
		delay:2
	});
	var data = doc.getElementById('posts').innerHTML;
	
	var fix = function(num){
		return num<10?`0${num}`:`${num}`;
	};
	
	var formatTime = function(time){
		var date = new Date(time);
		
		return `${date.getFullYear()}-${fix(date.getMonth()+1)}-${fix(date.getDate())} ${fix(date.getHours())}:${fix(date.getMinutes())}:${fix(date.getSeconds())}`;
	};

	try {
		data = data.split('n+br');

		if (!data.length || data.length === 1) return;
		
		if (data.length>20) data.length = 20; //最多20条

		for (var i = 0; i < data.length - 1; i++) {
			var current = data[i];
			
			current = JSON.parse(current);
			
			indexTypeWriter.typeString('>  ')
			.typeString(`<span class="fold">${formatTime(current.time)}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
			.typeString(`<a href="${current.url}" class="command">${current.title}</a>`);
			
			if (i !== data.length-2){
				indexTypeWriter.pauseFor(3);
				indexTypeWriter.typeString('<br/>');
			}else{
				indexTypeWriter.stop();
			}
		}
		
		indexTypeWriter.start();
	} catch (e) {
		//TODO handle the exception
	}
}(window, document));
