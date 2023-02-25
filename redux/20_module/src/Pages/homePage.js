import { Link,useNavigate } from "react-router-dom";
const HomePage = () =>{
    const navigate = useNavigate();
    function navigateHanlder(){
        navigate('/products');
    }
    return(
        <>
        <h1>Hey,this is home page</h1>
        <p>
            Go to <Link to="/products">the list of products</Link>
        </p>
        <p>
            <button onClick={navigateHanlder}>Navigate</button>
        </p>
        
        </>
    )
}
export default HomePage;