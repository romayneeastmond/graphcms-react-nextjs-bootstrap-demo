import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyright }) => {
    return (
        <footer className='p-3 px-md-4'>
            <hr />
            <p>&copy; {new Date().getFullYear()}. All Right Reserved. {copyright}</p>
        </footer>
    )
}

Footer.defaultProps = {
    copyright: 'Website'
}

Footer.propTypes = {
    copyright: PropTypes.string
}

export default Footer
