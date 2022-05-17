export default function Dropdown() {
  return (
    <div>
      <div className="xl:w-56 ">
        <select
          className="form-select appearance-none
      block
      w-full
      px-8
      py-4
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border-0
      rounded
      transition
      ease-in-out
      m-0
      hover:shadow-md
      focus:ring-0"
          aria-label="Default select example"
        >
          <option disabled selected hidden>
            Filter by Region
          </option>
          <option value={1}>Africa</option>
          <option value={2}>America</option>
          <option value={3}>Asia</option>
          <option value={4}>Europe</option>
          <option value={5}>Oceania</option>
        </select>
      </div>
    </div>
  );
}