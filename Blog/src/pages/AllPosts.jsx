import React, {useState, useEffect} from 'react'
import { PostCard, Container } from '../components'
import appwriteService from '../appwrite/config'

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
<Container>
    <div class="flex flex-wrap ">
{
    posts.map((post) => {
        <div className='p-2 w-1/2' key={post.$id}>

            <PostCard   post={post} />
        </div>

    })
}
    </div>
    
</Container>
        
    </div>
  )
}

export default AllPosts