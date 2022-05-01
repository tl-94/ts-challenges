type Length<T extends readonly any[]> =  T["length"] 
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

type t = Length<typeof tesla>

// the difference between array and tuple, length of tuple is constant
//4
type t1 = (typeof tesla)["length"]
//number
let arr = [1,2,3]
type t2 =  (typeof arr)["length"]