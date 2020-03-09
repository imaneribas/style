export class UserModel {
    public id?: number;
    public userName: string;
    public firstName?:string;
    public lastName?: string;
    public email?: string;
    public phoneNumber?: string;
    public roles?: string[];
    public DateOfRegistration?:string;
    public mail_Confirmation?:boolean;
    //public Action:string
    
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    constructor(id?: number, userName?: string, lastName?: string, firstName?: string,email?: string,  phoneNumber?: string, roles?: string[],mail_Confirmation?:boolean) {

        this.id = id;
        this.userName= userName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.roles = roles;
        this.mail_Confirmation=mail_Confirmation;
    }
}