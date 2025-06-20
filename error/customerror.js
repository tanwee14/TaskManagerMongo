export class custom_error extends Error {
    constructor(msg, statusCode) {
        super(msg)
        this.statusCode = statusCode
    }
};

