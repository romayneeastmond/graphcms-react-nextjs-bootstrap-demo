import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import MetaHead from './MetaHead'

const Page = ({ title, head, children }) => {
    return (
        <>
            <MetaHead title={title}>
                {head}
            </MetaHead>

            <>
                <Header />

                <main role='main'>
                    {children}
                </main>

                <Footer />
            </>
        </>
    )
}

Page.propTypes = {
    title: ''
}

Page.propTypes = {
    title: PropTypes.string,
    head: PropTypes.element
}

export default Page
