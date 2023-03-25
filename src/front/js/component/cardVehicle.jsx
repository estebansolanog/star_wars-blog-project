import "bootstrap/dist/css/bootstrap.min.css";
import { Heart } from "react-bootstrap-icons";

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { todoActions } from "../store/todos";

const CardVehicle = (props) => {
    const { store, actions } = useContext(Context)
    return (<>
        <div className="card" style={{ width: "18rem" }}>
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} className="card-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/vehicle/${props.uid}`} className="btn btn-primary mx-2">Learn More!</Link>
                    <button type="button" className="btn-warning mx-2 p-2 border-0 rounded" onClick={() => {
                        actions.agregarFavorito({
                            name: props.name,
                            uid: props.uid,
                            category: "vehicle",
                            link: `/vehicle/${props.uid}`
                        })
                    }}>
                        <span className="p-2"><Heart /></span>
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default CardVehicle;