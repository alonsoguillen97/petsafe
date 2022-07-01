import { Pet } from "./Pet";
import { User } from "./User";


export interface PetRequest {
    id?: number,
    details?: string,
    pet_id?: number,
    user_id?: number,
    user: User,
    pet: Pet,
    q1?: string,
    q2?: string,
    q3?: string,
    q4?: string,
    q5?: string,
    q6?: string,
    q7?: string,
    q8?: string,
    q9?: string,
    q10?: string,
    q11?: string,
    q12?: string,
    q13?: string,
    q14?: string,
    
    
}