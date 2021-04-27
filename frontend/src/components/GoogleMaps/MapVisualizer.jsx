import Map from "./Map";
import { meadowbank, aucklanduniversity, routes } from "./dummyData";

export default function MapVisualizer() {
  return (
    <Map origin={aucklanduniversity} destination={meadowbank} stops={routes} />
  );
}
