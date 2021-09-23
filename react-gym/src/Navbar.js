const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>react-Gym</h1>
            <div className="links">
                <a href = "/">Home</a>
                <a href = "/create" >New Routine</a>
                
            </div>
        </nav>
      );
}
 
export default Navbar;
// style = {{
//     color:"white",
//     backgroundColor: '#f1356d',
//     borderRadius: '8px'
// }}