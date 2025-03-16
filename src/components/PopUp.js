import React from "react";

function PopUp({ message, setMessage }) {
  return (
    <>
      {message && (
        <div className="popup-con">
          <div className="popup">
            <section>
              <p>{message}</p>
              <br />
              <button onClick={() => setMessage(null)}>Okay</button>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
