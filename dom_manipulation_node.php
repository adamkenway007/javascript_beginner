<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>DOM Manipulation Node</title>
<style>
	* {
		border: 2px solid #dedede;
		padding: 15px;
		margin: 15px;
	}
	html {
		margin: 0;
		padding: 0;
	}
	body {
		max-width: 600px;
		margin: 30px auto;
		font-family: sans-serif;
		color: #333;
	}
/*	p { color: green; }
	section#b ul li:nth-child(2) { background-color: orange; }*/
</style>
</head>
<body>
	<h1 id="judul">Hello World</h1>
	<div id="container">
		<section id="a">
			<p class="p1">paragraf 1</p>
			<a href="http://instagram.com/adambacktiarazhari">Adam Backtiar Azhari</a>
			<p class="p2">paragraf 2</p>
			<p class="p3">paragraf 3</p>
		</section>
		<section id="b">
			<p>paragraf 4</p>
			<ul>
				<li>item 1</li>
				<li>item 2</li>
				<li>item 3</li>
			</ul>
		</section>
	</div>

<script src="dommannode.js"></script>
</body>
</html>