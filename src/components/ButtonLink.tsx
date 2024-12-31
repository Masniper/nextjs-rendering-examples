import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  label: string;
  color: "gray" | "green" | "blue" | "red";
};

export default function ButtonLink({ href, label, color }: ButtonLinkProps) {
  const colorClasses = {
    gray: "bg-gray-500 hover:bg-gray-600",
    green: "bg-green-500 hover:bg-green-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    red:"bg-red-500 hover:bg-red-600"
  };

  return (
    <Link href={href}>
      <button
        className={`px-4 py-2 text-white rounded ${colorClasses[color]}`}
      >
        {label}
      </button>
    </Link>
  );
}
