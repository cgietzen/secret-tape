import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
    return (
        <header>
            <div>
                <Nav/>
            </div>
            <div>
                <p>Search</p>
            </div>
        </header>
    )
}