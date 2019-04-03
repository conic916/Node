'use strict';
//Poprawne enkodowanie zapewnia, że program "zrozumie" co do niego mówimy (odczyta wartość jako string z kodowaniem UTF-8) :

process.stdin.setEncoding('utf-8');

//nasłuchiwanie na zdarzenia odczytu :
//na zdarzenie (.on) odczytu (readable) wykonujemy funkcje :

process.stdin.on('readable', function() {

    //proste echo, czyli wyświetlamy to co wpisaliśmy w aplikację :

    var input = process.stdin.read();
    process.stdout.write(input)
});