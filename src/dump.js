<div className="content">
        <h1>App component</h1>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{23}</p>
        <p>{"Hello"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random()*10}</p>
        <a href={link}>jumia</a>
</div>

const title = "Welcome to the blog";
const likes = 40;
// const person = {name:"josh",age:12}
const link = "https://www.jumia.com";
const handleClick = (name,e)=>{
        console.log("Hello"+name, e.target);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e)=>handleClick("Josh",e)}>Click</button>
        </div> 

    );

    const [name,setName]= useState("josh");
    const [age,setAge]= useState(20);

    const handleClick = ()=>{
        setName("peter");
        setAge(10);   
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click</button>
        </div> 

    );

    <button onClick={()=>setName("omale")}>Chang name</button>
    <p>{name}</p>
{/* <BlogList blogs={blogs.filter((blog)=>(blog.author==="Elminho"))} title="Elminho's blogs!" /> */}
const handleDelete=(id)=>{
    const newBlogs = blogs.filter(blog=>blog.id!==id);
    setBlogs(newBlogs);
}

const [name, setName] = useState("abobo")