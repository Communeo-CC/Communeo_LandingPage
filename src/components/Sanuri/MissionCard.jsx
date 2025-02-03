const MissionCard = ({ title, description }) => {
    return (
      <div className="bg-gray-50 rounded-xl p-6 shadow-md max-w-xs">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default MissionCard;
  