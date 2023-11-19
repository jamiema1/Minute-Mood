import React, {forwardRef} from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"

const RatingInput = forwardRef(function RatingInput(
  {defaultValue},
  ref
) {

  const title = 
    "On the scale of 1 (not so great) to 10 (amazing), I am feeling:"
  const ariaLabel = "Rating"
  
  // TODO: limit input to 1-10

  return (
    <>
      <Form.Label>{title}</Form.Label>
      <InputGroup className="mb-4">
        <Form.Control 
          type="number"
          aria-label={ariaLabel}
          defaultValue={defaultValue}
          ref={ref} />
      </InputGroup>
    </>
  )
})

export default RatingInput