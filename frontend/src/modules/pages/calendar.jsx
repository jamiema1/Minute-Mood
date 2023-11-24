import React, {useState} from "react"
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'

import Modal from "react-bootstrap/Modal"
import AddJournalForm from "./addJournalForm/addJournalForm"

import {useQuery} from "react-query"
import axios, {handleError, journalEndpoint} from "modules/api/axios"

import {Badge} from "@mui/material"
import {PickersDay} from "@mui/x-date-pickers"

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
        <div className="dateCalendarSpacer"></div>
        <DateCalendar 
          className="dateCalendar"
          views={['day']}
          onChange={(newDate) => {
            setDate(new Date(newDate))
            handleShow()
          }} 
          shouldDisableDate={(date) => {
            return new Date().toISOString().split("T")[0] <= 
              new Date(date).toISOString().split("T")[0]
          }
          }
          slots={{
            day: (props) => {
              const isSelected = !props.outsideCurrentMonth && 
              [...journalData.data.data].map((journal) => {
                return new Date(journal.date).toISOString().split("T")[0]
              }).indexOf(new Date(props.day).toISOString().split("T")[0]) >= 0


              return (
                <Badge
                  key={props.day.toString()}
                  overlap="circular"
                  badgeContent={isSelected ? '✅' : undefined}
                >
                  <PickersDay {...props} />
                </Badge>
              )
            },
          }}
        />
      </LocalizationProvider>
      <Modal
        show={show} 
        onHide={handleClose} 
        backdrop="static" 
        centered
      >
        <Modal.Header
          className="modalHeader"
          closeButton
        >
          <Modal.Title>
            {"5-Minute Journal - " + date.toLocaleDateString()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <AddJournalForm journal={journal()} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}