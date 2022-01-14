<!doctype html>

<head>
    <title>Wordle Solver</title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="js/wordlesolver.js"></script>
    <link rel="stylesheet" href="css/index.css">
</head>

<body>
	<div id='app'>
		<table>
			<tbody>
				<tr>
					<td>Green Letters: (? for blanks)</td>
					<td><input v-model="greenLetters"></td>
				</tr>
				<tr>
					<td>Yellow Letters: (? so that we know the position doesn't work)</td>
					<td><input v-model="yellowLetters"></td>
				</tr>
				<tr>
					<td>Banned Letters:</td>
					<td><input v-model="bannedLetters"></td>
				</tr>
			</tbody>
		</table>
		<h3>Potential guesses</h3>
		<ul>
			<li v-for='guess in guesses'><span class='guess'>{{ guess.word }}</span> - {{ guess.score }}</li>
		</ul>
	</div>
</body>

</html>
