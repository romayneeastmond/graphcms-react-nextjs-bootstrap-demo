import Link from 'next/link'
import Page from '../src/components/UI/Page'
import styles from '../styles/Home.module.scss'
import { getEpisodesByList, getPage } from '../src/services/contentService'

export const getStaticProps = async () => {
    const dataWelcome = (await getPage('home')) || null
    const dataWelcomeEpisodes = (await getPage('episodes')) || null
    const dataEpisodes = (await getEpisodesByList()) || []

    return {
        props: {
            welcome: dataWelcome,
            welcomeEpisode: dataWelcomeEpisodes,
            episodes: dataEpisodes
        },
        revalidate: 60
    }
}

const Home = ({ welcome, welcomeEpisode, episodes }) => {
    return (
        <Page title={'Welcome'}>
            <section className={[styles.full__page].join(' ')}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col'>
                            <h1>Welcome</h1>

                            {
                                welcome &&
                                <>
                                    <div dangerouslySetInnerHTML={{ __html: welcome.summary.html }} />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className={[styles.full__page].join(' ')}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col'>
                            <h2>Episodes</h2>

                            {
                                welcomeEpisode &&
                                <>
                                    <div dangerouslySetInnerHTML={{ __html: welcomeEpisode.summary.html }} />
                                </>
                            }

                            {
                                episodes && episodes.map((episode) => (
                                    <div key={episode.id}>
                                        <Link href={`/${episode.slug}`}>
                                            {episode.title}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className={[styles.half__page].join(' ')}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col'>
                            <h2>Social Media</h2>


                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default Home
