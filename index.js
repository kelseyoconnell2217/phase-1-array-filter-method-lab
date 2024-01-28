// Code your solution here
function findMatching(array, anyName){
    function x(element){
        return element.toUpperCase() === anyName.toUpperCase()
    }
     const matchingNames = array.filter(x)
     return matchingNames
}

function fuzzyMatch(array, wholeName){
    function y(element){
        return wholeName[0] === element[0] && wholeName[1] === element[1]
    }
    const matchingLetters = array.filter(y)
    return matchingLetters
}

function matchName(array, givenName){
    function z(element){
        return givenName === element.name
    }
    const doesExist = array.filter(z)
        if (doesExist){
            return doesExist
        
    }
}
