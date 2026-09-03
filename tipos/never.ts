 (() =>{

const error = ( message: string ):( never | number ) => {
    
    

        throw new Error( message );
    
    
    return 1;


}

console.log( error );




})()


