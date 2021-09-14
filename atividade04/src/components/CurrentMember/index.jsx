import { useParams, Link } from "react-router-dom"
import { members } from "../../helper"
import './style.css'
const CurrentMember = () =>{
    const param = useParams()
    const member = members.find((m)=>m.id === param.id)
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
            <Link to='/'>Voltar</Link>
        </div>
    )
}
export default CurrentMember