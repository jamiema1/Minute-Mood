import React, {useRef} from 'react'
import GratefulInput from './components/gratefulInput'
import {Button} from 'react-bootstrap'
import TodayGreatInput from './components/todayGreatInput'
import AffirmationsInput from './components/affirmationsInput'
import AmazingThingsInput from './components/amazingThingsInput'
import TodayBetterInput from './components/todayBetterInput'
import RatingInput from './components/ratingInput'

export default function AddJounalForm({dateString}) {

  const ratingRef = useRef()

  const gratefulRef1 = useRef()
  const gratefulRef2 = useRef()
  const gratefulRef3 = useRef()

  const todayGreatRef1 = useRef()
  const todayGreatRef2 = useRef()
  const todayGreatRef3 = useRef()

  const affirmationsRef1 = useRef()
  const affirmationsRef2 = useRef()

  const amazingthingsRef1 = useRef()
  const amazingthingsRef2 = useRef()
  const amazingthingsRef3 = useRef()

  const todaybetterRef1 = useRef()
  const todaybetterRef2 = useRef()

  return (
    <>
      <div>{dateString}</div>
      <RatingInput 
        ref={ratingRef}
      />
      <GratefulInput
        ref={{gratefulRef1, gratefulRef2, gratefulRef3}}
      />
      <TodayGreatInput
        ref={{todayGreatRef1, todayGreatRef2, todayGreatRef3}}
      />
      <AffirmationsInput
        ref={{affirmationsRef1, affirmationsRef2}}
      />
      <AmazingThingsInput
        ref={{amazingthingsRef1, amazingthingsRef2, amazingthingsRef3}}
      />
      <TodayBetterInput
        ref={{todaybetterRef1, todaybetterRef2}}
      ></TodayBetterInput>
      <Button
        onClick={() => {
          console.log(ratingRef.current.value)
          console.log(gratefulRef1.current.value)
          console.log(gratefulRef2.current.value)
          console.log(gratefulRef3.current.value)
          console.log(todayGreatRef1.current.value)
          console.log(todayGreatRef2.current.value)
          console.log(todayGreatRef3.current.value)
          console.log(affirmationsRef1.current.value)
          console.log(affirmationsRef2.current.value)
          console.log(amazingthingsRef1.current.value)
          console.log(amazingthingsRef2.current.value)
          console.log(amazingthingsRef3.current.value)
          console.log(todaybetterRef1.current.value)
          console.log(todaybetterRef2.current.value)
        }}
      >Test Submit</Button>
    </>
  )
}
