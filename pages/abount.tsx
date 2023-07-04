import Link from "next/link"
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function AbountPage(){
    return(
        <>
            <h1 className={'title'}>
                Welcome to <Link href="/">Abount</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/abouunt.js</code>
            </p>
        </>
    )
}

AbountPage.getLayout = function getLayout (page:JSX.Element){
    return(
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}