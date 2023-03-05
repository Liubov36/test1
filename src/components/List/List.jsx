import { Card } from "../Card/Card.jsx";
import { List } from "./List.styled";

export const CardList = ({ users, update }) => {
  return (
    <article>
      <List>
        {users.map((user) => (
          <li key={user.id}>
            <Card userData={user} update={update} />
          </li>
        ))}
      </List>
    </article>
  );
};