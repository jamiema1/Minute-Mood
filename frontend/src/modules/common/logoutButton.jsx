import React from "react"
import {useAuth0} from "@auth0/auth0-react"
import  Button  from "react-bootstrap/Button"
import {ROOT_NAME} from "modules/api/axios"

const LogoutButton = () => {
  const {logout} = useAuth0()

  return (
    <Button onClick={() =>
      logout({logoutParams: {returnTo: ROOT_NAME}})}>
      Log Out
    </Button>
  )
}

export default LogoutButton