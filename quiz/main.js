var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
	["Berapa 10 + 4?", "13", "14", "15", "41", "B"],
	["Berapa 11 x 11?", "121", "112", "111", "122", "A"],
	["Berapa 20 / 4?", "10", "15", "5", "2,5", "C"],
	["Berapa 14 - 5?", "10", "8", "9", "11", "C"],
	["Berapa 4 x 25", "100", "75", "25", "50", "A"],
	["Berapa 13 + 8?", "26", "24", "23", "21", "D"],
	["Berapa 27 / 9?", "4", "5", "3", "6", "C"],
	["Berapa 121 - 20?", "101", "91", "81", "111", "A"],
	["Berapa 99 + 9?", "118", "117", "107", "108", "D"],
	["Berapa 75 / 5?", "13", "15", "17", "11", "B"]
];
function _(x) {
	return document.getElementById(x);
}
function renderQuestion() {
	test = _("test");
	if (pos >= questions.length) {
		test.innerHTML = "<h2>Anda menjawab "+correct+" jawaban benar dari "+questions.length+" pertanyaan<h2>";
		test.innerHTML += "<h3>Nilai anda adalah: "+correct*10+"<h3>"
		_("test_status").innerHTML = "Tes anda telah selesai!";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Pertanyaan ke-" + (pos+1) + " dari " + questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'>"+chD+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit</button>"
}
function checkAnswer() {
	choices = document.getElementsByName("choices");
	for (var i = 0; i<choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[pos][5]) {
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
