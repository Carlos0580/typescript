 (()=>{

    const addNumbers = ( a: number, b: number ): number => a + b;
    const greet = ( name: string ): string => `Hola ${ name }`;
    const saveTheWorld = (): string => `El mundo esta salvado!`;


    let myFunction;


 

    //!myFunction = 16;    
    //!console.log({ myFunction});

    myFunction = addNumbers;
    console.log( myFunction( 5, 8) );

    myFunction = greet;
    console.log( myFunction( 'Carlos') );

    myFunction = saveTheWorld;
    console.log( myFunction());    


    











})()