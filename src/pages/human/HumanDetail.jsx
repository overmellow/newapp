import axios from "axios";
import { useLoaderData, useLocation, Form, redirect } from "react-router-dom";
// import { IPerson } from "../IPerson";

export default function HumanDetail(props) {
    // const human = useLoaderData();
    const location = useLocation();
    const human = location.state?.data;
    return (
        <>
        <h3>Human Detail</h3>
        <h4>{human.name}</h4>
        <h4>{human.email}</h4>
        <Form method="post">
            <button type="submit">Delete</button>
        </Form>        
        </>        
    )
}

// export async function loader({ params }) {
//     const note = await getNote(params.noteId);
//     if (!note) throw new Response("", { status: 404 });
//     return note;
//   }

export async function action({ params }) {
    await axios.delete(`http://localhost:8080/persons/${params.humanId}`)
    return redirect(`/humans`);
}