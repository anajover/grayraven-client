import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editConstructService, getConstructDetailsService } from '../../services/construct.services';
import { uploadService } from '../../services/images.services';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

function ConstructEdit() {

  const navigate = useNavigate();
  const {id} = useParams();

  const [constructPicture, setConstructPicture] = useState("");
  const [constructProfilePicture, setConstructProfilePicture] = useState("");
  const [voice, setVoice] = useState("");
  const [rank, setRank] = useState("");
  const [name, setName] = useState("");
  const [frame, setFrame] = useState("");
  const [constructType, setConstructType] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [activationDate, setActivationDate] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [vitalFluidType, setVitalFluidType] = useState("");
  const [mentalAge, setMentalAge] = useState();
  const [team, setTeam] = useState("");
  const [file, setFile] = useState("");
  const [energy, setEnergy] = useState();
  const [model, setModel] = useState();

  const handleVoiceChange = (e) => setVoice(e.target.value);
  const handleRankChange = (e) => setRank(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleFrameChange = (e) => setFrame(e.target.value);
  const handleConstructTypeChange = (e) => setConstructType(e.target.value);
  const handleServiceTimeChange = (e) => setServiceTime(e.target.value);
  const handleActivationDateChange = (e) => setActivationDate(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);
  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleVitalFluidTypeChange = (e) => setVitalFluidType(e.target.value);
  const handleMentalAgeChange = (e) => setMentalAge(e.target.value);
  const handleTeamChange = (e) => setTeam(e.target.value);
  const handleFileChange = (e) => setFile(e.target.value);
  const handleModelChange = (e) => setModel(e.target.value);
  
  const handleEnergyChange = async (e) => {
    setEnergy(e)
    try{
      const response = await e.split(",")
      setEnergy(response)
    }catch(error) {
      navigate("/error")
    }
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault()

    try {

      const theConstruct = {
        constructPicture,
        constructProfilePicture,
        voice,
        rank,
        name,
        frame,
        constructType,
        serviceTime,
        activationDate,
        height,
        weight,
        vitalFluidType,
        mentalAge,
        team,
        file,
        energy,
        model
      }

      await editConstructService(id, theConstruct)
      navigate(`/constructs/${id}`)

    }catch(error) {
      navigate("/error")
    }
  };

  useEffect(() => {
    getConstructDetails()
  }, []);

  const getConstructDetails = async () => {

    try {

      const response = await getConstructDetailsService(id)
      const { constructPicture, constructProfilePicture, voice, rank, name,
        frame, constructType, serviceTime, activationDate,
        height, weight, vitalFluidType, mentalAge, team, file, energy, model } = response.data

      setConstructPicture(constructPicture)
      setConstructProfilePicture(constructProfilePicture)
      setVoice(voice)
      setRank(rank)
      setName(name)
      setFrame(frame)
      setConstructType(constructType)
      setServiceTime(serviceTime)
      setActivationDate(activationDate)
      setHeight(height)
      setWeight(weight)
      setVitalFluidType(vitalFluidType)
      setMentalAge(mentalAge)
      setTeam(team)
      setFile(file)
      setEnergy(energy)
      setModel(model)

    }catch(error) {
      navigate("/error")
    }
  }

  const handleConstructPictureChange = async (e) => {

    const uploadForm = new FormData()
    uploadForm.append("image", e.target.files[0])

    try {

      const response = await uploadService(uploadForm)
      setConstructPicture(response.data)

    } catch(error) {
      navigate("/error")
    }
  }

  const handleConstructProfilePictureChange = async (e) => {

    const uploadForm = new FormData()
    uploadForm.append("image", e.target.files[0])

    try {

      const response = await uploadService(uploadForm)
      setConstructProfilePicture(response.data)

    } catch(error) {
      navigate("/error")
    }
  }

  const energyOptions = [
    {label: "Physical", value: "Physical"},
    {label: "Ice", value: "Ice"},
    {label: "Fire", value: "Fire"},
    {label: "Lightning", value: "Lightning"},
    {label: "Dark", value: "Dark"},
    {label: "Mixed", value: "Mixed"},
]

  return (
    <div key={id} id="construct-edit-form">
      <h3> Editar Construct {name}</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Select name="model" onChange={handleModelChange} aria-label="Default select example">
        <option>Modelo</option>
        <option value={"Construct"}>Construct</option>
        <option value={"Transcendant"}>Trascendant</option>
        <option value={"Collaboration"}>Collaboration</option>
      </Form.Select>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="name">Nombre</Form.Label>
      <Form.Control
        type="text"
        name="name"
        onChange={handleNameChange}
        placeholder={name}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="voice">Voz</Form.Label>
      <Form.Control
        type="text"
        name="voice"
        onChange={handleVoiceChange}
        placeholder={voice}
      />
      </Form.Group>

      <Form.Select name="rank" onChange={handleRankChange} aria-label="Default select example">
        <option>Rango</option>
        <option value={"A"}>A</option>
        <option value={"B"}>B</option>
        <option value={"S"}>S</option>
        <option value={"SS"}>SS</option>
        <option value={"SSS"}>SSS</option>
        <option value={"SSS+"}>SSS+</option>
      </Form.Select>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="frame">Armazón</Form.Label>
      <Form.Control
        type="text"
        name="frame"
        onChange={handleFrameChange}
        placeholder={frame}
      />
      </Form.Group>

      <Form.Select name="constructType" onChange={handleConstructTypeChange} aria-label="Default select example">
        <option>Tipo de Construct</option>
        <option value={"Attacker"}>Attacker</option>
        <option value={"Support"}>Support</option>
        <option value={"Tank"}>Tank</option>
        <option value={"Vanguard"}>Vanguard</option>
        <option value={"Amplifier"}>Amplifier</option>
      </Form.Select>

      <div className="preview-values">
        <h4>Energy</h4>
        {energy}
        </div>
        <div className="energy-select">
          <MultiSelect
            onChange={handleEnergyChange}
            options={energyOptions}
          />
        </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="serviceTime">Tiempo de Servicio</Form.Label>
      <Form.Control
        type="text"
        name="serviceTime"
        onChange={handleServiceTimeChange}
        placeholder={serviceTime}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="activationDate">Fecha de Activación</Form.Label>
      <Form.Control
        type="text"
        name="activationDate"
        onChange={handleActivationDateChange}
        placeholder={activationDate}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="height">Altura</Form.Label>
      <Form.Control
        type="number"
        name="height"
        onChange={handleHeightChange}
        placeholder={height}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="weight">Peso</Form.Label>
      <Form.Control
        type="number"
        name="weight"
        onChange={handleWeightChange}
        placeholder={weight}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="vitalFluidType">Tipo de Fluido Vital</Form.Label>
      <Form.Control
        type="text"
        name="vitalFluidType"
        onChange={handleVitalFluidTypeChange}
        placeholder={vitalFluidType}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="mentalAge">Edad Mental</Form.Label>
      <Form.Control
        type="number"
        name="mentalAge"
        onChange={handleMentalAgeChange}
        placeholder={mentalAge}
      />
      </Form.Group>

      <Form.Select name="team" onChange={handleTeamChange} aria-label="Default select example">
        <option>Equipo</option>
        <option value={"Gray Raven"}>Gray Raven</option>
        <option value={"Purifying Force"}>Purifying Force</option>
        <option value={"Forsaken"}>Forsaken</option>
        <option value={"Ascendant"}>Ascendant</option>
        <option value={"World Government Association of Art"}>WGAA</option>
        <option value={"Engineering Force"}>Engineering Force</option>
        <option value={"Akdilek Commercial Alliance"}>Akdilek Commercial Alliance</option>
        <option value={"Cerberus"}>Cerberus</option>
        <option value={"Strike Hawk"}>Strike Hawk</option>
        <option value={"Artic Route Union"}>A.R.U.</option>
        <option value={"Unclassified"}>Unclassified</option>
      </Form.Select>
      <br/>

      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="team">Equipo</Form.Label>
      <Form.Control
        type="text"
        name="team"
        onChange={handleTeamChange}
        placeholder={team}
      />
      </Form.Group> */}

      <InputGroup>
        <InputGroup.Text>Archivo</InputGroup.Text>
        <Form.Control 
          as="textarea"
          aria-label="With textarea"
          name="file"
          rows="10"
          onChange={handleFileChange}
          placeholder={file}
        />
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="constructPicture">Imagen de Card</Form.Label>
      <Form.Control
        type="file"
        name="constructPicture"
        onChange={handleConstructPictureChange}
      />
      </Form.Group>

      <p><img src={constructPicture} alt="image" width="300px"/></p>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="constructProfilePicture">Imagen de Perfil</Form.Label>
      <Form.Control
        type="file"
        name="constructProfilePicture"
        onChange={handleConstructProfilePictureChange}
      />
      </Form.Group>

      <p><img src={constructProfilePicture} alt="image" width="300px"/></p>

      <Button variant="primary" type="submit">
        Editar
      </Button>
      </Form>

    </div>
  )
}

export default ConstructEdit