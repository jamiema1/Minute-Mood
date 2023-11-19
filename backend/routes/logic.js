import mysql from 'mysql'
import * as dotenv from 'dotenv'

dotenv.config()

const IdNotFoundError = {error: 'Error - id not found'}

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DATABASE_HOSTNAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
})

export function getOne (res, tableName, id) {
  console.log(new Date().tolocaletimestring(), tableName + ': Get One - ' + id)

  const query = 'SELECT * FROM ' + tableName + ' WHERE id = ' + id

  db.query(query, (err, data) => {
    if (err) {
      return res.status(400).json({error: err})
    }
    if (data.length === 0) {
      return res.status(404).json(IdNotFoundError)
    }
    res.status(200).json({data})
  })
}

export function getAll (res, tableName) {
  console.log(new Date().toLocaleTimeString(), tableName + ': Get All')
  const query = 'SELECT * FROM ' + tableName

  db.query(query, (err, data) => {
    if (err) {
      return res.status(400).json({error: err})
    }
    res.status(200).json({data})
  })
}

export function getQuery (res, tableName, query) {
  console.log(new Date().toLocaleTimeString(),
    tableName + ': Get Query - ' + query)
  const sqlQuery = makeGetQueryString(JSON.parse(query))

  function makeGetQueryString (query) {
    return ''.concat(
      SELECT(query.select),
      FROM(),
      WHERE(query.where),
      ORDERBY(query.orderby),
      LIMIT(query.limit)
    ).trimEnd().concat(';')
  }

  function SELECT (columns) {
    if (columns === undefined) {
      return 'SELECT * '
    }

    let q = 'SELECT '

    columns.forEach(column => {
      q = q.concat(column + ', ')
    })

    return q.substring(0, q.length - 2).concat(' ')
  }

  function FROM () {
    return 'FROM ' + tableName + ' '
  }

  function WHERE (query) {
    if (query === '') {
      return ''
    }
    return 'WHERE ' + query + ' '
  }

  function ORDERBY (columns) {
    if (columns === undefined) {
      return ''
    }

    let q = 'ORDER BY '
    columns.forEach(column => {
      const col = Object.keys(column)[0]
      const value = Object.values(column)[0]
      q = q.concat(col, ' ', value, ', ')
    })

    return q.substring(0, q.length - 2).concat(' ')
  }

  function LIMIT (limit) {
    if (limit === undefined) {
      return ''
    }
    return 'LIMIT ' + limit
  }

  db.query(sqlQuery, (err, data) => {
    if (err) {
      return res.status(400).json({error: err.sqlMessage})
    }
    res.status(200).json({data})
  })
}

export function addOne (res, tableName, values, stringValues) {
  console.log(new Date().toLocaleTimeString(),
    tableName + ': Add One')
  console.log(values)
  if (validateValues(res, values, stringValues)) return

  const valueArray = []
  let valueNames = '('
  let numValues = '('
  values.forEach((value, key) => {
    valueArray.push(value)
    valueNames = valueNames.concat(key + ', ')
    numValues = numValues.concat('?,')
  })

  valueNames = valueNames.substring(0, valueNames.length - 2).concat(')')
  numValues = numValues.substring(0, numValues.length - 1).concat(');')

  const query = 'INSERT INTO ' + tableName + ' ' + valueNames + ' VALUES ' +
    numValues
  

  db.query(query, valueArray, (err, data) => {
    if (err) {
      return res.status(400).json({error: err.sqlMessage})
    }
    res.status(200)
      .json({data: [{id: JSON.parse(JSON.stringify(data)).insertId}]})
  })
}

export function updateOne (res, tableName, id, values, stringValues) {
  console.log(new Date().toLocaleTimeString(),
    tableName + ': Update One - ' + id)
  console.log(values)
  if (validateValues(res, values, stringValues)) return

  let query = 'UPDATE ' + tableName + ' SET '

  values.forEach((value, key) => {
    if (stringValues.includes(key)) {
      query = query.concat(key + ' = \'' + value + '\', ')
    } else {
      query = query.concat(key + ' = ' + value + ', ')
    }
  })

  query = query.substring(0, query.length - 2).concat(' WHERE id = ' + id + ';')

  db.query(query, (err, data) => {
    if (err) {
      return res.status(400).json({error: err.sqlMessage})
    }
    if (JSON.parse(JSON.stringify(data)).affectedRows === 0) {
      return res.status(404).json(IdNotFoundError)
    }
    if (JSON.parse(JSON.stringify(data)).changedRows === 0) {
      return res.status(202).json({error: 'Error - no data updated'})
    }
    res.status(200).json({data: [{id}]})
  })
}

export function deleteOne (res, tableName, id) {
  console.log(new Date().toLocaleTimeString(),
    tableName + ': Delete One - ' + id)
  const query = 'DELETE FROM ' + tableName + ' WHERE id = ' + id + ';'

  db.query(query, (err, data) => {
    if (err) {
      return res.status(400).json({error: err.sqlMessage})
    }
    if (JSON.parse(JSON.stringify(data)).affectedRows === 0) {
      return res.status(404).json(IdNotFoundError)
    }
    res.status(200).json({data: [{id}]})
  })
}

function validateValues (res, values, stringValues) {
  let invalid = false
  values.forEach((value, key) => {
    if (invalid) return
    if (stringValues.includes(key) && typeof value !== 'string') {
      invalid = true
      return res.status(400).json(
        {error: 'Error - ' + key + ' is not of type string'}
      )
    } else if (!stringValues.includes(key) && !Number.isInteger(value)) {
      invalid = true
      return res.status(400).json(
        {error: 'Error - ' + key + ' is not of type integer'}
      )
    }
  })
  return invalid
}
