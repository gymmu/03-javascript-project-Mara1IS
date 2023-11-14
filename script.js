export function aufgabe01(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement === 'e') {
      result.push("")
    } else if ( currentElement === 'E') {
      result.push("")
 
  } else {
  result.push(currentElement)
  }
}
  return result.join("")
}
 
 
 
 

export function aufgabe02(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wandle das aktuelle Element in einen Grossbuchstaben um
    const capitalizedElement = currentElement.toUpperCase()
   
    //Hänge den Grossbuchstaben an das Resultat an...
    result.push(capitalizedElement)
 
  }
  return result.join("")
}


export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      count++
    } else if ( currentElement === 'E') {
      count++
 
  }
 
  }
  return count
}

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 1
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ' ') {
      count++
    }
 //ähnlich wie Aufgabe 3 es sollte anstatt e s wörter zählen
  }
  return count
}

export function aufgabe05(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //ähnlich wie aufgabe 2, die aufgabe soll grossbuchstaben enthalten
    const capitalizedElement = currentElement.toUpperCase()
   
    if (currentElement === ".") {

    } else if (currentElement === " ") {

    } else if ( currentElement === capitalizedElement) {
      return true
    }
   
 
  }
  return false
}


export function aufgabe06 (args) {
  const input = args
  const result = []


  
  return result.join("")
}



export function  aufgabe07 (args) {
  const input = args
  const result = []
  
  return result.join("")
}



export function aufgabe08(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement === 'e') {
      result.push("3")
    } else if ( currentElement === 'E') {
      result.push("E")
 
  } else {
  result.push(currentElement)
  }
}
  return result.join("")
}
//currentElement ist der Buchstabe der gerade an dr "Reihe" ist also das Jetzige element durch resent push zeigt man dem computer durch was er das jetzige element ersetzten soll. (Aufgabe 8 ähnelt Aufgabe 1)



  export function aufgabe09 (args) {
    const input = args
    const result = []
  
    let len = 0
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      len = len + 1
   
    }
  
  if( len === 6 ) {
    return true
  } else {
    return false
  }
  }

 export function aufgabe10 (args) {
  const input = args
  const result = []
  
  return result.join("")

}



  export function aufgabe11 (args) {
    const input = args
    let ascii = null

    if (input.length > 1){ //funktionswächter
   
    return null
    }

    
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      ascii = currentElement.charCodeAt (0)
      return ascii
    }
      return null
    }
  
  
  
  export function aufgabe12 (args) {
    const input = args

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
      if (currentElement === "e" ) {
       return i  
      }
    }
    return -1
  }
  

  export function aufgabe13 (args) {
    const input = args
    const result = []
    
    
    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      
    if (currentElement === "e"){
  return i
}
    }
    return -1
  }

// ähnlich wie aufgabe 9 und 12

 
export function aufgabe14 (args) {
    const input = args
    const result = []
    

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === "e") {
        count++
      } else if (currentElement === "E") {}
   
    
    return result.join("")
  }

//aufgabe 3 & 11
let count = input
}
 
 



export function aufgabe15 (args) {
  const input = args
  const result = []

  
  
  return result.join("")
}



export function aufgabe16 (args) {
  const input = args
  const result = []
  
  return result.join("")
}


export function aufgabe17(args) {
  const input = args
  const result = []
  
  return result.join("")
}


export function aufgabe18 (args) {
  const input = args
  const result = []
  
  return result.join("")
}


export function aufgabe19 (args) {
  const input = args
  const result = []
  
  return result.join("")
}



export function aufgabe20 (args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe21 (args) {
  const input = args
  const result = []
  
  return result.join("")
}


export function aufgabe22 (args) {
  const input = args
  const result = []
  
  return result.join("")
}


export function aufgabe23 (args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []
  
  return result.join("")
}


export function aufgabe25 (args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe26 (args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe27 (args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe28 (args) {
  const input = args
  const result = []
  
  return result.join("")
}