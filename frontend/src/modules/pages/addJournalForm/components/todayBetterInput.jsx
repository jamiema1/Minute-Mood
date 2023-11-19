import React, {forwardRef} from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"

const TodayBetterInput = forwardRef(function TodayBetterInput(
  {defaultValue = ""},
  ref
) {
  const {todaybetterRef1, todaybetterRef2} = ref
  const {
    todaybetterDefaultValue1, 
    todaybetterDefaultValue2
  } = defaultValue

  const inputs = [1,2]
  const title = "How could I have made today better?"
  const ariaLabel = "Reason #"

  return (
    <>
      <Form.Label>{title}</Form.Label>
      <InputGroup>
        <InputGroup.Text>{inputs[0]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[0]}
          defaultValue={todaybetterDefaultValue1}
          ref={todaybetterRef1} />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text>{inputs[1]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[1]}
          defaultValue={todaybetterDefaultValue2}
          ref={todaybetterRef2} />
      </InputGroup>
    </>
  )
})

export default TodayBetterInput