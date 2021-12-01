export interface UsernameAvailableResponse{
    available: boolean;
}

export interface Name{
    nombre: string;
    edad: number
}

export interface NameOne{
    nombre: string;
    edad: number
}
export interface SignupCredentials {
    username: string;
    password: string;
    passwordConfirmation: string;
}

export interface SignupResponse {
    username: string;
}