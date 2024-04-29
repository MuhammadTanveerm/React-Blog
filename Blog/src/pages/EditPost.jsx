import React from 'react'
import { PostForm, Container} from '../components'
import appwriteService from '../appwrite/config'
import { useState , useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
const EditPost = () => {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate= useNavigate()
    useEffect(() => {
      if(slug){
        appwriteService.getPost(slug).then((post)=> {
        if(post)
        {
            setPosts(post)
        }})
      }
      else{
        navigate('/')
    } }, [slug, navigate])
    
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>

    </div>
  ) : null
}

export default EditPost