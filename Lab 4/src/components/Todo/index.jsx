export const Todo = (props) => {


    const removeCard = (event) => {
        let todo = (event.target.parentElement.children[0].innerText);
        let desc = (event.target.parentElement.children[1].innerText)
        let first = 0;
        let newPosts = props.posts.filter((p) => {
            if (p.todo === todo && p.desc === desc){
                first += 1
            }
            if(p.todo === todo && p.desc === desc && first !== 1 ){
                return p
            }
            else if (p.todo !== todo || p.desc !== desc){
            return p
            }
            else{
                return 0
            }
    })
        // event.target.parentElement.parentElement.removeChild(event.target.parentElement)
        props.onRemove(newPosts);
    }

    return ( <div className="card m-2">
        <h3>{props.todo}</h3>
        <p>{props.desc}</p>
        <button className="btn btn-danger" onClick={removeCard}>Remove</button>
    </div> )
         
}