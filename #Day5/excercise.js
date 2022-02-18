/* First we create the base class to declare the array ordering... */
class ArrayOrdering {
  constructor(baseObject, baseArray) {
    this.baseObject = baseObject
    this.baseArray = baseArray
  }

  sortArray() {
    return this.baseObject.order(this.baseArray)
  }
}

/* Then we create a class to code a method to sort arrays in ascendant order... */
class AscendantOrdering {
  order(array) {
    return array.sort((a, b) => a - b)
  }
}

/* And a class to code a method to sort arrays in descendant order. */
class DescendantOrdering {
  order(array) {
    return array.sort((a, b) => b - a)
  }
}

/* We declare two arrays to test our classes... */
let 
  disorderedNumbers = [14,18,45,12,35,78,11,14],
  unorderedNumbers = [14,18,45,12,35,78,11,14]

/* Then we instance the ordering classes to approach his sorting methods... */
let 
  ascendantOrdering = new AscendantOrdering(),
  descendantOrdering = new DescendantOrdering()

/* And  finally, we instance the ordering styles with our arrays. */
let 
  arraySorting = new ArrayOrdering(descendantOrdering, disorderedNumbers),
  arrayOrdering = new ArrayOrdering(ascendantOrdering, unorderedNumbers)

arraySorting.sortArray()
arrayOrdering.sortArray()

console.log(arraySorting, arrayOrdering)

/*
 This way we can modify the class ordering style without rewrite the code at the core class, respecting the OCP principle in every moment! 
 If we want to sort the arrays in any other ways, we just gotta create new classes with new ordering styles.
 */
