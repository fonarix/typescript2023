// Initial file
console.log("Begin");

type FuncReturnType<T> = T extends ((param: infer U) => infer V) ? V : undefined;

function foo(param: number): string { return '200'; };

let     retParam: FuncReturnType<typeof foo>;
const   cRetParam: FuncReturnType<typeof foo> = '200';



type FuncReturnInputParamsType<T> = T extends ((param: infer U) => infer V) ?  [V, U] : undefined;

let funcRetAndInputParams: FuncReturnInputParamsType<typeof foo>;


// { a: number; b: string } та { b: string; c: boolean }

type IntersectionTypes<A, B> = {
    [P in keyof A & keyof B]: A[P] | B[P];
};

// Test0
type ObjectA = { a: number; b: string }
type ObjectB = { b: string; c: boolean }
let commonObject0: IntersectionTypes<ObjectA, ObjectB> = { b: 'b is string property' };
console.log(commonObject0);

// Test1
type A = { a: number; x: string; z: number }
type B = { b: number; x: string; z: number}
let commonObject1: IntersectionTypes<A, B> = { z: 23, x: 'text'};
console.log(commonObject1);
















