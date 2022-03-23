/* Datos del objeto Usuario */

import { PetBreed } from "./PetBreed";
import { PetCategory } from "./PetCategory";
import { User } from "./User";

export interface Pet {
    id?: number,
    user_id?: string,
    category_id?: string,
    breed_id?: string,
    gender?: string,
    name?: string,
    description?: string,
    birthdate?: string,
    weight?: number,
    user?: User,
    category?: PetCategory
    breed?: PetBreed
    
}