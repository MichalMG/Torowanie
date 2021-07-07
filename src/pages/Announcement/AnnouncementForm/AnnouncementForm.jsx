import { useState } from "react"

export default function AnnouncementForm(props) {


  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body position-relative" style={{ width: '100%', height: '450px' }}>
                  <div style={{ background: `url(${props.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '10px' }}></div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-2">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <h5>{props.title}</h5>
                    </div>
                    <div className="col-12">
                      Cena: <span className="fw-bold">{parseInt(props.price).toLocaleString()} zł</span>, <span className="text-muted"><small>do negocjacji</small></span>
                    </div>
                    <div className="col-12">
                      <p className="border border-info my-2 me-2" style={{ display: 'inline-block', padding: '2px 10px 2px 10px', borderRadius: '4px' }}>{props.category === "tires" ? "Opony" : props.category === "trackdays" ? "Trackday" : "Motocykle"}</p>
                      {props.promoted === "1" ? <p className="border border-info my-2" style={{ display: 'inline-block', padding: '2px 10px 2px 10px', borderRadius: '4px' }}>Promowane</p> : null}
                    </div>
                    <div className="col-12 my-2">
                      <h6>Opis:</h6>
                      <p className="mb-0">
                        {props.description}
                      </p>
                    </div>
                    <div className="col-12 ">
                      <p className="mb-0 border-top pt-1 mt-2" style={{ fontSize: '12px' }}>ID: <span className="fw-bold">{props.id}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold">Użytkownik</h6>
                  <div className="row">
                    <div className="col-12 d-flex align-items-center my-2">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </div>
                      <div className="ms-2 d-flex align-items-center">
                        {showPhone
                          ? <p className="mb-0">{parseInt(props.phone).toLocaleString()}</p>
                          : (<>
                            <p className="mb-0">xxx xxx xxx</p>
                            <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => setShowPhone(true)}>Pokaż</button>
                          </>)}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex align-items-center my-2">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                      </div>
                      <div className="ms-2 d-flex align-items-center">
                        {showEmail
                          ? <p className="mb-0">{props.email}</p>
                          : (
                            <>
                              <p className="mb-0">xxxxxxxxx</p>
                              <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => setShowEmail(true)}>Pokaż</button>
                            </>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-2">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <h6 className="fw-bold">Lokalizacja</h6>
                    </div>
                    <div className="col-12 d-flex mt-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                      </div>
                      <div className="ms-2">
                        <p className="mb-0">{props.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}