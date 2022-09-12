import {AuthInputElement} from "../../../UI/inputElement/AuthInput";
import searchIcon from "../../../assets/images/icons/search-icon.svg";
import {useState} from "react";

export const SearchInput = () => {

  const [search, setSearch] = useState("");

  return (
    <div className="search-container">
      <AuthInputElement type={"text"}
                        imageURL={searchIcon}
                        alt={"search"}
                        placeholder={"Search name"}
                        error={""}
                        value={search}
                        setValue={setSearch}
      />
    </div>
  );
}
