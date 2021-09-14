import { members } from "../../helper.js"
import './style.css'
import { useHistory } from "react-router"
const MembersList = ({showMembers}) =>{
    const history = useHistory()
    const handleClick = (id) =>{
        const filtered = members.find((member)=>member.id === id)
        if(filtered.type === 'pj'){
            history.push('/company/'+id)
        }else{
            history.push('/costumer/'+id)
        }
        showMembers(false)
    }
    return(
        <ul>
            {members.map((member)=>(              
                <li key={member.id} onClick={()=> handleClick(member.id)}>{member.name}</li>
            ))}            
        </ul>
    )   
}
export default MembersList