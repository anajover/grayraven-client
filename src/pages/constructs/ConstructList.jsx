import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllConstructsService } from '../../services/construct.services'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function ConstructList() {

  const [ allConstructs, setAllConstructs ] = useState([]);
  const [ filterConstruct, setFilterConstruct] = useState([]);

  const {isLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    getAllConstructs()
  }, [])

  const getAllConstructs = async () => {

    try {

      const response = await getAllConstructsService()
      setAllConstructs(response.data)
      setFilterConstruct(response.data)

    }catch(error) {
      navigate("/error")
    }
  }

  const handleFilterChange = (e) => {
    getFilter(e.target.value);
  }

  const getFilter = (modelType) => {
    let filterResult = filterConstruct.filter((eachConstruct) => {
      console.log("eachConstruct", eachConstruct)
      if(eachConstruct.model.toString().includes(modelType)) {
        return eachConstruct;
      }
    })
    setAllConstructs(filterResult);
  }

  return (
    <div>
        <Navbar/>
      <hr/>
        <div>
          <h3>Lista de Personajes</h3>
          <div>
          {isLoggedIn === true && (
            <Link to={"/constructs/create"}>Crear personaje</Link>
          )}
          </div>
        </div>
       <hr/>

       <div>
       <ButtonGroup aria-label="Basic example">
        <Button className="model-button" variant="info" onClick={getAllConstructs}>Todos</Button>
        <Button className="model-button" variant="info" value="Construct" onClick={handleFilterChange}>Constructs</Button>
        <Button className="model-button" variant="info" value="Transcendant" onClick={handleFilterChange}>Transcendants</Button>
        <Button className="model-button" variant="info" value="Collaboration" onClick={handleFilterChange}>Colaboraciones</Button>
       </ButtonGroup>
       </div>

          <div className="construct-container">

          {!allConstructs && <h3>... Loading</h3>}

            {allConstructs && allConstructs.map((eachConstruct) => {
              return(
                <div>

                {(eachConstruct.model==="Construct" || eachConstruct.model === "Transcendant" || eachConstruct.model === "Collaboration") && (
                <div key={eachConstruct._id} id="constructs-list">
                <Card className="construct-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={eachConstruct.constructPicture} alt="Construct Card Image" className="card-image"/>
                <Card.Body style={{height: "20rem"}}>
                <Card.Title>{eachConstruct.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{eachConstruct.frame}</Card.Subtitle>
                <Card.Subtitle>
                  {eachConstruct.rank === "A" && <img className="rank-icon" src="https://drizzit.net/punishing/imgs/rank/A-rank.png"/>}
                  {eachConstruct.rank === "B" && <img className="rank-icon" src="https://drizzit.net/punishing/imgs/rank/B-rank.png"/>}
                  {eachConstruct.rank === "S" && <img className="rank-icon" src="https://drizzit.net/punishing/imgs/rank/S-rank.png"/>}
                  {eachConstruct.rank === "SS" && <img className="rank-icon" src="https://drizzit.net/punishing/imgs/rank/SS-rank.png"/>}
                  {eachConstruct.rank === "SSS" && <img className="rank-icon" src="https://drizzit.net/punishing/imgs/rank/SSS-rank.png"/>}
                  {eachConstruct.rank === "SSS+" && <img className="rank-icon" src="https://drizzit.net/punishing/imgs/rank/SSSplus-rank.png"/>}
                </Card.Subtitle>
                <Card.Text className="text-card">
                <div className="card-icons">
                  {/* Icono de Tipo */}
                  {eachConstruct.constructType === "Tank" && <img src="https://drizzit.net/punishing/imgs/construct_type/tank-icon.png" alt="tank image"  className="tank-image"/>}
                  {eachConstruct.constructType === "Support" && <img src="https://drizzit.net/punishing/imgs/construct_type/support-icon.png" alt="support image"  className="support-image"/>}
                  {eachConstruct.constructType === "Attacker" && <img src="https://drizzit.net/punishing/imgs/construct_type/attacker-icon.png" alt="attacker image"  className="attacker-image"/>}
                  {eachConstruct.constructType === "Vanguard" && <img src="https://drizzit.net/punishing/imgs/construct_type/vanguard-icon.png" alt="vanguard image"  className="vanguard-image"/>}
                  {/* Icono de Equipo */}
                  {eachConstruct.team === "Gray Raven" && <img src="https://drizzit.net/punishing/imgs/teams/grayraven-team.png" alt="Gray Raven image" className="team-image"/>}
                  {eachConstruct.team === "Purifying Force" && <img src="https://drizzit.net/punishing/imgs/teams/purifyingforce-team.png" alt="Purifying Force image" className="team-image"/>}
                  {eachConstruct.team === "Forsaken" && <img src="https://drizzit.net/punishing/imgs/teams/forsaken-team.png" alt="Forsaken image" className="team-image"/>}
                  {eachConstruct.team === "Ascendant" && <img src="https://drizzit.net/punishing/imgs/teams/ascendant-team.png" alt="Ascendant image" className="team-image"/>}
                  {eachConstruct.team === "World Government Association of Art" && <img src="https://drizzit.net/punishing/imgs/teams/wgaa-team.png" alt="WGAA image" className="team-image"/>}
                  {eachConstruct.team === "Engineering Force" && <img src="https://drizzit.net/punishing/imgs/teams/engineeringforce-team.png" alt="Engineering Force image" className="team-image"/>}
                  {eachConstruct.team === "Akdilek Commercial Alliance" && <img src="https://drizzit.net/punishing/imgs/teams/akdilek-team.png" alt="Akdilek image" className="team-image"/>}
                  {eachConstruct.team === "Cerberus" && <img src="https://drizzit.net/punishing/imgs/teams/cerberus-team.png" alt="Cerberus image" className="team-image"/>}
                  {eachConstruct.team === "Strike Hawk" && <img src="https://drizzit.net/punishing/imgs/teams/strikehawk-team.png" alt="Strike Hawk image" className="team-image"/>}
                  {eachConstruct.team === "Artic Route Union" && <img src="https://drizzit.net/punishing/imgs/teams/aru-team.png" alt="A.R.U. image" className="team-image"/>}
                  {/* Icono de Energía */}
                  {eachConstruct.team === "Unclassified" && <img src="https://drizzit.net/punishing/imgs/teams/unclassified.png" alt="Unclassified image" className="team-image"/>}
                  {eachConstruct.energy.includes("Physical") && <img src="https://drizzit.net/punishing/imgs/energy/physical-energy.png" alt="Physical Energy image" className="energy-image"/>}
                  {eachConstruct.energy.includes("Ice") && <img src="https://drizzit.net/punishing/imgs/energy/ice-energy.png" alt="Ice Energy image" className="energy-image"/>}
                  {eachConstruct.energy.includes("Fire") && <img src="https://drizzit.net/punishing/imgs/energy/fire-energy.png" alt="Fire Energy image" className="energy-image"/>}
                  {eachConstruct.energy.includes("Lightning") && <img src="https://drizzit.net/punishing/imgs/energy/lightning-energy.png" alt="Lightning Energy image" className="energy-image"/>}
                  {eachConstruct.energy.includes("Dark") && <img src="https://drizzit.net/punishing/imgs/energy/dark-energy.png" alt="Dark Energy image" className="energy-image"/>}
                  {eachConstruct.energy.includes("Mixed") && <img src="https://drizzit.net/punishing/imgs/energy/mixed-energy.png" alt="Mixed image" className="energy-image"/>}
                </div>
                  <p className="construct-file">{eachConstruct.file}</p>
                </Card.Text>
                <Link to={`/constructs/${eachConstruct._id}`}>
                  <div className="card-seemore-button">
                  <button className="seemore-button" variant="primary">Ver más</button>
                  </div>
                </Link>
                </Card.Body>
                </Card>
                {/* <Link to={`/constructs/${eachConstruct._id}/details`}>
                  <img src={eachConstruct.constructPicture} alt="Imagen de construct" width="300px"/>
                </Link>
                <p>{eachConstruct.name}</p> */}
                </div>
                )}
                </div>
            
              )
            })}
            </div>
    </div>
  )
}

export default ConstructList