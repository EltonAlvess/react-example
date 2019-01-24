import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Alves'>
        <Member name='Elton'  />
    </Family>
,document.getElementById('app'))