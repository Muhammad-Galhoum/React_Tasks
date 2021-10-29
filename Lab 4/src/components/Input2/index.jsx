export const Input2 = (props) => {

    const handleChange = ((e)=> {
        props.setValue(e.target.value)
    });

    return (
  <input type={props.type} class="form-control" placeholder={props.placeholder} value={props.value} aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange}/>
)
}