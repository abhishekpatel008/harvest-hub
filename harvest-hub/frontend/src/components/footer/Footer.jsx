import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return <footer className="flex justify-center items-center py-4 font-primary text-primary">
        <FontAwesomeIcon icon={faCopyright} className="flex justify-center items-center py-4 font-primary text-primary" aria-hidden="true"/> Harvest Hub 2026.
    </footer>
}