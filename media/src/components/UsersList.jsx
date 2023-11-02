import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return 'users list'
}

export default UsersList;