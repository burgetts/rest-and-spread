


// Filter out odds
const filterOutOdds = (...nums) => {
    return nums.filter( nums => nums % 2 === 0)
}

// Find min
const findMin = (...nums) =>  Math.min(...nums)

// Merge objects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// Double and return all arguments
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num*2)]

// SLICE

// Remove random element in array
const removeRandom = items => {
    let newArr = [...items]
    let index = Math.floor(Math.random() * newArr.length)
    return [...newArr.slice(0,index), ...newArr.slice(index+1)]
}

// Return new array with every item in array1 and array2
const extend = (arr1,arr2) => [...arr1,...arr2]

// Return a new object with all keys and values from obj and a new key/value pair
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}

// Return a new object with a key removed
const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}

// Combine two objects and return a new object
const combine = (obj1, obj2) => ({...obj1,...obj2})

// Return new object with modified key and value
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}