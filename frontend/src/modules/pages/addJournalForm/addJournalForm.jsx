import React, {useRef} from 'react'
import GratefulInput from './components/gratefulInput'
import {Button} from 'react-bootstrap'
import TodayGreatInput from './components/todayGreatInput'
import AffirmationsInput from './components/affirmationsInput'
import AmazingThingsInput from './components/amazingThingsInput'
import TodayBetterInput from './components/todayBetterInput'
import RatingInput from './components/ratingInput'
import axios, {handleError, journalEndpoint} from 'modules/api/axios'
import {useMutation, useQuery, useQueryClient} from "react-query"

export default function AddJournalForm({journal, handleClose}) {

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


  const queryClient = useQueryClient()
  
  const {isLoading: isLoadingJournals, data: journalData} = useQuery(
    journalEndpoint,
    () => axios.get(journalEndpoint),
    {
      onError: (error) => handleError(error),
    }
  )

  const editJournal = useMutation(
    ({journalId, newJournal}) =>
      axios.put(journalEndpoint + "/" + journalId, newJournal),
    {
      onSuccess: (data, {journalId, newJournal}) => {
        queryClient.setQueryData(journalEndpoint, {
          data: {
            data: [...journalData.data.data].map((journal) => {
              return journal.id === journalId ? 
                {id: journalId, ...newJournal} : journal
            }),
          },
        })
      },
      onError: (error) => handleError(error),
    }
  )

  if (isLoadingJournals) {
    return <div>Loading...</div>
  }

  const newJournal = {
    rating: ratingRef.current.value,
    grateful1: gratefulRef1.current.value,
    grateful2: gratefulRef2.current.value,
    grateful3: gratefulRef3.current.value,
    todayGreat1: todayGreatRef1.current.value,
    todayGreat2: todayGreatRef2.current.value,
    todayGreat3: todayGreatRef3.current.value,
    affirmations1: affirmationsRef1.current.value,
    affirmations2: affirmationsRef2.current.value,
    amazing1: amazingthingsRef1.current.value,
    amazing2: amazingthingsRef2.current.value,
    amazing3: amazingthingsRef3.current.value,
    better1: todaybetterRef1.current.value,
    better2: todaybetterRef2.current.value,
    date: journal.date
  }

  return (
    <>
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

          editJournal.mutate({
            journalId: journal.id,
            newJournal: newJournal
          })
          handleClose()
        }}
      >Save</Button>
      <Button onClick={() => handleClose()}>Cancel</Button>
    </>
  )
}
