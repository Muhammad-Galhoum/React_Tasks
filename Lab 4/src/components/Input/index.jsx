export const Input = (props) => {

    const handleChange = ((e)=> {
        props.setValue(e.target.value)
    });

    return (<div class="input-group mt-1">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"> {props.label} </span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={props.value} onChange={handleChange}/>
</div>)
}