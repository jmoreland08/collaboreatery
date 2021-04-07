
export default function Search({ queryListing, setQueryListing }) {
  

  return (
    <div>
      <input placeholder="Search by location..." className="listing-input" value={queryListing} onChange={((e) => setQueryListing(e.target.value))}/>
    </div>
  )
}
