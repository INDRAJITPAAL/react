import ErrorBaundary from "./ErrorBaundary"

export default function App() {
    try {
        throw new Error("hello");
    } catch (e) {
        console.error(e.message);

    }
    return <>

        <ErrorBaundary>

            <Card1 />

            <Card2 />

        </ErrorBaundary>


    </>//=>this is claeed Fragment
}

function Card1() {

    throw new Error("err")
    return <>
        <div>
            hi there 1
        </div>
    </>
}
function Card2() {

    return <>
        <div>
            hi there 2
        </div>
    </>
}