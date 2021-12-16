import s from './Post.module.css'

const Post = (props) => {

  
    return (
      <div className={s.item}>
        { props.message }
        <span>{props.like}</span>
      </div>
    ) 

}

export default Post;