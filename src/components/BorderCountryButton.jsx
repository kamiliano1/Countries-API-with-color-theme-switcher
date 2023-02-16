import { Link } from "react-router-dom"
export default function BorderCountryButton(props) {
    return (
        <Link to={`/${props.name}`}>
            <button className="-order-2 dark:bg-darkBlue bg-white dark:text-veryLightGray text-black my-1 flex self-start px-5 py-1" >{props.name}</button>
        </Link>
    )
}