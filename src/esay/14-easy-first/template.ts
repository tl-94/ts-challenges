// type First<T extends any[]> = T extends [] ? never : T[0]

// by length
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

//by check first element
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type age = [1,2,3];
//union
type r = age[number]

//by infer
type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never

type MyTail<T extends any[]> = T['length'] extends 0 ? never :
T extends [...infer rest, infer last] ? last : never

type ttt = MyTail<[1,2,22]>
