import { useHistory, useParams } from "react-router"
import { members } from "../../helper"
import './style.css'
const CurrentMember = ({showMembers}) =>{
    const param = useParams()
    const history = useHistory()
    const member = members.find((m)=>m.id === param.id)
    const handleClick = () =>{
        history.goBack()
        showMembers(true)
    }
    return(
        <div className='member-container'>
            {member.type === 'pj' ? (
                <>
                    <h1>Detalhes da empresa</h1>
                    <p>Nome da empresa: {member.name}</p>
                </>
            ):(
                <>
                    <h1>Detalhes da pessoa</h1>
                    <p>Nome: {member.name}</p>
                </>
            )}
            <button onClick={()=> handleClick()}>Voltar</button>
        </div>
    )
}
export default CurrentMember