import NavBar from "./navbar";

// layout pattern
export default function Layout({ children }) {
  return (
    <div>
      <div id="middle">
        <NavBar />
        {children}
      </div>

      <style global jsx>
        {`
          #middle {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
