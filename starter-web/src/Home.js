import { useState } from 'react'

const Home = () => {

 
const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem impsum...', author: 'Omar E', id: 1} ,
    {title: 'Biomed research', body: 'lorem impsum...', author: 'Zak R', id: 2} ,
    {title: 'Coding made easy', body: 'lorem impsum...', author: 'David P', id: 3}
]);


    return ( 
        <div className="home">
        {blogs.map((blog) => (

            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title} </h2>
                <p>Written by: {blog.author}</p>
            </div>
            
        ))}

        </div>
     );
}
 
export default Home;