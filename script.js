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
// letzter test mit ascii man muss es mehrfach filtern desshalb ist es schwer


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
// ähnlich wie Aufgabe 20 letzter Test ist falsch



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
// ähnlich wie aufgabe 15, man braucht noch eine liste (Aufgabe ist richtig aber Test ist Falsch)


export function aufgabe17(args) {
 const input = args 
  const result = []
  let currentPhrase = []
  let first = true 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === ',' && first === true) {
      // Wenn wir hier sind haben wir einen ',' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
      // wenn ein Komma gefunden wird und den ersten Teikl der liste wahr ist, dann passiert das was in den Klammern drinn ist.
      result.push(currentPhrase.join(""))
      currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
      first = false
   
    } else {
      // Wenn wir keinen ',' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
      currentPhrase.push(currentElement)
    }
  }
  result.push(currentPhrase.join(""))
  return result
//der Text kommt von aussen wegen dem args, man bracht keinen Text in der Aufgabe
}
// ähnlich wie aufgabe 16
// Aufgabe richtig aber Tests falsch hat herr Geissmann gesagt




export function aufgabe18 (args) {
  const input = args
  const phrases = []
  
  let currentPhrase = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === ' ') {
      // Wenn wir hier sind haben wir einen '.' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
      phrases.push(currentPhrase.join(""))
      currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
    } else {
      // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
      currentPhrase.push(currentElement)
    }
  }

  phrases.push(currentPhrase.join(""))
  return "Sie heissen " + phrases[0] + " und sind " + phrases[1] + " Jahre alt"

}
//ähmlich wie Aufgabe 17
// letzte 2 Test zu schwer weil es spezial Fälle gibt.



export function aufgabe19 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    result.push(currentElement)
    result.push(currentElement)
  }
  
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

  let positionOfLastE = -1
  // von aufgabe 13 kopiert zeigt wie man eine eingabe rückwerts liest.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[input.length - i - 1]
    result.push(currentElement)
  }
  return result.join("")
}
// ähnlich wie aufgabe 13

export function aufgabe22 (args) {
 
  const input = args
  const result = []
  let firstPart = true
   
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    if (firstPart === true) {
      result.push("_")
    } else {
      result.push(currentElement)
    }
   
   
    if (currentElement === 'k') {
      firstPart = false
    }
   
  }
  return result.join("")
  }

// kombination von 1 & 

export function aufgabe23 (args) {
  const input = args;
  const result = [];

  if (input.length === 0) {
    return ''; //die eingabe sollte leer zurück kommen
  }

  const firstChar = input.charAt(0);

  result.push(firstChar); // das erstes Zeichen soll am anfang der eingabe angehangen werden

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    result.push(currentElement);
  }

  result.push(firstChar); // das erste zeichen sollte am ende der eingabe angehängt werdem.

  return result.join('');
}


export function aufgabe24 (args) {
  const input = args
  const result = []
 
  if (input.length === 1) return input
  const firstElem=input[0]
  const lastElem=input[input.length-1]
 
  result.push(lastElem)
  for (let i = 1; i < input.length -1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
 
result.push(firstElem)
  return result.join("")
}
//ähnlich  wie aufgabe 21 man muss das 1. und letze zeichen umkehrern


export function aufgabe25 (args) {
  const input = args
  const result = []
  // das mittlere zeichen soll gelöscht werden
 
if (input.length % 2 === 0 ) {
// prüft ob Input.lenght gerade ist
const pos = input.length / 2 -1
 // brauchen -1 um auf die richtige position zu kommen weil man sonst ein zeichen zu weit währe

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
if(i === pos || i === pos + 1) {

} else {
  result.push(currentElement)
}
}
} else {

 // Fall wenn es ungerade ist
  const pos = Math.floor( input.length / 2)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === pos) {
    
   } else {
result.push(currentElement)

  }
}
}
  return result.join("")
}

export function aufgabe26 (args) {
  
const text = args
    const list = text.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
    // args anstatt text, weil wir keinen Text in der Aufgabe haben sondern der Text von aussen kommt desshalb auch kein const text
    
    for (let i = 0; i < list.length - 1; i++) {
      const currentElement = list[i]
      const nextElement = list[i+1]
      if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
        // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
        const tmp = list[i+1]
        list[i+1] = list[i]
        list[i] = tmp
        i = 0 // starte von vorne wenn etwas vertauscht wurde.
      }
    }
    const result = list.join("")
    return result
  }




export function aufgabe27 (args) {
  const input = args
  if (input.length === 0) return false
 
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt (0)
    if(48 <= ascii && ascii <= 57) {
      // mache nichts; ist eine Zahl
    } else {
      return false
    }
 
  }
  return true
}

export function  aufgabe28 (args) {
  const input = args
  const zahlen = input.split(' ')
 
  if (zahlen.length === 2 && !isNaN(zahlen[0]) && !isNaN(zahlen[1])) {
    const zahl1 = parseFloat(zahlen[0]);
    const zahl2 = parseFloat(zahlen[1]);
   
    const summe = zahl1 + zahl2;
    return `${summe}`;
} else {
    return null
}
}






// Bubble sort


export function bubbleSort (args) {
 
  const list = args.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  console.log(result)
  
  return result

}

// die ersten Buchstaben sind nicht richtig sortiert