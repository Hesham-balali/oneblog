import { useLoaderData } from "react-router-dom";
import { getCurrentUser } from "../api/users";

export async function loader() {
  const user = await getCurrentUser();
  return { user };
}
export const Dashboard = () => {
  const { user } = useLoaderData();

  return (
    <div>
      <p>{user.username}</p>
    </div>
  );
};
