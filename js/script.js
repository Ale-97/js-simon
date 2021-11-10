var a = 0;
var point = 0;
var pcNumbers = [];
var playerNumbers
while (a !== 5) {
    do {
        var pcNumber = Math.round(Math.random() * 100);
    } while (pcNumbers.includes(pcNumber))

    pcNumbers.push(pcNumber);

    a++
}
alert(pcNumbers);

setTimeout(function () {
    a = 0;
    while (a !== 5) {
        playerNumbers = parseInt(prompt('inserisci uno alla volta i numeri che hai visto'));
        if (pcNumbers.includes(playerNumbers)) {
            point++;
        }
        a++
    }
    if (point === 5) {
        alert('hai vinto')
    } else {
        alert('hai perso')
    }
}, 5000)