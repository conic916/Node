
//Poprawne enkodowanie zapewnia, że program "zrozumie" co do niego mówimy (odczyta wartość jako string z kodowaniem UTF-8) :

process.stdin.setEncoding('utf-8');

//nasłuchiwanie na zdarzenia odczytu :
//na zdarzenie (.on) odczytu (readable) wykonujemy funkcje :

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    var instruction = input.toString().trim();
    switch (input !== null) {
        case (instruction === '/exit') :
            process.stdout.write('Quitting app!\n');
            process.exit();
        default :
            process.stderr.write('Wrong instruction!');
        }
});

console.log('version node.js:' + process.versions.node);
console.log('Language node is:' + process.env.lang);