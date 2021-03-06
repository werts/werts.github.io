(function(win, doc) {
    var indexTypeWriter = new Typewriter('#content', {
        loop: false,
        delay: 20
    });
    var data = doc.getElementById('posts').innerHTML;
	var contentEle = doc.getElementById('content');

    var fix = function(num) {
        return num < 10 ? `0${num}` : `${num}`;
    };

    var formatTime = function(time) {
        var date = new Date(time.replace(/\-/g, '/'));

        return `${date.getFullYear()}-${fix(date.getMonth()+1)}-${fix(date.getDate())}`;
    };

    try {
        data = data.split('n+br');

        if (!data.length || data.length === 1) return;

        if (data.length > 20) data.length = 20; //最多20条

        for (var i = 0; i < data.length - 1; i++) {
            var current = data[i];

            current = JSON.parse(current);

            indexTypeWriter.typeString('>  ')
                .typeString(`<span class="fold">${formatTime(current.time)}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
                .typeString(`<a href="${current.url}" class="command">${current.title}</a>`);

            if (current.tags) {
                var tags = current.tags.split(',');

                for (var j = 0; j < tags.length; j++) {
                    indexTypeWriter.typeString(`&nbsp;&nbsp;<span class="tag">${tags[j]}</span>`);
                }
            }

            if (i !== data.length - 2) {
                indexTypeWriter.pauseFor(300);
                indexTypeWriter.typeString('<br/>');
				
				indexTypeWriter.callFunction(function(){
					contentEle.scrollTop += 35;
				});
            } else {
                indexTypeWriter.stop();
            }
        }
		indexTypeWriter.callFunction(function(state) {
			state.elements.cursor.style.display = 'none';
		});
        indexTypeWriter.start();
    } catch (e) {
        //TODO handle the exception
    }
}(window, document));