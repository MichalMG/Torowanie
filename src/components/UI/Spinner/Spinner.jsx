export default function Spinner() {

  return (
    <div className="text-center py-4">
      <div className="spinner-grow bg-info" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}