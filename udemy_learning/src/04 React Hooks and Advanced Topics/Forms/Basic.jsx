import React,{useState} from 'react'

const Basic = () => {
    const [data,setData] = useState({fname:'',email:'',age:''});
    const [input,setInput] = useState([]);

    const handleChange = (e) =>{
        // e.preventDefault();
        const name = e.target.name;
        console.log("🚀 ~ file: Basic.jsx ~ line 10 ~ handleChange ~ name", name)
        const value = e.target.value;
        setData({...data,[name]:value});
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(data.fname && data.email && data.age){
            const newData = {...data,id: new Date().getTime().toString()}
            setInput([...input,newData]);
            setData({fname:'',email:'',age:''});
        }else{
            alert("Fields are required")
        }
    };

    return (
      <>
    <article>
        
        <form action="" className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='name'> Name </label>
                <input type="text" id="name" name="fname" value={data.fname} onChange={handleChange}/>
            </div>
            <div className='form-control'>
                <label htmlFor='email'> Email </label>
                <input type="email" id="email" name="email" value={data.email} onChange={handleChange}/>
            </div>
            <div className='form-control'>
                <label htmlFor='age'> Age </label>
                <input type="number" id="age" name="age" value={data.age} onChange={handleChange}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Add</button>
        </form>

        {
            input.map((val)=>{
                const {id,fname,email,age} = val;
                return (
                    <div className='item' key={id}>
                        <br></br>
                        <h4>Name:-- {fname}</h4>
                        <h4>Email:-- {email}</h4>
                        <h4>Age:-- {age}</h4>
                        <hr/>
                    </div>
                )
            })
        }
    </article>
      </>
  )
}

export default Basic