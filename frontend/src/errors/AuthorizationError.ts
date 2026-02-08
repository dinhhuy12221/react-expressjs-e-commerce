export class AuthorizationError extends Error {
    constructor(message: string = "Missing permission") {
        super(message)
        this.name = "AuthorizationError"
    }
}