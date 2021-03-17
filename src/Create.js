import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Elminho');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();

        setIsPending(true);
        const blog ={title, body, author};

        fetch('http://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added');
            setIsPending(false);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Add a new blog post</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title</label>
                <input 
                type="text"
                required
                value={ title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label >Blog content:</label>
                <textarea 
                 required
                 value={body}
                 onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <label >Blog Author:</label>
                <select 
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="elminho">Elminho</option>
                    <option value="omale">Omale</option>
                </select>
                { !isPending && <button>Add blog</button>}
                { isPending && <button>Adding your entry</button>}
                
                
            </form>
        </div>
     );
}
 
export default Create;