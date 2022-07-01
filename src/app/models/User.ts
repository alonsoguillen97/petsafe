/* Datos del objeto Usuario */

export interface User {
    id?: number,
    name?: string,
    email?: string,
    phone?:string,
    password?: string,
    api_token?: string,
    role_id?: number
    latitude?:string,
    longitude?:string,
    image?:string,
    location?:string,
    authorized?:boolean
}