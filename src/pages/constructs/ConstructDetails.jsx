import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../context/auth.context';
import { getConstructDetailsService } from '../../services/construct.services';
import ConstructEdit from './ConstructEdit';

function ConstructDetails() {

  const {id} = useParams();
  const {isLoggedIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const [constructDetails, setConstructDetails] = useState(null);

  useEffect(() => {
    getConstructDetails()
  }, [])

  const getConstructDetails = async () => {

    try {

      const response = await getConstructDetailsService(id)
      setConstructDetails(response.data)

    }catch (error) {
      navigate ("/error")
    }
  }

  if (constructDetails === null) {
    return <h3>... Loading</h3>
  }

  return (
    <div>
    
      {isLoggedIn === true ? (

        <div id="construct-details">
        <Navbar/>
        <h3>Detalles de {constructDetails.name}</h3>
        {/* <Link to={`/constructs/${id}/edit`}><button>Editar</button></Link> */}
        <Link to=<ConstructEdit/> target="edicion"><button>Editar</button></Link>
        
        <div id="perfil-container">
          

          <section id="section1-perfil">
          <table>
          <tr>
            <td><img src={constructDetails.constructProfilePicture} className="construct-pic" alt="Construct pic" /></td>
          </tr>

          <tr>
              <td align="center">
              {constructDetails.constructType === "Tank" && <img src="https://drizzit.net/punishing/imgs/construct_type/tank-icon.png" alt="tank image"  className="profile-image"/>}
              {constructDetails.constructType === "Support" && <img src="https://drizzit.net/punishing/imgs/construct_type/support-icon.png" alt="support image"  className="profile-image"/>}
              {constructDetails.constructType === "Attacker" && <img src="https://drizzit.net/punishing/imgs/construct_type/attacker-icon.png" alt="attacker image"  className="profile-image"/>}
              {constructDetails.constructType === "Vanguard" && <img src="https://drizzit.net/punishing/imgs/construct_type/vanguard-icon.png" alt="vanguard image"  className="profile-image"/>}
              {constructDetails.constructType === "Amplifier" && <img src="https://drizzit.net/punishing/imgs/construct_type/amplifier-icon.png" alt="amplifier image"  className="profile-image"/>}
              </td>
              <td>
                {constructDetails.team === "Gray Raven" && <img src="https://drizzit.net/punishing/imgs/teams/grayraven-team.png" alt="Gray Raven image" className="profile-image"/>}
                {constructDetails.team === "Purifying Force" && <img src="https://drizzit.net/punishing/imgs/teams/purifyingforce-team.png" alt="Purifying Force image" className="profile-image"/>}
                {constructDetails.team === "Forsaken" && <img src="https://drizzit.net/punishing/imgs/teams/forsaken-team.png" alt="Forsaken image" className="profile-image"/>}
                {constructDetails.team === "Ascendant" && <img src="https://drizzit.net/punishing/imgs/teams/ascendant-team.png" alt="Ascendant image" className="profile-image"/>}
                {constructDetails.team === "World Government Association of Art" && <img src="https://drizzit.net/punishing/imgs/teams/wgaa-team.png" alt="WGAA image" className="profile-image"/>}
                {constructDetails.team === "Engineering Force" && <img src="https://drizzit.net/punishing/imgs/teams/engineeringforce-team.png" alt="Engineering Force image" className="profile-image"/>}
                {constructDetails.team === "Akdilek Commercial Alliance" && <img src="https://drizzit.net/punishing/imgs/teams/akdilek-team.png" alt="Akdilek image" className="profile-image"/>}
                {constructDetails.team === "Cerberus" && <img src="https://drizzit.net/punishing/imgs/teams/cerberus-team.png" alt="Cerberus image" className="profile-image"/>}
                {constructDetails.team === "Strike Hawk" && <img src="https://drizzit.net/punishing/imgs/teams/strikehawk-team.png" alt="Strike Hawk image" className="profile-image"/>}
                {constructDetails.team === "Artic Route Union" && <img src="https://drizzit.net/punishing/imgs/teams/aru-team.png" alt="A.R.U. image" className="profile-image"/>} 
              </td>
            </tr>
            
            <tr>
              <td>
                {constructDetails.constructType}
              </td>
              <td>{constructDetails.team}</td>
            </tr>
          </table>
          {/* <div className="perfil-table"> */}
          
          {/* </div> */}
          </section>
          
          <section id="section2-perfil">
          <table className='table-perfil-section2'>
            <tr>
              <th colspan="2">
                <h4 align="center">{constructDetails.name}</h4>
                <h6 align="center">{constructDetails.frame}</h6>
              </th>
            </tr>
            <tr>
              <td colspan="2" align="center">
                {constructDetails.rank === "A" && <img src="https://drizzit.net/punishing/imgs/rank/A-rank.png"/>}
                {constructDetails.rank === "B" && <img src="https://drizzit.net/punishing/imgs/rank/B-rank.png"/>}
                {constructDetails.rank === "S" && <img src="https://drizzit.net/punishing/imgs/rank/S-rank.png"/>}
                {constructDetails.rank === "SS" && <img src="https://drizzit.net/punishing/imgs/rank/SS-rank.png"/>}
                {constructDetails.rank === "SSS" && <img src="https://drizzit.net/punishing/imgs/rank/SSS-rank.png"/>}
                {constructDetails.rank === "SSS+" && <img src="https://drizzit.net/punishing/imgs/rank/SSSplus-rank.png"/>}
              </td>
            </tr>

            <tr>
              <td>Tipo:</td>
              <td className="right-cell">{constructDetails.constructType}</td>
            </tr>
            <tr>
              <td>Voz:</td>
              <td className="right-cell">{constructDetails.voice}</td>
            </tr>
            <tr>
              <td>Tiempo de Servicio:</td>
              <td className="right-cell">{constructDetails.serviceTime}</td>
            </tr>
            <tr>
              <td>Fecha de Activación:</td>
              <td className="right-cell">{constructDetails.activationDate}</td>
            </tr>
            <tr>
              <td>Altura:</td>
              <td className="right-cell">{constructDetails.height}</td>
            </tr>
            <tr>
              <td>Peso:</td>
              <td className="right-cell">{constructDetails.weight}</td>
            </tr>
            <tr>
              <td>Tipo de Fluido Vital:</td>
              <td className="right-cell">{constructDetails.vitalFluidType}</td>
            </tr>
            <tr>
              <td>Edad Mental:</td>
              <td className="right-cell">{constructDetails.mentalAge}</td>
            </tr>
            
          </table>
          
          
          
          
          </section>
          <section id="section3-perfil">
          <table className='table-perfil'>
          <tr>
            <Link to="/constructs/ejemplo" target="ejemplo">Ejemplo</Link>
            <th>Th2</th>
            <th>Th3</th>
            <th>Th4</th>
          </tr>
            
          <tr>
            <td>Td1</td>
            <td>Td2</td>
            <td>Td3</td>
            <td>Td4</td>
          </tr>
          </table>
          <iframe name="ejemplo">

          </iframe>
          </section>

          <section id="section4-perfil">
          
          <iframe name="edicion">
          <h1>Esto es una prueba</h1>

          </iframe>
          </section>

        </div>
        </div>

      ) : (

        <div id="perfil-container">

        

        <h3>Detalles de {constructDetails.name}</h3>

        <section id="section1-perfil"></section>
        <section id="section2-perfil"></section>
        <section id="section3-perfil"></section>

          <img src={constructDetails.constructPicture} alt="Construct pic" className="construct-pic" />
          <h1>{constructDetails.rank}</h1>
          <h4>{constructDetails.name}</h4>
          <p>Frame: {constructDetails.frame}</p>
          <p>Tipo: {constructDetails.constructType}</p>
          <p>Voz: {constructDetails.voice}</p>
          <p>Tiempo de Servicio: {constructDetails.serviceTime}</p>
          <p>Fecha de Activación: {constructDetails.activationDate}</p>
          <p>Altura: {constructDetails.height}</p>
          <p>Peso: {constructDetails.weight}</p>
          <p>Tipo de Fluido Vital: {constructDetails.vitalFluidType}</p>
          <p>Edad Mental: {constructDetails.mentalAge}</p>

        </div>
      )}

    </div>
  )
}

export default ConstructDetails