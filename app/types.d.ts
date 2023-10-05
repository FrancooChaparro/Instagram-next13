export interface RegisterForm { 
    username: string
    email: string
    password: string
    name: string
}
// export interface User extends Omit<RegisterForm, 'password'> {}  // EMAIL Y USERNAME
export interface LoginForm extends Omit<Omit<RegisterForm, 'username'>, 'name'> {} 

export interface Postt {
        id: number,
        title: string,
        image: string,
        liked: false,
        authorId: number
}

export interface Like {
    id: number
    authorIdLike: number 
    PostIdLike: number
    author: Author
  }
  
export interface Author {
    id: string,
    email: string,
    name: string,
    username: string,
    password: string,
    image:string,
    followers: number[],
    following: number[]
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
    likes: Like[]
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


export interface UserData {
    id: number;
    image: string;
    posts: Postt[];
    followers: number[];
    following: number[];
    name: string;
    username: string;
    seguidos: Author[];
    seguidores: Author[]
  }
