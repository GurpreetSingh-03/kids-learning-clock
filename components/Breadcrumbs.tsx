"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-1 text-slate-500 font-bold text-xs md:text-sm bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl px-4 py-2 w-fit shadow-sm select-none"
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {isLast || !item.href ? (
              <span className="text-slate-600 truncate max-w-[180px] sm:max-w-none" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
