import express from 'express'
import * as dotenv from 'dotenv'
import {getOne, getAll, addOne, updateOne, deleteOne, getQuery}
  from './logic.js'

dotenv.config()

const stringValues = [
  'grateful1',
  'grateful2',
  'grateful3',
  'todayGreat1',
  'todayGreat2',
  'todayGreat3',
  'affirmations1',
  'affirmations2',
  'amazing1',
  'amazing2',
  'amazing3',
  'better1',
  'better2',
  'date',
]

function getValuesMap (req) {
  return new Map([
    ['rating', req.body.rating],
    ['grateful1', req.body.grateful1],
    ['grateful2', req.body.grateful2],
    ['grateful3', req.body.grateful3],
    ['todayGreat1', req.body.todayGreat1],
    ['todayGreat2', req.body.todayGreat2],
    ['todayGreat3', req.body.todayGreat3],
    ['affirmations1', req.body.affirmations1],
    ['affirmations2', req.body.affirmations2],
    ['amazing1', req.body.amazing1],
    ['amazing2', req.body.amazing2],
    ['amazing3', req.body.amazing3],
    ['better1', req.body.better1],
    ['better2', req.body.better2],
    ['date', req.body.date],
  ])
}

const journalRouter = express.Router()

journalRouter.get('/:id', (req, res) => {
  getOne(res, process.env.JOURNAL_TABLE_NAME, req.params.id)
})

journalRouter.get('/', (req, res) => {
  getAll(res, process.env.JOURNAL_TABLE_NAME)
})

journalRouter.get('/query/:query', (req, res) => {
  getQuery(res, process.env.JOURNAL_TABLE_NAME, req.params.query)
})

journalRouter.post('/', (req, res) => {
  addOne(res, process.env.JOURNAL_TABLE_NAME, getValuesMap(req), stringValues)
})

journalRouter.put('/:id', (req, res) => {
  updateOne(res, process.env.JOURNAL_TABLE_NAME, req.params.id,
    getValuesMap(req), stringValues)
})

journalRouter.delete('/:id', (req, res) => {
  deleteOne(res, process.env.JOURNAL_TABLE_NAME, req.params.id)
})

export default journalRouter
