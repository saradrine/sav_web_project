const AppointmentStatus = {
    PENDING: 'En attente',
    ACCEPTED: 'Accepté',
    REJECTED: 'Refusé',
    CANCELED: 'Annulé',
    DONE: 'Terminé',
}
export const AppointmentStatusReverse = Object.entries(AppointmentStatus).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});
export default AppointmentStatus;
