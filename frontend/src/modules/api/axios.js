import Axios from "axios"

// TODO: automate this variable so that it automatically toggles when the
//       npm run deploy command is run
const local = false

const localhost = "http://localhost"
const serverhost = "https://jamiema.ca"
const HOST_NAME = local ? localhost : serverhost

const localRoot = "http://localhost:3000/Minute-Mood/"
const serverRoot = "https://jamiema1.github.io/Minute-Mood/"
export const ROOT_NAME = local ? localRoot : serverRoot

export default Axios.create({
  baseURL: HOST_NAME,
})

export const journalEndpoint = "./journal"

export const handleError = (error) => {
  console.log(error.message + ": " + error.response.data.error)
  alert(error.message + ": " + error.response.data.error)
}