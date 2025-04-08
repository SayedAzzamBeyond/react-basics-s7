import { TodoFilterProps } from "./interface";

export default function TodoFilter({limit,skip,handleInputChange}: TodoFilterProps) {
  return (
    <>
        <label htmlFor="limit">limit</label>
        <input type="number" value={limit} id="limit" onChange={handleInputChange}  />
        <label htmlFor="skip">skip</label>
        <input type="number" value={skip} id="skip" onChange={handleInputChange}  />
    </>
  )
}
