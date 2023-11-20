import React, {forwardRef} from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"

const GratefulInput = forwardRef(function GratefulInput(
  {defaultValue = ""},
  ref
) {
  const {gratefulRef1, gratefulRef2, gratefulRef3} = ref
  const {
    gratefulDefaultValue1, 
    gratefulDefaultValue2, 
    gratefulDefaultValue3
  } = defaultValue

  const inputs = [1,2,3]
  const title = "I am grateful for..."
  const ariaLabel = "What you are grateful for #"

  return (
    <>
      <Form.Label className="questionTitle">{title}</Form.Label>
      <InputGroup>
        <InputGroup.Text>{inputs[0]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[0]}
          defaultValue={gratefulDefaultValue1}
          ref={gratefulRef1} />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>{inputs[1]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[1]}
          defaultValue={gratefulDefaultValue2}
          ref={gratefulRef2} />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text>{inputs[2]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[2]}
          defaultValue={gratefulDefaultValue3}
          ref={gratefulRef3} />
      </InputGroup>
    </>
  )
})

export default GratefulInput