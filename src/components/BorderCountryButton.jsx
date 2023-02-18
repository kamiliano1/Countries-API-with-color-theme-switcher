import { Link } from "react-router-dom"
export default function BorderCountryButton(props) {
    return (
      <Link to={`/${props.name}`}>
        <button className="-order-2 dark:bg-darkBlue bg-white dark:text-veryLightGray text-black  px-5 py-1 mr-3">
          {props.name}
        </button>
      </Link>
    );
}