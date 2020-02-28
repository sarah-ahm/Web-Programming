var http = require('http');

http.createServer(function(req, res) {
	const MAX = 6;
	res.writeHead(200, { 'Content-Type': 'text/html' });

	res.write('<table border="1">');	
	for(var row = 1; row <= MAX; row++){
		res.write("<tr> \n");
		for(var col = 1; col <= MAX; col++){
			var p = row * col;
			res.write("<td>" + row + " * " + col + " = " + p + "<td> \n");
		}
		res.write("</tr>");
	}

	res.write('</table>');	
  res.end();
}).listen(3000);
