interface CheckBoxProps {
  _id: string
  name: string
  onChange: any
}

const CheckBox: React.FC<CheckBoxProps> = ({ _id, name, onChange }) => {
  return (
    <div className="flex items-center gap-4 ">
      <input
        type="checkbox"
        id={name}
        value={_id}
        onChange={onChange}
        className="w-6 h-6 mr-2 border border-gray-300 rounded text-primary-500 focus:ring-secondary-500 focus:ring-opacity-25"
      />
      <label htmlFor={name} className={"capitalize cursor-pointer"}>
        {name}
      </label>
    </div>
  )
}

export default CheckBox
