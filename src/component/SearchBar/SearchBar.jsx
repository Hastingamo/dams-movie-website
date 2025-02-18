import Input from "../list/Input";
import List from "../list/List";
function SearchBar() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case

    var lowerCase = e.target.value.toLowerCase();

    setInputText(lowerCase);
  };

  return (
    <>
      {/* <div>
        <input
          className="border-black border-solid border rounded p-1 text-black xm:text-2xl md:text-2xl md:p-2"
          placeholder="search"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)
          ).map((user) => (
            <li key={user.id}>{user.images}</li>

          ))}
        </ul>
 
      </div> */}
      {/* <div>
        <input
          className="border-black border-solid border rounded p-1 text-black xm:text-2xl md:text-2xl md:p-2"
          placeholder="search"
          type="text"
        onChange={(e) => setQuery(e.target.value)}
        />
        {Records.map((user) => {
          return (
            <div key={user.id}>
              {user.first_name}
              <img className="w-12 h-12" src={user.images} />
            </div>
          );
        })}
      </div> */}
      <div>
        <Input onChange={inputHandler} />
        <List  input={inputText} />
      </div>
    </>
  );
}

export default SearchBar;
