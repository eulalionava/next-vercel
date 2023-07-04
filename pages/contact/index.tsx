import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage(){
    return(
        <MainLayout>
             <h1 className={'title'}>
                Welcome to <Link href="/">Contact</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/abouunt.js</code>
            </p>
        </MainLayout>
    )
}