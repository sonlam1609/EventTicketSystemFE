import "./style.scss";

import { Button, TableCell } from "@mui/material";
import { CreateScheduleBtn, DeleteEventBtn, EditEventBtn } from "../../../components/Buttons";

import Image from "@/components/Image";

const EventTableCells = (props) => {
  const { row, labelId, handleDeleteEvent, handleEditEvent, handleSchedule } = props;

  return (
    <>
      <TableCell component="th" id={labelId} scope="row" className="event-table__table-cell table-cell__event-id">
        {row.eventID}
      </TableCell>
      <TableCell sx={{ width: "200px", height: "100px" }} className="event-table__table-cell table-cell__event-img">
        <Image src={row.imageUrls} alt="event image" />
      </TableCell>
      <TableCell align="left" sx={{ width: "200px", height: "100px" }} className="event-table__table-cell table-cell__event-name">
        {row.eventName}
      </TableCell>
      <TableCell className="event-table__table-cell ">{new Date(row.startDate).toLocaleDateString('en-GB')} - {new Date(row.endDate).toLocaleDateString('en-GB')}</TableCell>
      <TableCell className="event-table__table-cell ">{row.venueAddress}</TableCell>
      <TableCell align="right" sx={{ width: "150px" }} className="event-table__table-cell table-cell__event-actions">
        <DeleteEventBtn onClick={() => handleDeleteEvent(row.eventID)} />
        <EditEventBtn onClick={() => handleEditEvent(row.eventID)} />
      </TableCell>
    </>
  );
};

export default EventTableCells;
