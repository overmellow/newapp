import axios from "axios";
import { useLoaderData, Form, redirect } from "react-router-dom";

export default function Human(props) {
    const human = useLoaderData();

    return (
        <>
            <h3>Human</h3>
            <h4>{human.name}</h4>
            <h4>{human.email}</h4>
            <Form method="post">
                <button type="submit">Delete</button>
            </Form>
        </>        
    )
}

export async function action({ params }) {
    console.log(params)
    await axios.delete(`http://localhost:8080/persons/${params.humanId}`)
    return redirect(`/humans`);
}