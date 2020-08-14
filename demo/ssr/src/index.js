import './style.css'
import React from 'react'
import { hydrate } from 'react-dom'
import Component from './Component'

hydrate(<Component />, document.getElementById('root'))
