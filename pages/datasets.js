import Head from 'next/head'
import Layout from '../components/layout'
import Link from "next/link";
const title = "STW - Datasets"

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="modal-body">
                <div className="page-header">
                    <h1>Spatial Transcritome Datasets </h1>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <p>Display the Spatial Transcritome Datasets. Click the ST ID and view the details of the
                            data.</p>
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ST ID</th>
                            <th>Data Types</th>
                            <th>Species</th>
                            <th>Organs</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Link href="/dataset-page"><a>WT A2-2 Mouse E14.5 Brain Coronal Section</a></Link></td>
                            <td>Stereo-seq</td>
                            <td>Mouse</td>
                            <td>Brain</td>
                        </tr>
                        <tr>
                            <td><Link href="/dataset-page"><a>WT A2-2 Mouse E14.5 Brain Coronal Section</a></Link></td>
                            <td>Stereo-seq</td>
                            <td>Mouse</td>
                            <td>Brain</td>
                        </tr>
                        <tr>
                            <td><Link href="/slideseq"><a>SCP815-Puck_190921_19</a></Link></td>
                            <td>Slide-seq</td>
                            <td>Mouse</td>
                            <td>Brain</td>
                        </tr>
                        <tr>
                            <td><Link href="/slideseq"><a>SCP815-Puck_190921_19</a></Link></td>
                            <td>Slide-seq</td>
                            <td>Mouse</td>
                            <td>Brain</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}