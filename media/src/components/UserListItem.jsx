import { FiTrash } from "react-icons/fi";
import Button from "./Button";
import { removeUser } from "../store/thunks/removeUser";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <FiTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}> 
      <AlbumList user={user} />
    </ExpandablePanel>;
}

export default UsersListItem;
