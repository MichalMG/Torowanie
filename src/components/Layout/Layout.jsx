export default function Layout(props) {

  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <div>{props.header}</div>
        <div style={{ flexGrow: 1 }}>{props.content}</div>
        <div>{props.footer}</div>
      </div>
    </>
  )
}