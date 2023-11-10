import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Suggestions } from "../Suggestions/Suggestions";
import { MenuFooter } from "../MenuFooter/MenuFooter";
import Image from "next/image";
import { Postt, User, UserData } from "@/app/types";
import { useRouter } from "next/navigation";

async function getUsers() {
  const res = await fetch("/api/get_all_users", {
    method: "GET"
  });

  if (!res.ok) {
    throw new Error("La solicitud no fue exitosa");
  }

  const data = await res.json(); 
  console.log(data, "ASdas");
  return data;
  
}

const fetchDataFromLocalStorage = async (key: string, defaultValue: UserData) => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  } catch (error) {
    console.error(`Error al recuperar datos de localStorage (${key}):`, error);
    return defaultValue;
  }
};

const Menu = () => {
  const [users, setUsers] = useState([    {
    id: 13,
    email: "marvel@hotmail.com",
    name: "Marvel Studios",
    username: "marvel",
    password: "$2b$10$0wgBc0vgwAnxf73gPHwKouH/48tzVbeVLXMy0PnjLvSo2rbvyTTp.",
    image: "/images/marvel.jpg",
    followers: [],
    following: [],
    posts: [
        {
            id: 11,
            title: "",
            image: "/images/marvel4.jpg",
            liked: false,
            authorId: 13
        },
        {
            id: 9,
            title: "Background Marvel",
            image: "/images/marvel2.jpeg",
            liked: false,
            authorId: 13
        },
        {
            id: 10,
            title: "Deadpool",
            image: "/images/marvel3.avif",
            liked: false,
            authorId: 13
        }
    ],
    coments: [],
    like: [],
    seguidos: [],
    seguidores: []
},
{
    id: 14,
    email: "bill@hotmail.com",
    name: "Bill Gates",
    username: "billgates",
    password: "$2b$10$iuvjqTzdqB5NKUL0ptfj0OgNd0AZVqwLFHdkny8CkewdHo7XlHL4q",
    image: "/images/bill_gates.jpg",
    followers: [],
    following: [],
    posts: [],
    coments: [],
    like: [],
    seguidos: [],
    seguidores: []
},
{
    id: 15,
    email: "elon@hotmail.com",
    name: "Elon Musk",
    username: "elonmusk",
    password: "$2b$10$uGL6Ui7EcBy73zcSWXuc.Oewg01tlnTPtaST9jkd6Gd3AHfCHcvsG",
    image: "/images/elonmusk.webp",
    followers: [],
    following: [],
    posts: [],
    coments: [],
    like: [],
    seguidos: [],
    seguidores: []
},
{
    id: 16,
    email: "shell@hotmail.com",
    name: "Shell Box",
    username: "shell",
    password: "$2b$10$h/AgbNu4KU7tqV5V1NTP3uQ.D0Ck6KC6Y1FX/jeMTZ2Apd0MKZQ4W",
    image: "/images/shell.jpg",
    followers: [],
    following: [],
    posts: [],
    coments: [],
    like: [],
    seguidos: [],
    seguidores: []
},
{
    id: 17,
    email: "uefa@hotmail.com",
    name: "uefa champions league",
    username: "uefa",
    password: "$2b$10$lK5wxmH3xRQS4duiWx8w5OE4IqNnUndxAzN9jx8aMgip7DyJ4w42K",
    image: "/images/uefa.webp",
    followers: [],
    following: [],
    posts: [],
    coments: [],
    like: [],
    seguidos: [],
    seguidores: []
},
{
    id: 18,
    email: "marcos@hotmail.com",
    name: "Marcos antonio",
    username: "marcosaq",
    password: "$2b$10$zEWoR9ON3iOXMbYNwQ/dc.Cm/bYqVkJfEdVmhZmJSN8Q8HgF9OGDC",
    image: "/images/photo.webp",
    followers: [],
    following: [],
    posts: [],
    coments: [],
    like: [],
    seguidos: [],
    seguidores: []
}
]);
  const [index, setIndex] = useState(3)
  const router = useRouter()

  const userPrueba: UserData = {
    id: 100,
    image: "/images/profile.jpg",
    posts: [
      {
        id: 1,
        title: "string",
        image: "/images/adad.webp",
        liked: false,
        authorId: 1,
      }, {
        id: 2,
        title: "string",
        image: "/images/adad.webp",
        liked: false,
        authorId: 2,
      }, {
        id: 3,
        title: "string",
        image: "/images/adad.webp",
        liked: false,
        authorId: 3,
      },
    ],
    followers: [1, 2, 3, 4, 5, 6],
    following: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    name: "test",
    username: "usertest",
    seguidores: [],
    seguidos: []
  };

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const [userDataFromLocalStorage, usersData] = await Promise.all([
        fetchDataFromLocalStorage('userData', userPrueba),
        getUsers().catch((error) => {
          console.error('Error al obtener datos de usuarios:', error);
          return []; 
        }),
      ]);

      setUserData(userDataFromLocalStorage);
      let seeAll = await usersData.filter((e: User) => e.id !== userDataFromLocalStorage.id )
      setUsers(seeAll);
    };

    fetchData();
  }, []);


  function sett ()  {
    if (index == 3) setIndex(users.length)
    else setIndex(3)
  }
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerHeader}>
        <div className={styles.containerImage}>
          <Image
          src={userData ? userData?.image : "/images/photo.webp"}
          width={64}
          height={64}
          alt="Picture of the author"
          style={{"objectFit": "cover", objectPosition: "center"}}
        />
        </div>
        <div className={styles.containerInfo}>
          <strong>
            <span onClick={()=> router.push("/profile")}>{userData?.username}</span>
          </strong>
          <span>{userData?.name}</span>
        </div>
        <div className={styles.containerElipsis}>
         <span>Swith</span>
        </div>
      </div>
      <div className={styles.containerSuggestionsHeader}>
        <span className={styles.spanA}>Suggestions For You</span>
        <span className={styles.spanB} onClick={()=> sett()}>{index == 3 ? "See All" : "See Less"}</span>
      </div>
      <div className={styles.containerSuggestions}>
        {users.map((e: any)=> {
          return <Suggestions 
          key={e.id} 
          username={e.username}
          name={e.name}
          imagen={e.image}
          id={e.id}
          userActiveID={userData?.id || 100}
          />
        }).splice(0,index)}
      </div>
      <MenuFooter />
    </div>
  );
};

export default Menu;
