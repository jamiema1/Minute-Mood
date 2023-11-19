import React, {useState} from "react"
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'

import Modal from "react-bootstrap/Modal"
import AddJournalForm from "./addJournalForm/addJournalForm"

import {useQuery} from "react-query"
import axios, {handleError, journalEndpoint} from "modules/api/axios"

export default function BasicDateCalendar() {
  
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  
  
  const {isLoading: isLoadingJournals, data: journalData} = useQuery(
    journalEndpoint,
    () => axios.get(journalEndpoint),
    {
      onError: (error) => handleError(error),
    }
  )

  if (isLoadingJournals) {
    return <div>Loading...</div>
  }
  

  const journal = () => {
    const selectedJournal = journalData.data.data.filter((journal) => {
      return journal.date.split("T")[0] == date.toISOString().split("T")[0]
    })

    if (selectedJournal.length == 1) {
      return selectedJournal[0]
    } else {
      return {date: date.toISOString()}
    }

  }

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
          <AddJournalForm journal={journal()} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}