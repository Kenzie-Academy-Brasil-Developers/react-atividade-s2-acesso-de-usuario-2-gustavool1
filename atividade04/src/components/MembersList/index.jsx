import { members } from "../../helper.js"
import './style.css'
import { useHistory, Link} from "react-router-dom"
const MembersList = () =>{
    const history = useHistory()
    const handleClick = (id) =>{
        const filtered = members.find((member)=>member.id === id)
        if(filtered.type === 'pj'){
            history.push('/company/'+id)
        }else{
            history.push('/costumer/'+id)
        }
        
    }
    return(
        <div className='members-container'>
            <h1>Membros</h1>
            <ul>
                {members.map((member)=>(            
                    member.type === 'pj'? (
                        <Link  to={'/company/'+member.id}>{member.name}</Link>
                    ):(
                        <Link  to={'/customer/'+member.id}>{member.name}</Link>
                    )
                ))}            
            </ul>
        </div>
    )   
}
export default MembersList