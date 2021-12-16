import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
    <div className={s.posts}>
     <Post message='Hi,how are you?' like='123' />
     <Post message="It's my first post" like='435' />
     <Post />
    </div>
    ) 

}

export default MyPosts;