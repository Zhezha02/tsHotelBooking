/// <reference types="mongoose" />
declare const _default: {
    Room: import("mongoose").Model<{
        number: number;
        description: string;
    }, {}, {}>;
    Booking: import("mongoose").Model<{
        login: string;
        password: string;
    }, {}, {}>;
    User: import("mongoose").Model<{
        login: string;
        password: string;
    }, {}, {}>;
};
export default _default;
