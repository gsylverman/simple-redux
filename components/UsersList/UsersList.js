import React, { Component } from "react";
import "../../components/style.css";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectedUser } from "../../actions/index";

class UsersList extends Component {

    state = {
        inceput: 0,
        final: 3
    }

    creareLista = () => {
        const elementePagina = [...this.props.users.users];
        elementePagina.splice(0, this.state.inceput)
        elementePagina.splice(this.state.final, elementePagina.length - 1)
        console.log(elementePagina)






        return elementePagina.map((user, index) => {

            return (
                <li className="li" style={{ cursor: "pointer",height:"50px",width:"100px" ,listStyle:"none"}}
                    onClick={() => this.props.selected(user)}
                    key={user.id}
                >{user.name}</li>
            );
        })
    }
    butoane = () => {
        let but = [];
        for (let i = 1; i < 6; i++) {
            but.push(<button style={{
                width: "40px",
                height: "40px"
            }} key={i}
                onClick={() => this.pagHandler(i)}
            >{i}</button>)
        }
        return but;
    }

    pagHandler = (nr) => {
        let inceput = nr - 1;
        let final = 3
        this.setState({
            inceput: inceput,
            final: final
        })
    }

    render() {

        return (<div>
            <ul>
                {this.creareLista()}
            </ul>
            {this.butoane()}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selected: selectedUser
    }, dispatch)
    // selected:(user)=>dispatch(selectedUser(user))

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);