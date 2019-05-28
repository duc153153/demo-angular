export class User {
    id: number;
    address: string;
    city: string;
    phone: string;
    name: string;
    introduction: string;
    email: string;
    password: string;
    avatar: string;
    status_id: number;
    // sns_id: string;
    // sns_type: string;
    // sns_data: string;
    deleted_at: any;
    activation_token: string;
    remember_token: string;
    token?: string;
    created_at: any;
    updated_at: any;


    constructor(
        id?: number,
    address?: string,
    city?: string,
    phone?: string,
    name?: string,
    introduction?: string,
    email?: string,
    password?: string,
    avatar?: string,
    status_id?: number,
    // sns_id?: string,
    // sns_type?: string,
    // sns_data?: string,
    deleted_at?: any,
    activation_token?: string,
    remember_token?: string,
    token?: string,
    created_at?: any,
    updated_at?: any
    ){
        this.id= id;
        this.address= address;
        this.city= city;
        this.phone= phone;
        this.name= name;
        this.introduction= introduction;
        this.email= email;
        this.password= password;
        this.avatar= avatar;
        this.status_id= status_id;
        // this.sns_id= sns_id;
        // this.sns_type= sns_type;
        // this.sns_data= sns_data;
        this.deleted_at= deleted_at;
        this.activation_token= activation_token;
        this.remember_token= remember_token;
        this.token= token;
        this.created_at= created_at;
        this.updated_at= updated_at;
    }
}