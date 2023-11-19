import React, {useState} from "react"
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'

import Modal from "react-bootstrap/Modal"
import AddJounalForm from "./addJournalForm/addJounalForm"

export default function BasicDateCalendar() {
  
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          // sx={{
          //   minWidth: 500
          // }}
          views={['day']}
          onChange={(newDate) => {
            setDate(new Date(newDate))
            handleShow()
          }} 
        />
      </LocalizationProvider>
      <Modal
        show={show} 
        onHide={handleClose} 
        backdrop="static" 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {"5-Minute Journal - " + date.toLocaleDateString()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddJounalForm dateString={date.toLocaleDateString()}>
          </AddJounalForm>
        </Modal.Body>
      </Modal>
    </>
  )
}