for(const property in statistics){
    if(object[property] % 2=1 || property.startsWith("r") ){
     console.log(`${property}: ${object[property]}`);
    }
}