import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Emojis.module.css";
import { EmojiBox, Empty } from "../index";
import { filterEmojis } from "../../utils/filterEmojis";

const Emojis = ({ emojisData, searchText }) => {
   const [filteredEmojis, setFilteredEmojis] = useState([]);
   useEffect(() => {
      setFilteredEmojis(
         filterEmojis({
            emojisData,
            searchText,
         })
      );
   }, [emojisData, searchText]);

   return filteredEmojis.length > 0 ? (
      <div className={styles.emojisGrid}>
         {filteredEmojis.map((data, index) => (
            <EmojiBox key={index} title={data.title} symbol={data.symbol} />
         ))}
      </div>
   ) : (
      <Empty text="Oops, zero finding. Let's try another keyword!" />
   );
};
Emojis.propTypes = {
   emojisData: PropTypes.array,
   searchText: PropTypes.string,
};

export default Emojis;
