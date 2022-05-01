type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}


//keyof array => index: 0、1、2... get index of the array
//use T[number] to iterate a array