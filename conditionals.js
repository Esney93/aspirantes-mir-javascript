function calcolor (Num)

{
    

    if (Num === 1) {
        color = "El color es negro";
       return(color)

    
    } else { if (Num == 2) {
        color = "El color es blanco";
      return(color)

    } else { if (Num === 3) {
        color = "El color es azul";
      return(color)

    } else {
        color = "El color es verde";
    return(color)
       
    }
    
}
}
}

console.log(calcolor(1)) // "El color es negro"
console.log(calcolor(2)) // "El color es blanco"
console.log(calcolor(3)) // "El color es azul"
console.log(calcolor(8)) // "El color es verde"