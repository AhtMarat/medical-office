import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614645761_25-p-fon-plyazha-dlya-fotoshopa-35.jpg' />
    </div>
    <div>Ava + description</div>
    <MyPosts />
    </div>

    
}

export default Profile;