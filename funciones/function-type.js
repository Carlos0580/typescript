"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    //!myFunction = 16;    
    //!console.log({ myFunction});
    myFunction = addNumbers;
    console.log(myFunction(5, 8));
    myFunction = greet;
    console.log(myFunction('Carlos'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map