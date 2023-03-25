import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePlanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/planets/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPlanet(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [])

    return (<>
        <div className="container-fluid">
            <div className="row m-3 d-flex justify-content-center">
                <div className="col-4"><img src={"https://starwars-visualguide.com/assets/img/planets/" + params.uid + ".jpg"} /></div>
                <div className="col-4 d-block text-center fs-3">
                    <h2 className="mb-2">{planet.name ? planet.name : ""}</h2>
                    <p>Lorem ippopulation sit amet, consectetur adipisicing elit. Nobis tempora, asperiores enim recusandae cupiditate autem eius provident illo deleniti neque ipsum obcaecati accusantium? Eapopulation cumque labore blanditiis distinctio aliquam. Lorem, ippopulation sit amet consectetur adipisicing elit. Nam, vitae voluptas nisi libero tempore dignissimos? Nemo nobis exercitationem assumenda, delectus officia corrupti sunt consectetur fuga sint ab sequi molestiae at.</p>
                </div>
                <div className="row m-3 d-flex justify-content-center border-top border-danger border-3 text-danger fs-5 text-center">
                    <div className="col-2">
                        <span className="fw-bold d-block">Name</span>
                        <span>{planet.name ? planet.name : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Diameter</span>
                        <span>{planet.diameter ? planet.diameter : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Rotation Period</span>
                        <span>{planet.rotation_period ? planet.rotation_period : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Orbital Period</span>
                        <span>{planet.orbital_period ? planet.orbital_period : "Unknown"}</span>
                    </div>
                    <div className="col-2 ">
                        <span className="fw-bold d-block">Gravity</span>
                        <span>{planet.gravity ? planet.gravity : "Unknown"}</span>
                    </div>
                    <div className="col-2 ">
                        <span className="fw-bold d-block">Population</span>
                        <span>{planet.population ? planet.population : "Unknown"}</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SinglePlanets