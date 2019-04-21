import React from "react";
import { connect } from "react-redux";

const UserDetails = (props) => {
    if (props.selected) {

        const { name, username, email, phone, website } = props.selected;
        const { street } = props.selected.address;

        return (
            <div>
                <h1>Nume: {name}</h1>
                <div>username: {username}</div>
                <div>email: {email}</div>
                <div>street: {street}</div>
                <div>phone: {phone}</div>
                <div>website: {website}</div>

            </div>
        )
    }
   
    return (
        <div>
            Detalii
            <div>Va rugam selectati...</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selected: state.selected
    }
}


export default connect(mapStateToProps)(UserDetails);