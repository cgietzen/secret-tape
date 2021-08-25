import Header from './Header'

export default function Page(props) {
    return (
        <>
        <Header />
        <div>
            <h2>Page component</h2>
            {props.children}
        </div>
        </>
    )
}