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
//wir wissen nocht nicht wie man sonderzeichen macht



export function aufgabe05(args) {
  const input = args
  const result = []
  let capitalLetters = 0


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //ähnlich wie aufgabe 2, die aufgabe soll grossbuchstaben enthalten
    const ascii = currentElement.charCodeAt(0)
   
    if (65 <= ascii && ascii <= 90) {
      return true

    } 
  }
  return false
}


export function aufgabe06 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    

const asciiCode = currentElement.charCodeAt (0)
   
 if (
  (asciiCode <= 31 || asciiCode >= 33 && asciiCode <= 64
    || asciiCode >= 91 && asciiCode <= 96 || asciiCode >= 123)
) {
return true
}

  }
  
  
  return result.join("")
}
// ähnlich wie aufgabe 10 und 5


export function  aufgabe07 (args) {
  const input = args
  const result = []

  for(let i =0; i < input.length; i++) {
    const currentElement = input[i] 

    if (currentElement === "u") {
      if (input[i+1] === "n")  {
      if (input[i+2] === "d") {
       return true
      }

    }
  }
}
return false
}
// ähnlich wie Aufgabe 20



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
  if (input.length !== 7) return false
  if (input[0] !== "#" ) return false

  for (let i = 1; i < input.length; i++) {
    const currentElement = input [i]
    const ascii = currentElement.charCodeAt (0)
    if (48 <= ascii && ascii <= 57){
      // mache nichts ; ist eine Zahl

    } else if (65 <= ascii && ascii <= 70) {
      // mache nichts ; ist A-F
    } else {
      return false
    }

  }

  return true

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
    const result = 0
    let count = 0
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
      if (currentElement === "e" ) {
       count++
       if (count === 3) {
        return i
       }

      }
    }
    return -1
  }
    

//aufgabe 3 & 12 bei 3 zählt man die es und bei 12 sucht man die Position zusammen kann man die das dritte 3 zählen
let count = input

 
 



export function aufgabe15 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement === ' ') {
      return result.join("")
      
    } 
    result.push(currentElement)
}
  return result.join("")
}
// aufgabe 1 und 8 Aufgabe ist richtig aber letzter test falsch


export function aufgabe16 (args) {
  const input = args
  const result = []
  const result2 = []
  let firstPart = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement === '$') {
      firstPart = false
      continue
    } 

    if (firstPart === true) {
      result.push(currentElement)
    } else {
      result2.push(currentElement)
    }
   
  }
return [
  result.join(""),
  result2.join("")
  ]
}
// àhnlich wie aufgabe 15, man braucht noch eine liste (Aufgabe ist richtig aber Test ist Falsch)


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


  for(let i =0; i < input.length; i++) {
    const currentElement = input[i] 

    if (currentElement === ".") {
      if (input[i+1] === " ")  {
        return true
      }

    }
  
}
  return false
}
//ähnlich wie 7 einfach mit "." statt "und"


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