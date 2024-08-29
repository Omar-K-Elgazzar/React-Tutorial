import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {

 
const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem impsum...', author: 'Omar E', id: 1} ,
    {title: 'Biomed research', body: 'lorem impsum...', author: 'Zak R', id: 2} ,
    {title: 'Coding made easy', body: 'lorem impsum...', author: 'David P', id: 3}
]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
        <BlogList blogs={blogs} title ="All Blogs" handleDelete ={handleDelete}/>
        

        </div>
     );
}
 
export default Home;