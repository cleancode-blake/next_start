import NavBar from "./navbar";

// layout pattern
export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
