import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;

        const updateUser = { name, email }
        
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('User Updated Successfully')
            }
        })

    }
    return (
        <div>
            <h3>Updated Information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" /> <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" /> <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

Update.propTypes = {
    
};

export default Update;