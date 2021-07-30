/// <reference types="mongoose" />
declare type BookingSchema = {
    login: string;
    password: string;
};
declare const _default: import("mongoose").Model<BookingSchema, {}, {}>;
export default _default;
