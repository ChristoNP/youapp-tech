import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="#" className="cursor-pointer">
      <img src="/back-button.png" alt="back" width={51} height={17} />
    </Link>
  )
}
