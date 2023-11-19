import React, {forwardRef} from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"

const TodayGreatInput = forwardRef(function TodayGreatInput(
  {defaultValue = ""},
  ref
) {

  const {todayGreatRef1, todayGreatRef2, todayGreatRef3} = ref
  const {
    todayGreatDefaultValue1, 
    todayGreatDefaultValue2, 
    todayGreatDefaultValue3
  } = defaultValue

  const inputs = [1,2,3]
  const title = "What would make today great?"
  const ariaLabel = "What would make today great #"

  return (
    <>
      <Form.Label>{title}</Form.Label>
      <InputGroup>
        <InputGroup.Text>{inputs[0]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[0]}
          defaultValue={todayGreatDefaultValue1}
          ref={todayGreatRef1} />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>{inputs[1]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[1]}
          defaultValue={todayGreatDefaultValue2}
          ref={todayGreatRef2} />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text>{inputs[2]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[2]}
          defaultValue={todayGreatDefaultValue3}
          ref={todayGreatRef3} />
      </InputGroup>
    </>
  )
})

export default TodayGreatInput