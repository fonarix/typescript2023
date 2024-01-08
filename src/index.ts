// Initial file
console.log("Begin");

class UserAddress {
    streetName: string;
    houseNumber: number | string;
    city: string;
};

interface IUser {
    firstname: string;
    lastName: string;
    bday: Date;
    userAddress: UserAddress;
};

type DeepReadonly<T> = {
    readonly [K in keyof T]: DeepReadonly<T[K]> ;
};

type UpdateUser = DeepReadonly<IUser>;

let usr: UpdateUser = null;
//usr.userAddress.houseNumber = "470b"; // Now error

type UpperCaseKeys<T> = {
    [K in keyof T & string as `${Uppercase<K>}`]: T[K];
};

type UpperCaseKeysUser = UpperCaseKeys<IUser>;

let upperUser: UpperCaseKeysUser = null;
upperUser.FIRSTNAME = "theName";


type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};

type DeepReadonlyUser = DeepReadonly<IUser>;
let deepReadonlyUser: DeepReadonlyUser = null;
//deepReadonlyUser.userAddress.city = "123";



//ObjectToPropertyDescriptor






