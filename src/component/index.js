import React from 'react'
import PropTypes from 'prop-types'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { btnContent } = this.props
    return <h2 className="button_primary">{btnContent}</h2>
  }
}
Profile.propTypes = {
  btnContent: PropTypes.string,
}

Profile.defaultProps = {
  btnContent: 'button',
}
export default Profile
