import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Container, Empty, Emojis, Input } from "./components";
const App = () => {
   const [emojisData, setEmojisData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [searchText, setSearchText] = useState("");
   useEffect(() => {
      async function fetchEmojis() {
         setLoading(true);
         try {
            const res = await axios.get("https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28");
            setEmojisData(res.data);
            setLoading(false);
         } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
         }
      }
      fetchEmojis();
   }, []);

   const handleSearchEmojis = (e) => {
      setSearchText(e.target.value);
   };

   return (
      <>
         <Navbar />
         <Container>
            <Input onChange={handleSearchEmojis} value={searchText} />
            {loading && <Empty text="Loading..." />}
            {error && <Empty text="Ooopsss...." />}
            {emojisData.length > 0 && <Emojis emojisData={emojisData} searchText={searchText} />}
         </Container>
      </>
   );
};

export default App;
