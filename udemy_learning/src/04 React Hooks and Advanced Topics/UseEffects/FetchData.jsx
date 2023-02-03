import React,{ useState, useEffect  }  from 'react'
const url = "https://api.github.com/users";

const FetchData = () => {
    const [users,setUsers] = useState([]);
    const getUsers = async() =>{
        const response = await fetch(url);
        const userData = await response.json();
        console.log("userData",userData);
        setUsers(userData);
    }

    useEffect(()=>{
        getUsers();
    },[])
  return (
    <>
    <ul className='users'>

    {
        users.map((val)=>{
            const {id,html_url,login,avatar_url} = val;
            return (
                <>
                    <li key={id}>
                        <img src={avatar_url} alt={login}/>
                        <div>
                            <h6>{login}</h6>
                            <h6>{html_url}</h6>
                        </div>
                    </li>
                </>
            )
        })
    }
    </ul>
    </>
  )
}

export default FetchData