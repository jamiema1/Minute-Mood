import React, {forwardRef} from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"

const TodayBetterInput = forwardRef(function TodayBetterInput(
  {defaultValue = ""},
  ref
) {
  const {todayBetterRef1, todayBetterRef2} = ref
  const {
    todayBetterDefaultValue1, 
    todayBetterDefaultValue2
  } = defaultValue

  const inputs = [1,2]
  const title = "How could I have made today better?"
  const ariaLabel = "Reason #"

  return (
    <>
      <Form.Label className="questionTitle">{title}</Form.Label>
      <InputGroup>
        <InputGroup.Text>{inputs[0]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[0]}
          defaultValue={todayBetterDefaultValue1}
          ref={todayBetterRef1} />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text>{inputs[1]}.</InputGroup.Text>
        <Form.Control 
          aria-label={ariaLabel + inputs[1]}
          defaultValue={todayBetterDefaultValue2}
          ref={todayBetterRef2} />
      </InputGroup>
    </>
  )
})

export default TodayBetterInput