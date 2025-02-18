import JSONDATA from "../user/User.json";
const [searchTerm, setSearchTerm] = useState("");

function List() {
  return (
    <>
      <div>
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key=[val.id]) => {
          return <div>{val.movie_name} </div>;
        })}
      </div>
    </>
  );
}

export default List;
