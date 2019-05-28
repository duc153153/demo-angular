import { User } from 'src/app/shared/models/user/user.interface';

export interface AppState {
    readonly user: User[]; 
}