import PropTypes from "prop-types";

const Card = ({icon,statistic, title, padding, color}) => {
    return (
        <div className="bg-white px-5 py-3.5 rounded-2xl shadow-custom-sm">
            <div className="flex items-center gap-5">
                <div
                    className={`w-12 h-12 p-2.5   ${padding ? "ps-3 pe-2" : ""} bg-${color}  rounded-full flex items-center justify-center shadow-custom-md`}>
                    <img style={{filter: "brightness(0) invert(1)"}} src={icon} alt={title} width={30} height={30}/>
                </div>
                <div className="text-custom-lg overflow-hidden overflow-ellipsis">
                    <h2 className="text-2xl font-bold">{statistic}</h2>
                    <h2 className="text-custom-lg overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</h2>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    icon: PropTypes.string.isRequired,
    statistic: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    padding: PropTypes.bool,
    color: PropTypes.string,
};
export default Card;