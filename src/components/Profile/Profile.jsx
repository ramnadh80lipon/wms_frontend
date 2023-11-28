import {Button} from 'antd'

function Profile(){
    const handleClick = () => {
        localStorage.removeItem("token");
        window.location.reload();
      }

    return(
        <div>
            <h1>Profile</h1>
            <Button onClick={handleClick}>Logout</Button>
        </div>
    )

}
export default Profile;