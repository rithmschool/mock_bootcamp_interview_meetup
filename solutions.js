function letterCount(string, letter) {
    let count = 0;
    for(let i =0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
            count++
        }
    }
    return count;
}

function multiVowelCount(string, letter) {
    // confused by the wording here
}

function isPalindrome(string) {
    string = string.toLowerCase();
    let reversed = '';
    let index = string.length;
    while (index >= 0) {
        reversed += string.charAt(index)
        index--
    }
    return string = reversed
}

function sumAllValuesInAnArray(array) {
    return array.reduce( (accum, current) => {
        if (typeof current === 'number') {
            accum += current
        }
        return accum
    },0)
}

function sumAllLastValuesInSubArray(matrix) {

}

function studentCreator(first, last) {
    return {
        first: first,
        last: last
    }
    // ES6 return {first, last}
}

let people = []
function addToPeople() {
    people.unshift(studentCreator('evan', 'johnson'))
    return people
}

function findPersonByFirstName(first, obj) {
    if (obj.first === first) return true
    return false
}

function findPerson(input) {
    people.forEach(person => {
      if ( findPersonByFirstName(input, person) ) {
          return person;
      }
    })
    return false
}

function unique(array) {
    array.reduce( (accum, currrent) => {
      return accum  
    },[])
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function titleize(array) {
    return array.map( element => capitalize(element))
}

function take(array, n) {
    let index = 0;
    let output = []
    while (index < n) {
        output.push(array[index])
        index++
    }
    return output
}