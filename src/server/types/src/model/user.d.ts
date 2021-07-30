/// <reference types="mongoose" />
declare type UserSchema = {
    login: string;
    password: string;
};
declare const _default: import("mongoose").Model<UserSchema, {}, {}>;
export default _default;
