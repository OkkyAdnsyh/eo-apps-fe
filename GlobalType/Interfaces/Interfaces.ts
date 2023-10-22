export interface IUserInfo {
    uname : string,
    pass : string
}

export interface IUserRegisterData{
    username : string,
    email : string,
    password : string
}

export interface INotif{
    id : number,
    url : string,
    status : boolean,
    message : string
}