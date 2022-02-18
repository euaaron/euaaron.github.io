import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbStyle } from "./BreadcrumbStyle";

export function Breadcrumb() {
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);

  useEffect(() => {
    if (!hasGenerated) {
      location.pathname.split("/").forEach((item, index) => {
        if (item !== "") {
          if (index === 0) {
            setBreadcrumb([item]);
          } else {
            const newBreadcrumb = breadcrumb;
            newBreadcrumb.push(item);
            setBreadcrumb(newBreadcrumb);
          }
        }
      });
      setHasGenerated(true);
    }
  }, [hasGenerated, location.pathname, breadcrumb]);

  function recreateUrl(fullPath: string[], current: string): string {
    let url = "";
    let currentIndex = 0;
    fullPath.find((item, index) =>
      item === current ? (currentIndex = index) : null
    );
    fullPath.forEach((item, index) => {
      if (index <= currentIndex) {
        url += `/${item}`;
      }
    });
    return url;
  }

  return (
    <BreadcrumbStyle>
      <ul>
        {breadcrumb.map((item, index) => (
          <li key={index}>
            <Link to={recreateUrl(breadcrumb, item)}>{item}</Link>
            {index !== breadcrumb.length - 1 && <FiChevronRight />}
          </li>
        ))}
      </ul>
    </BreadcrumbStyle>
  );
}
