"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let powerheroes;
    (function (powerheroes) {
        powerheroes[powerheroes["acuaman"] = 0] = "acuaman";
        powerheroes[powerheroes["batman"] = 1] = "batman";
        powerheroes[powerheroes["flash"] = 5] = "flash";
        powerheroes[powerheroes["superman"] = 100] = "superman";
    })(powerheroes || (powerheroes = {}));
    const fuerzaSuperman = powerheroes.superman;
    const fuerzaBatman = powerheroes.batman;
    const fuerzaAcuaman = powerheroes.acuaman;
    const fuerzaFlash = powerheroes.flash;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
        return;
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map