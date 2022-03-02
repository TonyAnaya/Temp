function multi(input){
    
    let arre = input.split(",");
    let a = parseInt(arre[0])
    let b = parseInt(arre[1])
    let result = 0
    let nega = false
    let negb = false
    
    if (a < 0){
        a = a * (-1)
        nega = true
    }
    if (b < 0){
        b = b * (-1)
        negb = true
    }
    
    
    
    for( i= 0; i < a ; i++){
        result = result + b
    }
    if (nega){
        result = result * (-1)
    }
    if (negb){
        result = result * (-1)
    }

return result
    
}
console.log(multi("20,4"))






function contar(input){
    let arre = input.toLowerCase().split(" ").sort()
    let palabra = ""
    let cont = 1
    let temp_cont = 1
    let temp_pal = arre[0]
    let j = 0
    for(i = 1; i < arre.length; i++){
        if (arre[i] == arre[j]) {
            cont = cont + 1
        }else{
            if(cont > temp_cont){
                temp_cont = cont
                temp_pal = arre[i-1]
            }
            
            j = i
            cont = 1
        }
    }
    cont = temp_cont
    palabra = temp_pal
    return(palabra+","+cont)
    
}

console.log(contar('En este texto, voy a repetir la palabra "a" solo una vez y aqui va: a'))

function conti(input){
    let arrey = input.split(",").sort().reverse()
    let nume = parseInt(arrey[0])
    let cont = 1
    for(i = 1; i < arrey.length; i++){
        arrey[i] =parseInt(arrey[i])
        if (arrey[i] == nume ){
            cont = cont + 1
        }
    }
    return cont
    
    
}
console.log(conti("4,5,4,1,3,5"))