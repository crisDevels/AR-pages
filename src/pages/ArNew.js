import React from "react";
import Badge from "../components/Badge";

import '../global.css'
import BadgeForm from '../components/BadgeForm'


class ArNew extends React.Component {
    state = {
        form: {
            nombreMarca: "",
            nombreProducto: "",
            precioProducto: "",
            descripcionProducto: ""
        }
    }
    handleChange = e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value
        this.setState ({
            form: nextForm,
        })
    }
    render() {
        return (
            <div className="page">
                <div className="interaction">
                    <div className="colUna">
                        <Badge 
                            marca={this.state.form.nombreMarca}
                            nombreProducto={this.state.form.nombreProducto}
                            precio={this.state.form.precioProducto}
                            description={this.state.form.descripcionProducto}
                        />
                    </div>
                    <div className="colForm">
                        <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArNew;