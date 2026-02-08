export class UnauthenticatedError extends Error {
    constructor(message: string = "Unauthenticated") {
        super(message)
        this.name = "UnauthenticatedError"
    }
}