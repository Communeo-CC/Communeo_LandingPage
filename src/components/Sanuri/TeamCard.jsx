const TeamCard = ({ name, role, photo, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 text-center">
        <img
          src={photo}
          alt={`${name}'s photo`}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default TeamCard;
  