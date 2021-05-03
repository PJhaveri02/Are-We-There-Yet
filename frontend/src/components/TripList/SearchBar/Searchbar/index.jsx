import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

function Searchbar(props) {
  const { onDestinationSelect } = props;

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => -40.900558, lng: () => 174.885971 },
      radius: 1000 * 1000,
    },
  });

  const handleSelect = (suggestion) => () => {
    const {
      structured_formatting: { main_text },
      description,
    } = suggestion;

    getGeocode({ address: description }).then((results) =>
      getLatLng(results[0]).then(({ lat, lng }) => {
        onDestinationSelect(main_text, lat, lng);
      })
    );

    setValue("");
    clearSuggestions();
  };

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
}

export default Searchbar;
