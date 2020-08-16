import React, { Component } from "react"

class Switcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSwitchToggle: false,
    }
    this.toggleSwitcher = this.toggleSwitcher.bind(this)
    this.setTheme = this.setTheme.bind(this)
  }

  setTheme = color => {
    document.getElementById("colorTheme").href =
      "assets/css/colors/" + color + ".css"
  }

  toggleSwitcher = () => {
    this.setState({ isSwitchToggle: !this.state.isSwitchToggle })
  }

  render() {
    return (
      <React.Fragment>
        <div
          id="style-switcher"
          style={{ left: this.state.isSwitchToggle ? "0px" : "-189px" }}
        >
          <div>
            <h3>Select your color</h3>
            <ul className="pattern">
              <li>
                <a
                  href="#"
                  className="color1"
                  onClick={() => this.setTheme("red")}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="color2"
                  onClick={() => this.setTheme("green")}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="color3"
                  onClick={() => this.setTheme("pink")}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="color4"
                  onClick={() => this.setTheme("cyan")}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="color5"
                  onClick={() => this.setTheme("purple")}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="color6"
                  onClick={() => this.setTheme("blue")}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="color7"
                  onClick={() => this.setTheme("orange")}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="color8"
                  onClick={() => this.setTheme("yellow")}
                ></a>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <a
              href="#"
              onClick={this.toggleSwitcher}
              className="settings rounded-right"
            >
              <i className="mdi mdi-settings mdi-spin"></i>
            </a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Switcher
