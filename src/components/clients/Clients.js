import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
class Clients extends Component {
  render() {
    const { clients } = this.props;

    if (clients) {
      return (
        <div className="row">
          <div className="col md-6">
            <h2>
              {" "}
              <i className="fas fa-users" /> Clients
            </h2>
          </div>
          <div className="col-md-6" />

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}
Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};
export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);
