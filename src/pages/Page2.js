import React, { Component } from "react";

import getCustomerData from "../mock/getData";
class pageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    this.getRecords();
  };
  getRecords = async () => {
    await getCustomerData().then(
      function (response) {
        // console.log("resp: ==>" + JSON.stringify(response, null, "\t"));
        this.setState({ users: response.data });
      }.bind(this)
    );

    console.log(this.state.data);
  };

  render() {
    let { users } = this.state;
    console.log("let users  ==> " + JSON.stringify(users));

    const list = users.map(function (user, index) {
      return (
        <React.Fragment key={index}>
          <div>
            <img src={user.avatar} title="avatar" />
            <p>name : {user.first_name + " " + user.last_name}</p>
            <a href={"mailto:" + user.email}>{user.email}</a>
            <p>gender: {user.gender}</p>
            <p>ip adresss : {user.ip_address}</p>
          </div>
        </React.Fragment>
      );
    });
    return (
      <div>
        <h1>page 2</h1>
        {list}
      </div>
    );
  }
}

export default pageTwo;
