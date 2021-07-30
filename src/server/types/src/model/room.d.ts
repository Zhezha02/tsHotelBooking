/// <reference types="mongoose" />
declare type RoomSchema = {
    number: number;
    description: string;
};
declare const _default: import("mongoose").Model<RoomSchema, {}, {}>;
export default _default;
