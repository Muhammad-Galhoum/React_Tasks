import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { users } from '../Users/users';

export const UserDetails = ()=> {
    const {id} = useParams()
    const user = users.find((u)=> u.id === +id)

    return(
        <>
        <h4>Hello, {user.name}</h4>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
        <Link to="/users">Back</Link>
        </>
    )
}