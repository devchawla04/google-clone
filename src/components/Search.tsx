import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

interface SearchProps {
  hideButtons?: boolean;
}

function Search({ hideButtons = false }: SearchProps) {
  const [, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    doSearch();
  };

  const handleIconClick = () => {
    doSearch();
  };

  const doSearch = () => {
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    if (input === "") {
      navigate("/");
    } else {
      navigate("/search");
    }
  };

  return (
    <form className="search" onSubmit={handleFormSubmit}>
      <div className="search__container">
        <SearchIcon onClick={handleIconClick} className="search-icon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-box"
          type="text"
        />
        <MicIcon className="mic-icon" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" color="inherit" variant="outlined">
            Google Search
          </Button>
          <Button color="inherit" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons hidden">
          <Button type="submit" color="inherit" variant="outlined">
            Google Search
          </Button>
          <Button color="inherit" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
