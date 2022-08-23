import Layout from '../components/general/Layout'
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 4000)
    }, [])

    return (
        <div className="main">
            <Layout>
                <div className="not-found">
                    <div className="f404">
                        <h1>Ooooops... Something went wrong.</h1>
                        <h2>That page cannot be found.</h2>
                        <p>Let's head back <Link href="/"><a>Home</a></Link>.</p>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default NotFound;