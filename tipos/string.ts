 (() =>{

    const goku: string = 'Goku';
    const gohan: string = "Gohan";
    const goten: string = `Goten`;


    console.log( `I'm ${ gohan }`);    
    console.log( goku.toUpperCase() );

    console.log( goten[6]?.toUpperCase() || 'No esta presente');



 })()