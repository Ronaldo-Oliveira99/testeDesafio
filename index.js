
const input = document.querySelector("#inFrase")
const button = document.querySelector("#deleteButton")
const tableFrase = document.querySelector("#table")



function handleSubmitForm(event) {
  if (event.key !== "Enter") return;
  event.preventDefault()
  const data = getData()
  createDataTable(data)

}

function handleDeleteAll() {
  tableFrase.lastElementChild.innerHTML = ""
}


function getData() {
  const fraseValue = input.value
  if (fraseValue.trim() === "") return;
  if (fraseValue === ""){
    return
  }  

  const pali = palindrome(fraseValue)
  input.value = ""
    

  const verificaFrase = {
    frase: fraseValue,
    palindrome: pali
  }

  return verificaFrase
}

function createDataTable(verifica) {

  const tableRow = createTableRow()

  const tableDataFrase = createTableData(verifica.frase)
  const tableDataValor = createTableData(verifica.palindrome)

  function setAttribute(result) {
    if (verifica.palindrome == "Sim") {
     return result.setAttribute("data-verificado", "positivo")
      }else{
        result.setAttribute("data-verificado", "negativo")
      }
  }

  setAttribute(tableDataFrase)

  tableRow.appendChild(tableDataFrase)
  tableRow.appendChild(tableDataValor)

  tableFrase.children[1].appendChild(tableRow)

}


function createTableData(valor) {
  const data = document.createElement("td")

  if (typeof valor === "string") {

    data.textContent = valor

  } else {

    data.appendChild(valor)
  }
  return data

}

function createTableRow() {
  const row = document.createElement("tr")
  // row.classList.add("row")
  return row
}

function palindrome(str) {
  
  str1 = str.replace(/[^a-zA-Z0-9]/g, "")
  tam = str1.length

  fraseMod = str1.toUpperCase().split('')
  fraseInv = str1.toUpperCase().split('').reverse()
  iguais = true
  for (var i = 0; i < tam; i++) {
    if (fraseMod[i].charCodeAt() !== fraseInv[i].charCodeAt()) {
      iguais = false
      break
    }
   
  }
  if (iguais) {
    return "Sim"

  } else {
    return "Não"
  }

}

// input.addEventListener("keydown", function (key) {
//   if (key.keyCode == 13) {
//     handleSubmitForm(key)
//   }
// })


input.addEventListener("keydown", handleSubmitForm )
