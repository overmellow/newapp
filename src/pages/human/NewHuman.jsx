import { useLoaderData, Form, redirect } from "react-router-dom";
import axios from 'axios';
// import { IPerson } from "../IPerson";

export default function NewHuman(props) {
    return (
        <Form method="post">
          <p>
            <label>
              Name
              <br />
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email
              <br />
              <input type="Email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Save</button>
          </p>
        </Form>
      );
}

export async function action({ request }) {
    const formData = await request.formData();
    const human = {
        name: formData.get("name"),
        email: formData.get("email"),
    };
    const response = await axios.post('http://localhost:8080/persons', human)
    return redirect(`/humans/${response.data.id}`);
  }