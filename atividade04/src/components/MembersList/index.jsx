import { members } from "../../helper.js"
import './style.css'
import { Link} from "react-router-dom"
const MembersList = () =>{
    return(
        <div className='members-container'>
            <h1>Membros</h1>
            <ul>
                {members.map((member)=>(            
                    member.type === 'pj'? (
                        <Link  to={'/company/'+member.id} key={member.id}>{member.name}</Link>
                    ):(
                        <Link  to={'/customer/'+member.id} key={member.id}>{member.name}</Link>
                    )
                ))}            
            </ul>
        </div>
    )   
}
export default MembersList