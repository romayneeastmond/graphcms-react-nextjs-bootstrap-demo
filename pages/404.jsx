import React from 'react'
import Page from '../src/components/UI/Page'

const Custom404 = () => {
    return (
        <Page title={'404'}>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <h1>Error 404</h1>

                        <p>
                            I started reading a book about mazes- I got lost in it.
                        </p>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Custom404;