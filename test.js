var fs = require('fs');
var path = require('path')

fs.readdir(path.join(__dirname, "./assets/topicImages"), (err,items)=>{
	let out = [];
	for(var i=0;i<items.length;i++){
		var file =  path.join(__dirname, "./assets/topicImages") + "/" + items[i];
		console.log("start:" + file);
		var base = new Buffer(fs.readFileSync(file)).toString("base64");
			out.push({id:i, topic:"data:image/png;base64," + base})
		}
		//write to file

		var stream = fs.createWriteStream("topics.json");
		stream.once('open', function(fd) {
		  stream.write(JSON.stringify(out));
		  stream.end();
		});

	});
