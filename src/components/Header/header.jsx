import React from 'react'
import './Header.scss'


import PropTypes from 'prop-types'

export default function Header(props) {
  const className = props.className ? props.className : 'header-component'
  const title = props.title ? props.title : 'Home';

  return (
    <div className={className}>
      <h1>{title}</h1>
    </div>
  );
}


Header.propTypes = {
  title: PropTypes.string
}