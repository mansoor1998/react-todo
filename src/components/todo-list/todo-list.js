import { Checkbox, makeStyles } from "@mui/material";
import AppCheckbox from "../app-checkbox";
import MaterialCheckbox from '@material-ui/core/Checkbox';
import { ArrowBack, ArrowLeft, ArrowRight, ContactlessOutlined } from "@material-ui/icons";
import { TreeItem, TreeView } from "@mui/lab";


const months = ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const listItem = (item, i, checkboxEvent) =>
(
    <div key={i} className="d-flex justify-content-between align-items-center border-bottom m-column">
        <div className="d-flex align-items-center m-column">
            <span className="">
                {(item?.tasks.length === 0) ?
                    <Checkbox checked={(() => {
                        if (item.status === 'completed') return true;
                        if (item.status === 'pending') return false;
                        return false;
                    })()} onChange={(e) => { checkboxEvent(e?.currentTarget?.checked, item) }} style={{ padding: '9px' }} />
                    : <AppCheckbox name="" checked={false} />}
            </span>
            <span >
                {item.title}
            </span>
        </div>
        <span>
            {`${months[item?.deadline.getMonth() - 1]} ${item?.deadline.getDate()}`}
        </span>
    </div>
)

const listItemFilter = (list, status, checkboxEvent) =>
    list.filter((item) => item.status === status).map((item, i) => listItem(item, i, checkboxEvent));

const listItemFilterLength = (list, status) =>
    list.filter((item) => item.status === status).length

export default function TodoList({ list = [], checkboxEvent, ...props }) {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ArrowRight />}
            defaultExpandIcon={<ArrowLeft />}
            expanded={["1", "2"]}
            sx={{ flexGrow: 1, overflowY: 'auto' }}
        >
            {
                (listItemFilterLength(list, 'pending') > 0) ?
                    <TreeItem nodeId="1" label="Todo">
                        {listItemFilter(list, 'pending', checkboxEvent)}
                    </TreeItem> : <></>
            }

            {
                (listItemFilterLength(list, 'completed') > 0) ?
                    <TreeItem nodeId="2" label="Completed">
                        {listItemFilter(list, 'completed', checkboxEvent)}
                    </TreeItem> : <></>
            }
        </TreeView>
    );
}