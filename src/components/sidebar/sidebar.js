import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faInbox, faCalendar, faCheckSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar p-2">
            <ul className="list border-bottom pb-2 mt-2">
                <li className="d-flex justify-content-between p-2">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="me-2 mt-1" icon={faCalendar} />
                        <span>Today</span>
                    </div>
                    <span>2</span>
                </li>

                <li className="d-flex justify-content-between p-2">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="me-2 mt-1" icon={faInbox} />
                        <span>Inbox</span>
                    </div>
                    <span>2</span>
                </li>
            </ul>

            <ul className="list mt-2">
                <li className="d-flex p-2">
                    <FontAwesomeIcon className="me-2 mt-1" icon={faCheckSquare} />
                    <span>Completed</span>
                </li>

                <li className="d-flex p-2">
                    <FontAwesomeIcon className="me-2 mt-1" icon={faTrash} />
                    <span>Trash</span>
                </li>
            </ul>
        </div>
    );
}