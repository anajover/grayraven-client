import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addNewConstructService } from '../../services/construct.services';
import { uploadService } from '../../services/images.services';

import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

function ConstructForm() {
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
    const [model, setModel] = useState("");

    const navigate = useNavigate()

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
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const newConstruct = {
                constructPicture,
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

            await addNewConstructService(newConstruct)
            navigate("/constructs")

        }catch(error) {
            navigate("/error")
        }
    }

    const handleEnergyChange = async (e) => {
        // setEnergy(e.split(","))
        setEnergy(e)

        try {
            const response = await e.split(",")
            console.log("response", response)
            setEnergy(response)

        }catch(error) {
            navigate("/error")
        }
        
    }

    const handleConstructPictureChange = async (e) => {

        const uploadForm = new FormData()
        uploadForm.append("constructPicture", e.target.files[0])

        try {

            const response = await uploadService(uploadForm)
            setConstructPicture(response.data)

        }catch (error) {
            navigate("/error")
        }
    }

    const handleConstructProfilePictureChange = async (e) => {

        const uploadForm = new FormData()
        uploadForm.append("constructProfilePicture", e.target.files[0])

        try {

            const response = await uploadService(uploadForm)
            setConstructProfilePicture(response.data)

        }catch (error) {
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
    <div>
        <h3>Agregar Construct</h3>
        <hr/>
        <form onSubmit={handleSubmit}>
            <select name="model" onChange={handleModelChange}>
                <option selected disabled hidden>Modelo</option>
                <option value={"Construct"}>Construct</option>
                <option value={"Transcendant"}>Trascendant</option>
                <option value={"Collaboration"}>Collaboration</option>
            </select>
            
            <label htmlFor="name">Nombre</label>
            <input
                type="text"
                name="name"
                onChange={handleNameChange}
                value={name}
            />
            <br/>
            <label htmlFor="voice">Voz</label>
            <input
                type="text"
                name="voice"
                onChange={handleVoiceChange}
                value={voice}
            />
            <br/>
            <select name="rank" onChange={handleRankChange}>
                <option selected disabled hidden>Rango</option>
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"S"}>S</option>
                <option value={"SS"}>SS</option>
                <option value={"SSS"}>SSS</option>
                <option value={"SSS+"}>SSS+</option>
            </select>
            <br/>
            <label htmlFor="frame">Armazón</label>
            <input
                type="text"
                name="frame"
                onChange={handleFrameChange}
                value={frame}
            />
            <br/>
            <select name="constructType" onChange={handleConstructTypeChange}>
                <option value="" selected disabled hidden>Tipo de Construct</option>
                <option value={"Attacker"}>Attacker</option>
                <option value={"Support"}>Support</option>
                <option value={"Tank"}>Tank</option>
                <option value={"Vanguard"}>Vanguard</option>
                <option value={"Amplifier"}>Amplifier</option>
            </select>
            <br/>

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

            <br/>
            <label htmlFor="serviceTime">Tiempo de Servicio</label>
            <input
                type="text"
                name="serviceTime"
                onChange={handleServiceTimeChange}
                value={serviceTime}
            />
            <br/>
            <label htmlFor="activationDate">Fecha de Activación</label>
            <input
                type="text"
                name="activationDate"
                onChange={handleActivationDateChange}
                value={activationDate}
            />
            <br/>
            <label htmlFor="height">Altura</label>
            <input
                type="number"
                name="height"
                onChange={handleHeightChange}
                value={height}
            />
            <br/>
            <label htmlFor="weight">Peso</label>
            <input
                type="number"
                name="weight"
                onChange={handleWeightChange}
                value={weight}
            />
            <br/>
            <label htmlFor="vitalFluidType">Tipo de Fluido Vital</label>
            <input
                type="text"
                name="vitalFluidType"
                onChange={handleVitalFluidTypeChange}
                value={vitalFluidType}
            />
            <br/>
            <label htmlFor="mentalAge">Edad Mental</label>
            <input
                type="number"
                name="mentalAge"
                onChange={handleMentalAgeChange}
                value={mentalAge}
            />
            <br/>

            <select name="team" onChange={handleTeamChange}>
                <option value="" selected disabled hidden>Equipo</option>
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
            </select>
            <br/>
            <label htmlFor="file">Archivo</label>
            <textarea
                type="textarea"
                name="file"
                rows="10"
                columns="50"
                onChange={handleFileChange}
                value={file}
            />
            <br/>
            <label htmlFor="constructPicture">Foto</label>
            <input
                type="file"
                name="constructPicture"
                onChange={handleConstructPictureChange}
            />
            <br/>

                <img src={constructPicture} alt="Construct Picture" width="300px"/>

            <br/>

            <label htmlFor="constructProfilePicture">Foto</label>
            <input
                type="file"
                name="constructProfilePicture"
                onChange={handleConstructProfilePictureChange}
            />
            <br/>

                <img src={constructProfilePicture} alt="Construct Picture" width="300px"/>

            <br/>

            <button type="submit">Crear Construct</button>
        </form>
    </div>
  )
}

export default ConstructForm