import DeleteButtonModal from 'modules/common/components/deleteButtonModal'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <DeleteButtonModal confirmAction={() => alert("deleted")} 
        title={"Test Delete"}></DeleteButtonModal>
    </>
  )
}
