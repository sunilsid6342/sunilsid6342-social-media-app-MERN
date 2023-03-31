import React, { useEffect } from 'react'
import { PostsData } from '../../Data/PostData'
import Post from '../Post/Post'
import { useSelector,useDispatch } from 'react-redux'
import { getTimeLinePosts } from '../../actions/PostAction'
function Posts() {
  const dispatch=useDispatch()
  const user=useSelector((state)=>state.authReducer.authData)
  
  let {posts,loading}=useSelector((state)=>state.PostReducer)
  console.log("Post Id->",posts)
  useEffect(()=>{
    dispatch(getTimeLinePosts(user.user._id))
  },[])
  if(!posts) return 'No Posts';
  return (
    <div className="Posts">
        {loading
        ? "Fetching posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  )
}

export default Posts