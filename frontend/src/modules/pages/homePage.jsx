import React from 'react'
import Calendar from './calendar'
import DeleteButtonModal from 'modules/common/components/deleteButtonModal'



export default function HomePage() {
  return (
    <div className="App">
      <div>HomePage</div>  
      <Calendar></Calendar>
      <DeleteButtonModal 
        confirmAction={() => alert("deleted")} 
        title={"Test Delete"}
      ></DeleteButtonModal>
    </div>
    
    
  )
}
