import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function NavLink({ href, className, children }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname, href, pathname.includes(href));
    pathname.includes(href) ? setIsActive(true) : setIsActive(false);
  }, [href, pathname]);

  return (
    <Link href={href} className={className}>
      {children({ isActive })}
    </Link>
  );
}

export default NavLink;
