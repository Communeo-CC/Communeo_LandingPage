const FeatureCard = ({ title, icon, description }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-md max-w-xs text-center">
      <div className="flex justify-center mb-4">
        <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
      </div>
      <h4 className="text-lg font-semibold text-blue-600 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
