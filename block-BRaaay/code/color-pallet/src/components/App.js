import color from "../colors.json";

function App() {
  return (
    <>
      {
        Object.keys(color).map((elm, i) => (
          <Colors key={i} info={elm}/>
        ))
     }
    </>
  )
};

function Colors(props) {
  return (
    <>
      <section>
        <div className="color container">
          <div>{props.info.toUpperCase()}</div>
          {color[props.info].map((e, i) => (
            <>
              <div>
                <div
                  className="margin"
                  style={{
                    backgroundColor: e,
                    width: '80px',
                    height: '50px',
                  }}
                ></div>
                <div className="color">
                  <div>{i === 0 ? 50 : i * 100}</div>
                  <div>{e}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default App;