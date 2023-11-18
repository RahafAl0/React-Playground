import { FiTrash } from "react-icons/fi";
import Button from "./Button";
import ExpandablePanel from "./ExbandablePanel";

function AlbumListItem({ album }) {
  const header = (
    <div>
      <Button>
        <FiTrash />
      </Button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumListItem;
