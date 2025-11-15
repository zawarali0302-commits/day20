import { useState } from "react"

type UserFormData ={
    username: string;
    nationality: string;
}


const UserCardComponent = () => {
    //despite of making two different states for username and nationality we made only one state formdata
    const [formData, setFormData] = useState<UserFormData>({
        username: "testUser",
        nationality: "Pakistani"
    })
    const [user, setUser] = useState<UserFormData[]>([])
    
    
    // const [username, setUsername] = useState("testUser");
    // const [nationality, setNationality] = useState("Pakistan");
    const handleAddUser = (event) => {
        event.preventDefault();
        console.log('in handle Event')
        console.log("formData", formData)
        setUser([...user, formData])
    }
    console.log("users", user)
    return (
        <div className="flex p-2 justify-center">
            <form onSubmit={handleAddUser} >
                <h1>Add User Component</h1>
                <label htmlFor="username"></label>
                <input
                    className="border"
                    id="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    //spread the form data using spread operator
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })} />

                <label htmlFor="nationality"></label>
                <input
                    className="border"
                    type="text"
                    name="nationality"
                    id="nationality"
                    value={formData.nationality}
                    onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                />
                <button className="px-4 py-2 rounded bg-blue-500" type="submit">Add User</button>
            </form>
        </div>
    )
}

export default UserCardComponent
