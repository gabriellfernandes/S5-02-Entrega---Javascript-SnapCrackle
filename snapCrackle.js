function snapCrackle(x){
        let tenisPe = ""
    let variavelDeControle = "a"
    for(let i = 1; i <= x; i++) {
        variavelDeControle = "a"
        
        if(i == 1){
            if(i == x){
                tenisPe += "Snap"
            }else{
                tenisPe += "Snap"
                tenisPe += ", "
            }
            i++
        }
            
        if(i % 2 != 0){
            tenisPe += "Snap"
            variavelDeControle = "a"
        }else{
            variavelDeControle = "f"
        }
        
        if(i % 5 == 0){
            if(i == x){
                tenisPe += "Crackle"
            }else{
                tenisPe += "Crackle"
                tenisPe += ", "
            }
            variavelDeControle = "a"
        }else if(variavelDeControle == "a"){
            if(i == x){
            }else{
                tenisPe += ", "
            }
        }else{
            variavelDeControle == "f"
        }
        
        if(variavelDeControle == "f"){
            if(i == x){
                tenisPe += i
            }else{
                tenisPe += i
                tenisPe += ", "
            }
        }


    }

    console.log(tenisPe)
    
    return tenisPe
}



function snapCracklePrime(x){
    let tenisPe = ""
    let variavelDeControle = "a"

    for(let i = 1; i <= x; i++){
        variavelDeControle = "a"

        if(i == 1){
            if(i == x){
                tenisPe += "Snap"
            }else{
                tenisPe += "Snap"
                tenisPe += ", "
            }
            i++
        }
            

        if(i % 2 != 0){
            tenisPe += "Snap"
            variavelDeControle = "a"
        }else{
            variavelDeControle = "f"
        }
        
        if(i % 5 == 0){
            tenisPe += "Crackle"
            variavelDeControle = "a"
        }else if(variavelDeControle == "a"){
            variavelDeControle = "a"
        }else{
            variavelDeControle == "f"
        }

        if(i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0){
            if(i == x){
                tenisPe += "Prime"
            }else{
                tenisPe += "Prime"
                tenisPe += ", "
            }
            variavelDeControle = "a"
        }else if(i == 2 || i == 3 || i == 5 || i == 7){
            if(i == x){
                tenisPe += "Prime"
            }else{
                tenisPe += "Prime"
                tenisPe += ", "
            }
            variavelDeControle = "a"
        }else if(variavelDeControle == "a"){
            if(i == x){
            }else{
                tenisPe += ", "
            }
            variavelDeControle = "a"
        }else{
            variavelDeControle == "f"
        }
        
        if(variavelDeControle == "f"){
            if(i == x){
                tenisPe += i
            }else{
                tenisPe += i
                tenisPe += ", "
            }
        }
    }

    console.log(tenisPe)
    
    return tenisPe
    
}

// snapCracklePrime(15) deve retornar a string:
let testSnapCracklePrime = "Snap, Prime, SnapPrime, 4, SnapCracklePrime, 6, SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle"

// snapCrackle(12) deve retornar a string:
let testSnapCrackle = "Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12"


//Test para ver se ta certo  :3
if(testSnapCrackle == snapCrackle(12)){
    console.log("ta Certo!")
}else{
    console.log("ta Errado! :c")
}

if(testSnapCracklePrime == snapCracklePrime(15)){
    console.log("ta Certo! Teste versão Prime")
}else{
    console.log("ta Errado! :c Teste versão Prime")
}


