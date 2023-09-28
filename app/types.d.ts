export interface RegisterForm { 
    username: string
    email: string
    password: string
    name: string
}

export interface User extends Omit<RegisterForm, 'password'> {}  // EMAIL Y USERNAME
export interface LoginForm extends Omit<Omit<RegisterForm, 'username'>, 'name'> {} 
export interface Postt {
        id: number,
        title: string,
        image: string,
        liked: false,
        authorId: number
}
export interface Author {
    id: number,
    email: string,
    name: string,
    username: string,
    password: string,
    image:string
}

export interface Coment { 
        id: number,
        content: string,
        authorIdComent: number,
        comentPostId: number,
        author: Author  
}

export interface Post { 
    id: number,
    title: string,
    image: string,
    liked: boolean,
    authorId: number
    author: Author
    comments: Coment[]
}

export interface User { 
        id: number,
        email: string,
        name: string,
        username:string,
        password: string,
        image: string,
        posts?: Postt[]
        coments?: [
        {
            id: number,
            content: string,
            authorIdComent: number,
            comentPostId: number
        }
        ]
}