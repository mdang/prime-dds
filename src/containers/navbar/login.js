import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Description, Title } from "../../components/title/index"
import { FormGroup, CustomInput } from "reactstrap"
import InputBox from "../../components/input/index"
import Image from "../../components/image/index"
import PreviewIcon from "../../components/icon"
import GoogleImg from "../../assets/images/login/google.png"
import Facebook from "../../assets/images/login/facebook.png"
import Twitter from "../../assets/images/login/twitter.png"
import Check from "../../assets/images/login/check.png"
import { x } from "react-icons-kit/feather"

function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setErrors] = useState("")
  const [errorCreate, setErrorsCreate] = useState("")
  const [success, setSuccess] = useState(false)

  const closeSuccesPopup = () => {
    window.location.reload()
  }

  return (
    <div className="login-register-outer">
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>

        <TabPanel>
          <div className="tabfirst-block">
            <Title Class="tab-title" Name="Welcome BusLine" />
            <Description Class="tab-dec" Name="Please login to continue" />
            <button type="button" className="google login-btn1">
              <Image Path={GoogleImg} Class="login-img" />
              Sign in with Google
            </button>
            <button type="button" className="twitter login-btn1">
              <Image Path={Twitter} Class="login-img" />
              Sign in with Twitter
            </button>
            <button type="button" className="facebook login-btn1">
              <Image Path={Facebook} Class="login-img" />
              Sign in with Facebook
            </button>
            <div className="form-wrapper">
              <FormGroup>
                <InputBox
                  Type="text"
                  Name="email"
                  PlaceHolder="Email Address"
                  ChangeValue={setEmail}
                />
              </FormGroup>
              <FormGroup>
                <InputBox
                  Type="password"
                  Name="password"
                  PlaceHolder="Password"
                  ChangeValue={setPassword}
                />
              </FormGroup>

              <FormGroup className="checkbox-password">
                <CustomInput
                  type="checkbox"
                  id="exCustomCheckbox"
                  label="Remember Me"
                />
                <button type="button" className="forget-password">
                  Forget Password
                </button>
              </FormGroup>
              <button type="button" className="login-btn gradient-color">
                Login
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tabfirst-block">
            <Title Class="tab-title" Name="Welcome BusLine" />
            <Description Class="tab-dec" Name="Just register to join with us" />
            <div className="form-wrapper">
              <FormGroup>
                <InputBox Type="text" Name="name" PlaceHolder="Full Name" />
              </FormGroup>
              <FormGroup>
                <InputBox
                  Type="text"
                  Name="email"
                  PlaceHolder="Email Address"
                  ChangeValue={setEmail}
                />
              </FormGroup>
              <FormGroup>
                <InputBox
                  Type="password"
                  Name="password"
                  PlaceHolder="Password"
                  ChangeValue={setPassword}
                />
              </FormGroup>
              <button type="button" className="login-btn gradient-color">
                Register
              </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <div className="login-close gradient-color" onClick={props.Click}>
        <PreviewIcon icon={x} />
      </div>
      {success && (
        <div className="login-success-popup">
          <div className="login-success-box">
            <div className="login-check-images">
              <Image Path={Check} />
            </div>
            <div className="login-success-content">
              <Title Class="login-success-title" Name="Success" />
              <Description
                Class="login-success-dec"
                Name="Thank you for visit our website."
              />
              <button
                type="button"
                className="login-success-btn"
                onClick={closeSuccesPopup}
              >
                {" "}
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
