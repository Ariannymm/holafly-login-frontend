export interface AuthResponseSuccess {
    user: User;
    accessToken: string;
}

export interface AuthResponseError {
    error: string; 
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface CardType {
    id: string;
    status: string;
    plan: string;
    dateStart: string
    dateEnd: string
    comsumption: { totalComsumption: number; }
    flag: string
    country: string
}

export type AuthContextType = {
    isAuthenticated: boolean,
    user: User | undefined,
    saveUser: (data: User) => void,
    saveToken: (string: string) => void,
}