import React from 'react'
import Calendar from './calendar'
import DeleteButtonModal from 'modules/common/components/deleteButtonModal'
import JournalModal from 'modules/common/components/journalModal'



export default function HomePage() {
  return (
    <div className="App">
      <div>HomePage</div>  
      <Calendar></Calendar>
      <DeleteButtonModal 
        confirmAction={() => alert("deleted")} 
        title={"Test Delete"}
      ></DeleteButtonModal>
      <JournalModal
        form={<div>Test</div>}
        title={"Add Journal"}
      ></JournalModal>
    </div>
    
    
  )
}
