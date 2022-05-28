function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    var dias = 1;
    var dist = 7;

    if(dist<depth){
        dist = dist-2
    }
    while(dist<depth){
         dist = dist + 7
         if(dist<depth){
             dist = dist - 2
         }
         dias++        
    }
    
    console.log(dias)
      
}

