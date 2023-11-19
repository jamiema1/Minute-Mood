import React, {forwardRef} from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"

const AmazingThingsInput = forwardRef(function AmazingThingsInput(
  {defaultValue = ""},
  ref
) {
  const {amazingthingsRef1, amazingthingsRef2, amazingthingsRef3} = ref
  const {
    amazingthingsDefaultValue1, 
    amazingthingsDefaultValue2,
    amazingthingsDefaultValue3
  } = defaultValue

  const inputs = [1,2,3]
  const title = "Amazing things that happened today..."
  const ariaLabel = "Amazing thing that happened today #"

  return (
    <>
      <Form.Label>{title}</Form.Label>
      <InputGroup>
        <InputGroup.Text>{inputs[0]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[0]}
          defaultValue={amazingthingsDefaultValue1}
          ref={amazingthingsRef1} />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>{inputs[1]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[1]}
          defaultValue={amazingthingsDefaultValue2}
          ref={amazingthingsRef2} />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text>{inputs[2]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[2]}
          defaultValue={amazingthingsDefaultValue3}
          ref={amazingthingsRef3} />
      </InputGroup>
    </>
  )
})

export default AmazingThingsInput