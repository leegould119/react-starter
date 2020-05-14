import React, { Component } from "react";

import getUserData from "../mock/getUserData";
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
    await getUserData().then(
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
          <div
            style={{
              backgroundImage: "url(" + user.bannerUrl + ")",
              width: "100%",
              height: "300px",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                      marginTop: "80px"
                    }}
                  >
                    {user.title}
                  </h1>
                  <h3 style={{ color: "#ffffff", textAlign: "center" }}>
                    {user.description}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
    return (
      <div>
        <section className="bg1">
          <div
            className="container"
            style={{ color: "#ffffff", paddingTop: "50px" }}
          >
            <div className="row">
              <div className="col-12">
                <h1>nerw section</h1>
                <p>
                  Sunt tempor voluptate Lorem nulla ut. Proident dolor officia
                  id culpa proident est laboris ex pariatur sunt aute cillum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1> new section</h1>
                <p>
                  Dolore cillum minim deserunt laborum excepteur deserunt enim
                  ut consequat cupidatat laboris do. Occaecat est incididunt
                  elit eu velit officia consectetur anim aliqua adipisicing
                  nostrud. Dolor quis ea nisi nulla excepteur sit incididunt
                  officia laboris. Esse aliqua adipisicing anim adipisicing
                  labore ea laborum est ipsum fugiat id exercitation quis ea.
                  Nisi ipsum et sunt dolore sit eu ipsum ad cillum nostrud culpa
                  culpa elit. Lorem tempor veniam et consectetur commodo eu
                  nostrud sit mollit nostrud ipsum in ullamco. Cupidatat amet
                  elit ex in. Culpa elit elit incididunt ad duis minim
                  consectetur id fugiat. Incididunt velit incididunt et est
                  aliquip sunt cupidatat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-grey">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1> new section</h1>
              </div>
              <div className="col-6">
                <h2> more about</h2>
                <p>
                  Dolore cillum minim deserunt laborum excepteur deserunt enim
                  ut consequat cupidatat laboris do. Occaecat est incididunt
                  elit eu velit officia consectetur anim aliqua adipisicing
                  nostrud. Dolor quis ea nisi nulla excepteur sit incididunt
                  officia laboris. Esse aliqua adipisicing anim adipisicing
                  labore ea laborum est ipsum fugiat id exercitation quis ea.
                  Nisi ipsum et sunt dolore sit eu ipsum ad cillum nostrud culpa
                  culpa elit. Lorem tempor veniam et consectetur commodo eu
                  nostrud sit mollit nostrud ipsum in ullamco. Cupidatat amet
                  elit ex in. Culpa elit elit incididunt ad duis minim
                  consectetur id fugiat. Incididunt velit incididunt et est
                  aliquip sunt cupidatat.
                </p>
              </div>
              <div className="col-6">
                <h2> more about</h2>
                <p>
                  Dolore cillum minim deserunt laborum excepteur deserunt enim
                  ut consequat cupidatat laboris do. Occaecat est incididunt
                  elit eu velit officia consectetur anim aliqua adipisicing
                  nostrud. Dolor quis ea nisi nulla excepteur sit incididunt
                  officia laboris. Esse aliqua adipisicing anim adipisicing
                  labore ea laborum est ipsum fugiat id exercitation quis ea.
                  Nisi ipsum et sunt dolore sit eu ipsum ad cillum nostrud culpa
                  culpa elit. Lorem tempor veniam et consectetur commodo eu
                  nostrud sit mollit nostrud ipsum in ullamco. Cupidatat amet
                  elit ex in. Culpa elit elit incididunt ad duis minim
                  consectetur id fugiat. Incididunt velit incididunt et est
                  aliquip sunt cupidatat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg1">
          <div
            className="container"
            style={{ color: "#ffffff", paddingTop: "50px" }}
          >
            <div className="row">
              <div className="col-12">
                <h1>new section</h1>
                <p>
                  Sunt tempor voluptate Lorem nulla ut. Proident dolor officia
                  id culpa proident est laboris ex pariatur sunt aute cillum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="light-orange">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1> new section</h1>
                <p>
                  Dolore cillum minim deserunt laborum excepteur deserunt enim
                  ut consequat cupidatat laboris do. Occaecat est incididunt
                  elit eu velit officia consectetur anim aliqua adipisicing
                  nostrud. Dolor quis ea nisi nulla excepteur sit incididunt
                  officia laboris. Esse aliqua adipisicing anim adipisicing
                  labore ea laborum est ipsum fugiat id exercitation quis ea.
                  Nisi ipsum et sunt dolore sit eu ipsum ad cillum nostrud culpa
                  culpa elit. Lorem tempor veniam et consectetur commodo eu
                  nostrud sit mollit nostrud ipsum in ullamco. Cupidatat amet
                  elit ex in. Culpa elit elit incididunt ad duis minim
                  consectetur id fugiat. Incididunt velit incididunt et est
                  aliquip sunt cupidatat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default pageTwo;
