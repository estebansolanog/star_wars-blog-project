import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleVehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [vehicle, setvehicle] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/vehicles/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setvehicle(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [])

    return (<>
        <div className="container-fluid">
            <div className="row m-3 d-flex justify-content-center">
                <div className="col-4"><img src={"https://starwars-visualguide.com/assets/img/vehicles/" + params.uid + ".jpg"} /></div>
                <div className="col-4 d-block text-center fs-3">
                    <h2 className="mb-2">{vehicle.name ? vehicle.name : ""}</h2>
                    <p>Lorem ippopulation sit amet, consectetur adipisicing elit. Nobis tempora, asperiores enim recusandae cupiditate autem eius provident illo deleniti neque ipsum obcaecati accusantium? Eapopulation cumque labore blanditiis distinctio aliquam. Lorem, ippopulation sit amet consectetur adipisicing elit. Nam, vitae voluptas nisi libero tempore dignissimos? Nemo nobis exercitationem assumenda, delectus officia corrupti sunt consectetur fuga sint ab sequi molestiae at.</p>
                </div>
                <div className="row m-3 d-flex justify-content-center border-top border-danger border-3 text-danger fs-5 text-center">
                    <div className="col-2">
                        <span className="fw-bold d-block">Name</span>
                        <span>{vehicle.name ? vehicle.name : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Class</span>
                        <span>{vehicle.vehicle_class ? vehicle.vehicle_class : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Manufacturer</span>
                        <span>{vehicle.manufacturer ? vehicle.manufacturer : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Cost in Credits</span>
                        <span>{vehicle.cost_in_credits ? vehicle.cost_in_credits : "Unknown"}</span>
                    </div>
                    <div className="col-2 ">
                        <span className="fw-bold d-block">Cargo capacity</span>
                        <span>{vehicle.cargo_capacity ? vehicle.cargo_capacity : "Unknown"}</span>
                    </div>
                    <div className="col-2 ">
                        <span className="fw-bold d-block">Crew</span>
                        <span>{vehicle.crew ? vehicle.crew : "Unknown"}</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SingleVehicles