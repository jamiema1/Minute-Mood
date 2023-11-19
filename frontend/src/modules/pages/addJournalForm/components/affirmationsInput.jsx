import React, {forwardRef} from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"

const AffirmationsInput = forwardRef(function AffirmationsInput(
  {defaultValue = ""},
  ref
) {
  const {affirmationsRef1, affirmationsRef2} = ref
  const {
    affirmationsDefaultValue1, 
    affirmationsDefaultValue2
  } = defaultValue

  const inputs = [1,2]
  const title = "Daily affirmations. I am..."
  const ariaLabel = "Daily affirmation #"

  return (
    <>
      <Form.Label>{title}</Form.Label>
      <InputGroup>
        <InputGroup.Text>{inputs[0]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[0]}
          defaultValue={affirmationsDefaultValue1}
          ref={affirmationsRef1} />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text>{inputs[1]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[1]}
          defaultValue={affirmationsDefaultValue2}
          ref={affirmationsRef2} />
      </InputGroup>
    </>
  )
})

export default AffirmationsInput