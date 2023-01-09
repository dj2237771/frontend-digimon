import { useEffect, useState } from "react";
import axios from "axios";
import FavItem from "./FavItem";
import UpdateDigimonModal from "./UpdateDigimonModal";
import React from "react";

function MyFavorites() {
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowItems] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [index, setIndex] = useState(0);
  const [showUpdateModalStatus, setShowUpdateModalStatus] = useState(false);

  useEffect(() => {
    const getFavDigimon = async () => {
      let resultDigimon = await axios.get(`${serverLink}/digimon`);
      // console.log("getFavDigimon", resultDigimon);
      setResults(resultDigimon.data);
      setShowItems(true);
    };
    getFavDigimon();
  }, []);

  const deleteDigimon = async (index) => {
    let resultsDigimon = await axios.delete(`${serverLink}/digimon/${index}`);
    setResults(resultsDigimon.data);
    // setShowItems(true);
  };

  const showUpdateModal = async (chosenItem) => {
    setShowUpdateModalStatus(true);
    setItemInfo(chosenItem);
    setIndex(chosenItem._id);
  };

  const handleCloseUpdate = () => {
    setShowUpdateModalStatus(false);
  };

  const updateDigimons = (results) => {
    setResults(results);
  };

  return (
    <div>
      <h1>Your Favorites Digimon</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems &&
          results.map((item, index) => (
            <FavItem
              key={index}
              item={item}
              deleteDigimon={deleteDigimon}
              showUpdateModalProps={showUpdateModal}
            />
          ))}
      </div>

      <UpdateDigimonModal
        show={showUpdateModalStatus}
        handleClose={handleCloseUpdate}
        itemInfo={itemInfo}
        itemIndex={index}
        updateDigimons={updateDigimons}
      />
    </div>
  );
}

export default MyFavorites;
