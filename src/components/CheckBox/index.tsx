interface CheckBoxProps {
  name: string
}

const CheckBox: React.FC<CheckBoxProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-4">
      <input type="checkbox" id={name} value={name} />
      <label htmlFor={name} className={"capitalize"}>
        {name}
      </label>
    </div>
  )
}

export default CheckBox
