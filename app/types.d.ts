export interface RegisterForm { 
    username: string
    email: string
    password: string
}

export interface User extends Omit<RegisterForm, 'password'> {}  // EMAIL Y USERNAME
export interface LoginForm extends Omit<RegisterForm, 'username'> {} //  EMAIL Y PASSWORD


export interface tester { 
    name: string
    email: string
}


export interface Post { 
    id: number,
    title: string,
    image: string,
    liked: boolean,
    authorId: number
}