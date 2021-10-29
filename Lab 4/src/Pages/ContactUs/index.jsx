import { Input } from "../../components/Input"
import { useState } from 'react';
import { useHistory } from "react-router";

export const ContactUs = ()=> {
    const [email, setEmail] = useState("Enter your email")
    const [message, setMessage] = useState("Enter your Message")
    const history = useHistory()
    const handleSubmit = ()=> {
        history.push("/posts")
    }

    return (<>
    <h3>Contact Us</h3>
    <form className="form" onSubmit={handleSubmit}>
    <Input label="Email" value={email} setValue={setEmail}/>
    <Input label="Message" value={message} setValue={setMessage}/>
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
    </>)
}