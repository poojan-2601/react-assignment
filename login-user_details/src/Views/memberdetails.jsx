import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { Button, Navbar,NavLink } from "reactstrap"
import ProjectCard from "./cards"

export function MemberDetails({ title }) {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        fetch("https://reqres.in/api/users", requestOptions)
            .then((response) => response.json())
            .then((details) => { setUsers(details.data); console.log(details.data); })
    }, [])
    return (
        <>       
            <div>
                <h2> {title}</h2>
                <div style={{ background: "lightblue", padding: 20 }}>
			<NavLink href="/users/premiumUsers" >
				Premium Users
			</NavLink>
			<br />
			<NavLink href="/users/regularUsers"  >
				Regular Users
			</NavLink>
		</div>
                {users.map((user) => (
                    <ProjectCard
                        id={user.id}
                        first_name={user.first_name}
                        last_name={user.last_name}
                        email={user.email}
                        avatar={user.avatar}
                    />
                ))
                }
            </div>
        </>

    )
}
export default MemberDetails
