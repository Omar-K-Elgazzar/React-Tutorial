import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

 
const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem impsum...', author: 'Omar E', id: 1} ,
    {title: 'Biomed research', body: 'lorem impsum...', author: 'Zak R', id: 2} ,
    {title: 'Coding made easy', body: 'lorem impsum...', author: 'David P', id: 3}
]);


    return ( 
        <div className="home">
        <BlogList blogs={blogs} title ="All Blogs"/>

        </div>
     );
}
 
export default Home;