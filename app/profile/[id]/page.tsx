'use client'
import styles from "./UserProfile.module.scss";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { Heart } from "lucide-react";
const Profile: React.FC<{params: {id:string}}> = ({params}: {params: {id: string}}) => {
  interface IPost  {id: number, date: string, title: string, message: string, liked: boolean, likesCount: number}
  const Posts: IPost[] = [
    {id: 1, date: '17-04-2005', title: 'Я родился', message: 'Я александр федорович сегодня кончил', liked: true, likesCount: 1504},
    {id: 2, date: '17-04-2005', title: 'Я родился', message: 'Я александр федорович сегодня кончил', liked: false, likesCount: 1},
    {id: 3, date: '17-04-2005', title: 'Я родился', message: 'Я александр федорович сегодня кончил', liked: true, likesCount: 123},
    {id: 4, date: '17-04-2005', title: 'Я родился', message: 'Я александр федорович сегодня кончил', liked: false, likesCount: 10000000}
  ]

  const [posts, setPosts] = useState<IPost[]>(Posts)
  function like(item: IPost): void {
    setPosts(prevState => prevState.map((stateItem)=> {
      if (stateItem.id === item.id) {
        return {...stateItem, liked: !item.liked, likesCount: !item.liked ? item.likesCount + 1 : item.likesCount - 1}
      }
      return stateItem;
    }))
  }
  function makeLikes(likes: number): string {
    if (likes > 1E6) {
      return (likes/1E6).toFixed(1).toString() + 'M'
    }
    return likes.toString()
  }
  return (
    <>
    <div className={styles.info}>
      <div className={styles.picture}><Image src={'/user-round.svg'} width='100' height='100' alt={''}/></div>
      <div className={styles.text}>
        <p className={styles.name}>{params.id}</p>
        <div className={styles.buttons}>
          <button className={styles.addBtn}>Add Friend</button>
          <button className={styles.sendMessageBtn}>Send Message</button>
        </div>
      </div>
    </div>
      <div className={styles.posts}>
        <span>Posts:</span>
        <div>
          {posts.map( (item) => (
            <div key={item.id} className={styles.post}>
                <p className={styles.date}>{item.date}</p>
                <h4 className={styles.title}>{item.title}</h4>
                <h5 className={styles.message}>{item.message}</h5>
                <button className={styles.likes}  onClick={()=>{like(item)}}>
                  {item.liked ? <Heart fill={"#FF336C"}/> : <Heart/>}
                  <span>{makeLikes(item.likesCount)}</span>
                </button>
            </div>

          ) )}
        </div>
      </div>
      </>
  );
};

export default Profile;