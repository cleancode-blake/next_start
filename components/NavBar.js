import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div>
      <nav>
        <Image
          src={
            "https://www.clipartmax.com/png/full/29-294515_food-clipart-transparent-background-food-logo-no-background.png"
          }
          alt="Logo"
          width={70}
          height={50}
        />
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
        nav {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
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
