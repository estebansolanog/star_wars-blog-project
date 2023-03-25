import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePeople = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [people, setPeople] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/people/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPeople(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [])

    return (<>
        <div className="container-fluid">
            <div className="row m-3 d-flex justify-content-center">
                <div className="col-4"><img src={"https://starwars-visualguide.com/assets/img/characters/" + params.uid + ".jpg"} /></div>
                <div className="col-4 d-block text-center fs-3">
                    <h2 className="mb-2">{people.name ? people.name : ""}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tempora, asperiores enim recusandae cupiditate autem eius provident illo deleniti neque ipsum obcaecati accusantium? Eaque dolor cumque labore blanditiis distinctio aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vitae voluptas nisi libero tempore dignissimos? Nemo nobis exercitationem assumenda, delectus officia corrupti sunt consectetur fuga sint ab sequi molestiae at.</p>
                </div>
                <div className="row m-3 d-flex justify-content-center border-top border-danger border-3 text-danger fs-5 text-center">
                    <div className="col-2">
                        <span className="fw-bold d-block">Name</span>
                        <span>{people.name ? people.name : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Birth Year</span>
                        <span>{people.birth_year ? people.birth_year : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Gender</span>
                        <span>{people.gender ? people.gender : "Unknown"}</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold d-block">Height</span>
                        <span>{people.height ? people.height : "Unknown"}</span>
                    </div>
                    <div className="col-2 ">
                        <span className="fw-bold d-block">Skin Color</span>
                        <span>{people.skin_color ? people.skin_color : "Unknown"}</span>
                    </div>
                    <div className="col-2 ">
                        <span className="fw-bold d-block">Eye Color</span>
                        <span>{people.eye_color ? people.eye_color : "Unknown"}</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SinglePeople