 (()=>{

  const fullName = ( firstName: string, lastName?: string, upper?: boolean ): string|boolean  => {
        
    if( upper ){ 

        return `${ firstName } ${ lastName || '---'}`.toUpperCase();
    } else {
        return `${ firstName } ${ lastName || '---'}`;

    }
 


  }
            
    const name = fullName( 'Tony', 'Stark' );

    console.log({ name });

})()