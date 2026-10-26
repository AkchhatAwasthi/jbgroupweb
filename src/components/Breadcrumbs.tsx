import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: "charcoal" | "ivory" | "maroon";
}

export default function Breadcrumbs({ items, theme = "charcoal" }: BreadcrumbsProps) {
  const isDarkBg = theme === "charcoal" || theme === "maroon";
  const textColor = isDarkBg ? "text-[#E7DFD1]/70" : "text-[#73765B]";
  const activeColor = isDarkBg ? "text-[#C4A46B]" : "text-[#252522]";
  const hoverColor = isDarkBg ? "hover:text-[#F7F3EB]" : "hover:text-[#C4A46B]";

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs">
        <li className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-1 ${textColor} ${hoverColor} transition-colors`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only">JB Group</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className={`w-3.5 h-3.5 ${textColor}`} />
              {isLast || !item.href ? (
                <span className={`font-medium ${activeColor}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`${textColor} ${hoverColor} transition-colors`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
