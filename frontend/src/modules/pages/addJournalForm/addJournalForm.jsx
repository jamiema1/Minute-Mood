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
import DeleteButtonModal from 'modules/common/components/deleteButtonModal'

export default function AddJournalForm({journal={}, handleClose}) {


  const ratingRef = useRef()

  const gratefulRef1 = useRef()
  const gratefulRef2 = useRef()
  const gratefulRef3 = useRef()

  const todayGreatRef1 = useRef()
  const todayGreatRef2 = useRef()
  const todayGreatRef3 = useRef()

  const affirmationsRef1 = useRef()
  const affirmationsRef2 = useRef()

  const amazingThingsRef1 = useRef()
  const amazingThingsRef2 = useRef()
  const amazingThingsRef3 = useRef()

  const todayBetterRef1 = useRef()
  const todayBetterRef2 = useRef()


  const queryClient = useQueryClient()
  
  const {isLoading: isLoadingJournals, data: journalData} = useQuery(
    journalEndpoint,
    () => axios.get(journalEndpoint),
    {
      onError: (error) => handleError(error),
    }
  )

  const addJournal = useMutation(
    (newJournal) => axios.post(journalEndpoint, newJournal),
    {
      onSuccess: (data, newJournal) => {
        queryClient.setQueryData(journalEndpoint, {
          data: {
            data: [
              ...journalData.data.data,
              {id: data.data.data[0].id, ...newJournal},
            ],
          },
        })
      },

      onError: (error) => handleError(error),
    }
  )

  const editJournal = useMutation(
    ({journalId, newJournal}) => {
      axios.put(journalEndpoint + "/" + journalId, newJournal)
    },
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

  const deleteJournal = useMutation(
    (journalId) => axios.delete(journalEndpoint + "/" + journalId),
    {
      onSuccess: (data, journalId) => {
        queryClient.setQueryData(journalEndpoint, {
          data: {
            data: [...journalData.data.data].filter((journal) => {
              return journal.id !== journalId
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

  const newJournalFlag = journalData.data.data.filter((currentJournal) => 
    journal.date == currentJournal.date).length == 0

  function newJournal() { 
    return {
      rating: parseInt(ratingRef.current.value),
      grateful1: gratefulRef1.current.value,
      grateful2: gratefulRef2.current.value,
      grateful3: gratefulRef3.current.value,
      todayGreat1: todayGreatRef1.current.value,
      todayGreat2: todayGreatRef2.current.value,
      todayGreat3: todayGreatRef3.current.value,
      affirmations1: affirmationsRef1.current.value,
      affirmations2: affirmationsRef2.current.value,
      amazing1: amazingThingsRef1.current.value,
      amazing2: amazingThingsRef2.current.value,
      amazing3: amazingThingsRef3.current.value,
      better1: todayBetterRef1.current.value,
      better2: todayBetterRef2.current.value,
      date: journal.date
    }
  }

  return (
    <>
      <RatingInput 
        ref={ratingRef}
        defaultValue={journal.rating}
      />
      <GratefulInput
        ref={{gratefulRef1, gratefulRef2, gratefulRef3}}
        defaultValue={{
          gratefulDefaultValue1: journal.grateful1,
          gratefulDefaultValue2: journal.grateful2, 
          gratefulDefaultValue3: journal.grateful3
        }}
      />
      <TodayGreatInput
        ref={{todayGreatRef1, todayGreatRef2, todayGreatRef3}}
        defaultValue={{
          todayGreatDefaultValue1: journal.todayGreat1,
          todayGreatDefaultValue2: journal.todayGreat2, 
          todayGreatDefaultValue3: journal.todayGreat3
        }}
      />
      <AffirmationsInput
        ref={{affirmationsRef1, affirmationsRef2}}
        defaultValue={{
          affirmationsDefaultValue1: journal.affirmations1,
          affirmationsDefaultValue2: journal.affirmations2, 
        }}
      />
      <AmazingThingsInput
        ref={{amazingThingsRef1, amazingThingsRef2, amazingThingsRef3}}
        defaultValue={{
          amazingThingsDefaultValue1: journal.amazing1,
          amazingThingsDefaultValue2: journal.amazing2, 
          amazingThingsDefaultValue3: journal.amazing3
        }}
      />
      <TodayBetterInput
        ref={{todayBetterRef1, todayBetterRef2}}
        defaultValue={{
          todayBetterDefaultValue1: journal.better1,
          todayBetterDefaultValue2: journal.better2, 
        }}
      ></TodayBetterInput>
      <Button
        onClick={() => {
          if (newJournalFlag) {
            addJournal.mutate(newJournal())
          } else {
            editJournal.mutate({
              journalId: journal.id,
              newJournal: newJournal()
            })
          }
          handleClose()
        }}
      >Save</Button>
      <Button onClick={() => handleClose()}>Cancel</Button>
      {!newJournalFlag &&
        <DeleteButtonModal 
          confirmAction={() => {
            deleteJournal.mutate(journal.id)
            handleClose()
          }}
          title={"Delete Entry"}>
        </DeleteButtonModal>}
    </>
  )
}
