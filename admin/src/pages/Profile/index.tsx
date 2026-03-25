import { useContext } from "react"
import { AdminContext } from "../../App"
import "./index.css"

const Profile = () => {
    const { user } = useContext(AdminContext)
  return (
    <div className="profile">
      <h3 className="profile-name">{user.username}</h3>
    </div>
  )
}

export default Profile
