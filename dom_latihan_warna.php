<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Latihan DOM </title>
	<style>
	    html, body {
	    	height: 100%;
	    } /* untuk membuat body berada di seluruh bari html */
		body {
			text-align: center;
		}
		.kotak {
			width: 25px;
			height: 25px;
			margin: 10px auto;
		}
		.merah { background-color: red; }
		.hijau { background-color: green; }
		.biru { background-color: blue; }
		.biru-muda { background-color: lightblue; }
	</style>
</head>
<body>
	<h1>Bermain dengan Warna</h1>
	 <button type="button" id="tombolUbahWarna">Ubah Warna</button>
	 <br><br>
	 <div class="kotak merah"></div>
	 <input type="range" name="Redslider" min="0" max="255">
	 <div class="kotak hijau"></div>
	 <input type="range" name="Greenslider" min="0" max="255">
	 <div class="kotak biru"></div>
	 <input type="range" name="Blueslider" min="0" max="255">

<script src="domwarna.js"></script>
</body>
</html>