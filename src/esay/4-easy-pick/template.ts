type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
} 

//[P in K] 遍历K这个union
//T[P] 对象取值
//extends 泛型约束