// Cria e exporta as diferentas páginas pelos ids
export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}
// Recupera o id pelo contexto da página e passa os dados como props
export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await response.json()
    return {
        props: { ninja: data }
    }
}

const NinjaDetails = ({ninja}) => {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
            <p>{ninja.email}</p>
        </div>
    );
}

export default NinjaDetails;