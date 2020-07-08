function makePhrases() {

    var words1 = ["24/7", "Каждый день", "Сегодня", "Постоянно", "Непрерывно"];
    var words2 = ["мы", "команда", "компания", "сотрудники", "персонал"];
    var words3 = ["работаем не покладая рук", "отдыхаем на работе", "делаем чудеса"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
    document.write(phrase);

}
makePhrases();