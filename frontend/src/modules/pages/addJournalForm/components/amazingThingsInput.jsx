import React, {forwardRef} from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"

const amazingThingsInput = forwardRef(function amazingThingsInput(
  {defaultValue = ""},
  ref
) {
  const {amazingThingsRef1, amazingThingsRef2, amazingThingsRef3} = ref
  const {
    amazingThingsDefaultValue1, 
    amazingThingsDefaultValue2,
    amazingThingsDefaultValue3
  } = defaultValue

  const inputs = [1,2,3]
  const title = "Amazing things that happened today..."
  const ariaLabel = "Amazing thing that happened today #"

  return (
    <>
      <Form.Label className="questionTitle">{title}</Form.Label>
      <InputGroup>
        <InputGroup.Text>{inputs[0]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[0]}
          defaultValue={amazingThingsDefaultValue1}
          ref={amazingThingsRef1} />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>{inputs[1]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[1]}
          defaultValue={amazingThingsDefaultValue2}
          ref={amazingThingsRef2} />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text>{inputs[2]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[2]}
          defaultValue={amazingThingsDefaultValue3}
          ref={amazingThingsRef3} />
      </InputGroup>
    </>
  )
})

export default amazingThingsInput