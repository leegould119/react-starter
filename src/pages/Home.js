import React, { Component } from "react";

class homePage extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>About</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h2>My qualifications</h2>
                <p>
                  Nisi do laboris enim dolore reprehenderit laborum ullamco amet
                  nisi aliquip aliquip ex. Aliquip consectetur amet ea sint amet
                  irure cillum sit anim sint. Duis pariatur minim occaecat
                  occaecat commodo do ipsum. Eiusmod laborum ea velit eu cillum
                  et do sunt. Nisi quis anim nisi aliqua aliqua minim. Non nisi
                  pariatur commodo commodo aliqua cupidatat deserunt deserunt
                  ipsum voluptate eu. Dolore cupidatat nostrud eu esse dolore.
                  Cupidatat esse qui reprehenderit magna ex ullamco dolor
                  aliquip ad ipsum fugiat velit consectetur. Cillum ea minim
                  cillum ex ipsum minim nostrud cupidatat. Amet sunt fugiat
                  excepteur ad nostrud sit voluptate qui amet sint consequat id
                  qui deserunt. Commodo sit pariatur cillum non quis et
                  exercitation non eiusmod proident ex in in ut. Elit ex dolor
                  enim fugiat.
                </p>
              </div>
              <div className="col-6">
                <h2>my experience</h2>
                <p>
                  Ea elit commodo cillum ea. Ut eu ipsum fugiat proident aliquip
                  eiusmod excepteur elit sint. Dolore anim mollit aliquip
                  consequat veniam occaecat anim Lorem eiusmod ullamco. Cillum
                  qui sunt quis sunt ad deserunt eiusmod esse incididunt anim.
                  Minim velit veniam amet adipisicing duis eu ut irure proident.
                  Non dolore aute consectetur incididunt id pariatur incididunt
                  nostrud ipsum fugiat consequat anim nisi. Qui culpa laborum
                  amet ullamco quis eu est fugiat. Non aliqua deserunt est aute
                  aliqua cillum ex deserunt voluptate laboris nulla ut occaecat.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a className="button orange-btn ">download my cv</a>
              </div>
            </div>
          </div>
        </section>

        <section className="light-orange">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>technologies</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <span className="design-icon" />
                <h2 className="center">design</h2>
                <p>
                  Irure eu culpa elit nostrud aute commodo voluptate enim veniam
                  quis ut.
                </p>
                <a className="button grey-btn">read more</a>
              </div>
              <div className="col-3">
                <span className="coding-icon" />
                <h2 className="center">coding</h2>
                <p>
                  Irure eu culpa elit nostrud aute commodo voluptate enim veniam
                  quis ut.
                </p>
                <a className="button grey-btn">read more</a>
              </div>
              <div className="col-3 ">
                <span className="ux-design-icon" />
                <h2 className="center">UX design</h2>
                <p>
                  Irure eu culpa elit nostrud aute commodo voluptate enim veniam
                  quis ut.
                </p>
                <a className="button grey-btn">read more</a>
              </div>
              <div className="col-3 ">
                <span className="architecture-icon" />
                <h2 className="center">architecture</h2>
                <p>
                  Irure eu culpa elit nostrud aute commodo voluptate enim veniam
                  quis ut.
                </p>
                <a className="button grey-btn">read more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-grey">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Projects</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-3 col-6-sm">
                <h2 className="center">heading 1</h2>
                <p className="center">
                  Irure eu culpa elit nostrud aute commodo voluptate enim veniam
                  quis ut.
                </p>
                <a className="button orange-btn">read more</a>
              </div>
              <div className="col-3 col-6-sm">
                <h2 className="center">heading 2</h2>
                <p className="center">
                  Tempor eiusmod elit labore ex labore nostrud occaecat culpa
                  aliqua nisi.
                </p>
                <a className="button orange-btn">read more</a>
              </div>
              <div className="col-3 col-6-sm">
                <h2 className="center">heading 3</h2>
                <p className="center">
                  Dolore deserunt cillum cupidatat proident tempor voluptate
                  commodo.
                </p>
                <a className="button orange-btn">read more</a>
              </div>
              <div className="col-3 col-6-sm">
                <h2 className="center">heading 4</h2>
                <p className="center">
                  Excepteur fugiat et excepteur ad eiusmod adipisicing eiusmod
                  eu elit.
                </p>
                <a className="button orange-btn">read more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>title</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-6-sm">
                <h2>heading 1</h2>
                <p>
                  Irure eu culpa elit nostrud aute commodo voluptate enim veniam
                  quis ut.
                </p>
              </div>
              <div className="col-6-sm">
                <h2>heading 2</h2>
                <p>
                  Tempor eiusmod elit labore ex labore nostrud occaecat culpa
                  aliqua nisi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default homePage;
