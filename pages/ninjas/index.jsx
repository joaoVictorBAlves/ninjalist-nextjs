import Head from "next/head";
import Link from "next/link";
import Style from "../../styles/Ninjas.module.css"

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Listing</title>
            </Head>
            {ninjas.map((ninja) => (
                <div key={ninja.id}>
                    <Link className={Style.single} href={`ninjas/${ninja.id}`}>
                        <h3>{ninja.name}</h3>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default Ninjas;