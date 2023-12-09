
import { Button } from 'antd'; 

function Profile(){
    const handleClick = () => {
        
        localStorage.removeItem("token");
       
        window.location = "/login"; 
    }

    return (
        <>
            <Button type="primary" onClick={handleClick}>Logout</Button>
        </>
    );
}

export default Profile;
