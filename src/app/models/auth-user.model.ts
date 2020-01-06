export class AuthUser {
    public name: string;
    public email: string;
    public password: string;

    constructor(email?: string, password?: string, name?: string) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}
