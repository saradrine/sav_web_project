import { TableCell } from "@mui/material";
import TableType from "../../../utils/enum/tableType.enum";

const colors = {
    'Accepté': 'text-custom-green bg-custom-light-green',
    'En attente': 'text-custom-yellow bg-custom-light-yellow',
    'Annulé': 'text-custom-gray bg-custom-light-gray',
    'Refusé': 'text-custom-red bg-custom-light-red',
    'Terminé': 'text-custom-blue bg-custom-light-blue',
};
const renderCellContent = (type, cellId, row) => {
    const cellMapping = {
        client: row.client ? row.client.nom : '',
        vehicule: row.vehicule ? `${row.vehicule.marque} ${row.vehicule.modele}` : '',
    };

    if (type === TableType.APPOINTMENTS) {
        if (cellId === 'etat') {
            return <span className={`${colors[row[cellId]]} p-2 rounded-full`}>{row[cellId]}</span>;
        }
        return cellMapping[cellId] || row[cellId];
    }

    return row[cellId];
};

export default function TableCells({ row, headCells, type }) {
    return headCells.map((cell, i) => (
        cell.id !== 'id' && (type === TableType.CLIENTS ? i !== headCells.length - 1 : true) && (
            <TableCell key={cell.id}>
                {renderCellContent(type, cell.id, row)}
            </TableCell>
        )
    ));
}