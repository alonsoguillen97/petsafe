/* Datos del objeto Usuario */

import { PetBreed } from "./PetBreed";
import { PetCategory } from "./PetCategory";
import { User } from "./User";

export interface PetLost {
    id?: number,
    user_id?: string,
    description?: string,
    location?: string,
    user?: User,
    
    
}