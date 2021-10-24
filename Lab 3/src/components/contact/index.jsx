import { useHistory } from 'react-router-dom';

export const Contact = () => {

    const history = useHistory();
        
    const submitHandler = () => {

        history.push('/Users')

    }

    return (
        <div>
            <div className="input-group mb-3 row col-12">
    
                <div className="col-12 m-3">
                   <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/> 
                </div>
                <div className="col-12  m-3">
                   <input type="text" className="form-control" placeholder="Text" aria-label="Text" aria-describedby="basic-addon1"/> 
                </div>
                <button onClick={submitHandler} className="btn btn-danger col-4" > submit</button>
            </div> 
        </div>
    );
}