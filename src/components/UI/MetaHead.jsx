import Head from 'next/head'
import PropTypes from 'prop-types'

const MetaHead = ({ title, children }) => {
    const defaultTitle = 'Website'

    return (
        <Head>
            <title>{title.length > 0 ? `${defaultTitle} | ${title}` : defaultTitle}</title>
            <link rel="icon" href="/favicon-website.png" />
            {children}
        </Head>
    )
}

MetaHead.defaultProps = {
    title: ''
}

MetaHead.propTypes = {
    title: PropTypes.string
}

export default MetaHead