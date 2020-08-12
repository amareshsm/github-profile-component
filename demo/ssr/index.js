const React = require('react')
const ReactDOM = require('react-dom/server')
const express = require('express')
const { Profile } = require('github-profile-component')

const app = express()
const port = 3000

app.get('*', (req, res) => {
  const html = ReactDOM.renderToString(
    React.createElement(Profile, { btnContent: 'click me!' }),
  )
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Github Profile Component</title>
</head>
<body>
  ${html}
</body>
</html>`)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
