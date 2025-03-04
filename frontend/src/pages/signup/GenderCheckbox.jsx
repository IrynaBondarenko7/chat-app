const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-3 gap-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox border-white checked:text-green-600"
            checked={selectedGender === "male"}
            onChange={() => {
              onCheckboxChange("male");
            }}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            className="checkbox border-white checked:text-green-600"
            checked={selectedGender === "female"}
            onChange={() => {
              onCheckboxChange("female");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
