const Home = () => {

    const handleClick =  () => {
        console.log('hey')
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;