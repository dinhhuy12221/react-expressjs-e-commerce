import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import "./index.css";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const [resultShow, setResultShow] = useState(false);
  const searchResultRef = useRef(null);

  const handleInput = (value) => {
    setInput(value);
    value ? setResultShow(true) : setResultShow(false);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target)
      ) {
        setResultShow(false);
      } else {
        setResultShow(true);
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchResultRef]);

  return (
    <>
      <div className="search-wrapper">
        <div className="search-input">
          <input
            ref={searchResultRef}
            type="text"
            placeholder="Search for products..."
            spellCheck={false}
            value={input}
            onChange={(e) => handleInput(e.currentTarget.value)}
          />
            <CiSearch className="btn search-button"/>
        </div>
  
        {input !== "" && resultShow && (
            <DropDown />
        )}
      </div>
    </>
  );
}
