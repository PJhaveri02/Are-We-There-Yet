import React from "react";
import usePlacesAutocomplete, { getDetails, getGeocode, getLatLng } from "use-places-autocomplete";
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";

function Searchbar (props) {
    const {onDestinationSelect} = props;
    
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => -40.900558, lng: () => 174.885971 },
            radius: 1000*1000,
        }
    });

    const handleSelect = (suggestion) => () => {
      const { description } = suggestion;
      onDestinationSelect(description);
      setValue("");
      clearSuggestions();
    }

    const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

    return (
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            placeholder="Enter Destination"
          />
          {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
      );

    // return (
    //     <div>
    //         <Combobox onSelect={() => handleSelect()}>
    //             <ComboboxInput value={value} onChange={(e) => {setValue(e.target.value)}} disabled={!ready} placeholder="Enter Destination" />
    //             <ComboboxPopover>
    //                 {status === "OK" && data.map((id, description) => (<ComboboxOption key={id} value={description} />))}
    //             </ComboboxPopover>
    //         </Combobox>
    //     </div>
    // );
}

export default Searchbar;