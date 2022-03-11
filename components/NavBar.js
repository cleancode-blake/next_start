import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div>
      <nav>
        <Link href="/">
          <a className={`${router.pathname === "/" ? "active" : ""}`}>HOME</a>
        </Link>
        <Link href="/about">
          <a className={`${router.pathname === "/about" ? "active" : ""}`}>
            ABOUT
          </a>
        </Link>
      </nav>

      <style jsx>{`
        a {
          text-decoration: none;
          color: black;
          margin-right: 10px;
        }
        .active {
          color: tomato;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
