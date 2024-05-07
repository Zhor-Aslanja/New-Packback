import Link from "next/link";

export default function Header({ data }) {
  return (
    <nav>
        <div>Logo</div>
        <div>
            <Link href={data == "home" ? "/about" : "/"}>{data == "home"? "About" : "Home"}</Link>
        </div>
    </nav>
  )
}
