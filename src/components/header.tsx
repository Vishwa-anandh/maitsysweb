import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type NavLinkItem = { name: string; path: string };
type NavCategoryItem = { name: string; children: NavLinkItem[] };
type NavDropdownItem = {
  name: string;
  children: (NavLinkItem | NavCategoryItem)[];
  isMega?: boolean;
};
type NavItem = NavLinkItem | NavDropdownItem;

function isNavLinkItem(
  item: NavLinkItem | NavCategoryItem,
): item is NavLinkItem {
  return "path" in item;
}

const serviceCategories: (NavLinkItem | NavCategoryItem)[] = [
  {
    name: "SAP Services",
    children: [
      { name: "SAP Services Portfolio", path: "/sap-services" },
      { name: "SAP Migration Services", path: "/sap-migration-services" },
      { name: "SAP BTP Services", path: "/sap-btp-services" },
      {
        name: "SAP Security & GRC Services",
        path: "/sap-security-grc-services",
      },
    ],
  },
  {
    name: "Cloud",
    children: [
      { name: "AWS Managed Services", path: "/aws-managed-services" },
      { name: "Azure Managed Services", path: "/azure-managed-services" },
    ],
  },
  {
    name: "Microsoft",
    children: [
      { name: "Microsoft Power Platform", path: "/microsoft-power-platform" },
      { name: "Power Apps", path: "/power-apps" },
      { name: "Power Automate", path: "/power-automate" },
      { name: "Power BI", path: "/power-bi" },
      { name: "M365 Automation", path: "/m365-automation" },
    ],
  },
  { name: "Cybersecurity", path: "/cyber-security-services" },
];

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "Company",
    children: [
      { name: "About Us", path: "/about-us" },
      { name: "Careers", path: "/careers" },
    ],
  },
  { name: "Products", path: "/products" },
  {
    name: "Services",
    isMega: true,
    children: serviceCategories,
  },
  {
    name: "Insights",
    children: [
      { name: "Podcast", path: "/podcast" },
      { name: "Blog", path: "/blog" },
    ],
  },
];

const ChevronIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={`h-3.5 w-3.5 transition-transform duration-200 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/** Desktop mega-menu for Services */
const ServicesMegaMenu = ({
  categories,
  isNavItemActive,
  scrollTop,
}: {
  categories: (NavLinkItem | NavCategoryItem)[];
  isNavItemActive: (path: string) => boolean;
  scrollTop: () => void;
}) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(
    categories.find((c) => !isNavLinkItem(c))?.name || null,
  );

  const resolvedCategory = hoveredCategory;

  const activeSubs = (() => {
    const cat = categories.find(
      (c) => !isNavLinkItem(c) && c.name === resolvedCategory,
    ) as NavCategoryItem | undefined;
    return cat?.children ?? [];
  })();

  return (
    <div className="hidden absolute left-0 top-full z-50 pt-2 group-hover:flex">
      <div
        className={`flex rounded-xl border border-gray-100 bg-white shadow-2xl overflow-hidden transition-all duration-200 ${
          activeSubs.length > 0 ? "w-[520px]" : "w-[200px]"
        }`}
      >
        {/* Left panel — categories */}
        <ul className="w-[200px] py-2 border-r border-gray-100 flex-shrink-0">
          {categories.map((cat) => {
            const isLink = isNavLinkItem(cat);
            const name = cat.name;
            const isActive = isLink
              ? isNavItemActive(cat.path)
              : cat.children.some((s) => isNavItemActive(s.path));
            const isHovered = resolvedCategory === name;

            if (isLink) {
              const linkCat = cat;
              return (
                <li key={name} className="px-1.5">
                  <Link
                    to={linkCat.path}
                    onClick={scrollTop}
                    onMouseEnter={() => setHoveredCategory("__link__")}
                    className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="whitespace-nowrap">{name}</span>
                    <ArrowIcon
                      className={isActive ? "text-red-500" : "text-gray-300"}
                    />
                  </Link>
                </li>
              );
            }

            return (
              <li key={name} className="px-1.5">
                <button
                  type="button"
                  onMouseEnter={() => setHoveredCategory(name)}
                  className={`flex items-center justify-between gap-2 w-full rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 text-left ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : isHovered
                        ? "bg-gray-50 text-gray-900"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="whitespace-nowrap">{name}</span>
                  <ArrowIcon
                    className={
                      isActive
                        ? "text-red-500"
                        : isHovered
                          ? "text-gray-500"
                          : "text-gray-300"
                    }
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right panel — sub-items */}
        {activeSubs.length > 0 && (
          <ul className="py-2 px-1.5 min-w-[260px] flex-1">
            {activeSubs.map((sub) => {
              const subLink = sub;
              const subActive = isNavItemActive(subLink.path);
              return (
                <li key={subLink.path}>
                  <Link
                    to={subLink.path}
                    onClick={scrollTop}
                    className={`group/sub flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-150 ${
                      subActive
                        ? "bg-red-50 text-red-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="whitespace-nowrap">{subLink.name}</span>
                    <ArrowIcon
                      className={
                        subActive
                          ? "text-red-500"
                          : "text-gray-300 group-hover/sub:text-gray-500 group-hover/sub:translate-x-0.5"
                      }
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

/** Mobile 3-level accordion for Services */
const ServicesMobileAccordion = ({
  categories,
  isNavItemActive,
  scrollTop,
  closeDrawer,
}: {
  categories: (NavLinkItem | NavCategoryItem)[];
  isNavItemActive: (path: string) => boolean;
  scrollTop: () => void;
  closeDrawer: () => void;
}) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const isCategoryActive = (cat: NavLinkItem | NavCategoryItem) => {
    if (isNavLinkItem(cat)) return isNavItemActive(cat.path);
    return cat.children.some((s) => isNavItemActive(s.path));
  };

  return (
    <ul className="mt-1 ml-4 pl-3 border-l-2 border-red-100 space-y-0.5 py-1">
      {categories.map((cat) => {
        const isLink = isNavLinkItem(cat);
        const name = cat.name;
        const catActive = isCategoryActive(cat);

        if (isLink) {
          const linkCat = cat;
          return (
            <li key={name}>
              <Link
                to={linkCat.path}
                onClick={() => {
                  closeDrawer();
                  scrollTop();
                }}
                className={`flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  catActive
                    ? "bg-red-100 text-red-700 font-semibold"
                    : "text-gray-800 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <span className="whitespace-nowrap">{name}</span>
                <ArrowIcon
                  className={catActive ? "text-red-500" : "text-gray-300"}
                />
              </Link>
            </li>
          );
        }

        const catItem = cat;
        const isOpen = openCategory === name;

        return (
          <li key={name}>
            <button
              type="button"
              onClick={() => setOpenCategory(isOpen ? null : name)}
              className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                catActive
                  ? "bg-red-50 text-red-700"
                  : isOpen
                    ? "bg-gray-50 text-gray-900"
                    : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
              }`}
              aria-expanded={isOpen}
            >
              <span className="whitespace-nowrap">{name}</span>
              <ChevronIcon
                className={isOpen ? "text-red-700 rotate-180" : ""}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-0.5 pl-1 border-l-2 border-gray-100 space-y-0.5 py-1">
                {catItem.children.map((sub) => {
                  const subLink = sub;
                  const subActive = isNavItemActive(subLink.path);
                  return (
                    <li key={subLink.path}>
                      <Link
                        to={subLink.path}
                        onClick={() => {
                          closeDrawer();
                          scrollTop();
                        }}
                        className={`flex items-center justify-between gap-2 w-full px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          subActive
                            ? "font-semibold text-red-700 bg-red-100"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        <span className="whitespace-nowrap">
                          {subLink.name}
                        </span>
                        <ArrowIcon
                          className={
                            subActive ? "text-red-500" : "text-gray-300"
                          }
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const isNavItemActive = (itemPath: string) => {
    const normalizedPath = currentPath.replace(/\/$/, "") || "/";
    const normalizedItemPath = itemPath.replace(/\/$/, "") || "/";
    if (normalizedItemPath === "/") return normalizedPath === "/";
    return (
      normalizedPath === normalizedItemPath ||
      normalizedPath.startsWith(normalizedItemPath + "/")
    );
  };

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isDrawerOpen]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const isServicesActive = (item: NavDropdownItem) => {
    return item.children.some((cat) => {
      if (isNavLinkItem(cat)) {
        return isNavItemActive(cat.path);
      }
      return cat.children.some((s) => isNavItemActive(s.path));
    });
  };

  return (
    <>
      <header className="sticky top-0 z-[9999] border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="px-4 py-4 lg:px-6 xl:px-10">
          <div className="flex justify-between items-center mx-auto">
            {/* Logo */}
            <a href="/" aria-label="Home" className="flex items-center">
              <img
                src="/logo.png"
                alt="Home"
                title="Home"
                width={140}
                height={36}
                className="w-auto h-9"
              />
            </a>

            {/* Desktop Nav */}
            <ul className="hidden items-center space-x-4 lg:flex xl:space-x-8">
              {navItems.map((item, index) => {
                if ("path" in item) {
                  const isActive = isNavItemActive(item.path);
                  return (
                    <li key={index + "index"}>
                      <Link
                        to={item.path}
                        onClick={scrollTop}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "text-red-600" : "text-black hover:text-red-600"}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                }

                const dropItem = item;

                // Mega menu for Services
                if (dropItem.isMega) {
                  const active = isServicesActive(dropItem);
                  return (
                    <li key={index + "index"} className="relative group">
                      <button
                        type="button"
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active ? "text-red-600" : "text-black hover:text-red-600"}`}
                      >
                        {dropItem.name}
                        <ChevronIcon className="group-hover:rotate-180" />
                      </button>
                      <ServicesMegaMenu
                        categories={dropItem.children}
                        isNavItemActive={isNavItemActive}
                        scrollTop={scrollTop}
                      />
                    </li>
                  );
                }

                // Regular dropdown
                const isDropdownActive = (
                  dropItem.children as NavLinkItem[]
                ).some((c) => isNavItemActive(c.path));

                return (
                  <li key={index + "index"} className="relative group">
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isDropdownActive ? "text-red-600" : "text-black hover:text-red-600"}`}
                    >
                      {dropItem.name}
                      <ChevronIcon className="group-hover:rotate-180" />
                    </button>

                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50 min-w-[200px]">
                      <div className="overflow-hidden bg-white rounded-xl border border-gray-100 shadow-xl">
                        <ul className="py-1.5">
                          {(dropItem.children as NavLinkItem[]).map((sub) => {
                            const subActive = isNavItemActive(sub.path);
                            return (
                              <li key={sub.path} className="px-1.5">
                                <Link
                                  to={sub.path}
                                  onClick={scrollTop}
                                  className={`group/sub flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${subActive ? "bg-red-50 text-red-600 font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"}`}
                                >
                                  <span className="whitespace-nowrap">
                                    {sub.name}
                                  </span>
                                  <ArrowIcon
                                    className={
                                      subActive
                                        ? "text-red-500"
                                        : "text-gray-300 group-hover/sub:text-gray-500 group-hover/sub:translate-x-0.5"
                                    }
                                  />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Right side */}
            <div className="flex gap-2 items-center">
              <Link
                to="/contact-us"
                onClick={scrollTop}
                className={`hidden md:inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] ${currentPath === "/contact-us" ? "bg-red-600 text-white border-red-600" : "text-red-600 border-red-500 hover:bg-red-600 hover:text-white"}`}
              >
                Contact Us
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setIsDrawerOpen((prev) => !prev)}
                type="button"
                className="inline-flex justify-center items-center w-10 h-10 text-gray-600 rounded-lg transition-colors duration-200 lg:hidden hover:bg-red-50 hover:text-red-600"
                aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
                aria-expanded={isDrawerOpen}
              >
                <span className="flex relative flex-col gap-1 justify-center items-center w-5 h-5">
                  <span
                    className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center ${isDrawerOpen ? "rotate-45 translate-y-1.5" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isDrawerOpen ? "opacity-0 scale-x-0" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center ${isDrawerOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                  />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[9999] h-full w-[300px] bg-white shadow-2xl lg:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
          <a href="/" aria-label="Home">
            <img
              src="/logo.png"
              alt="Maitsys Logo"
              title="Maitsys Logo"
              width={140}
              height={32}
              decoding="async"
              className="object-contain w-auto h-8"
            />
          </a>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="flex justify-center items-center w-9 h-9 text-gray-500 rounded-lg transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer Nav */}
        <nav className="overflow-y-auto flex-1 px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              if ("path" in item) {
                const isActive = isNavItemActive(item.path);
                return (
                  <li key={index + "index"}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        setIsDrawerOpen(false);
                        scrollTop();
                      }}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive ? "font-semibold text-red-700 bg-red-100" : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"}`}
                    >
                      {isActive && (
                        <span className="flex-shrink-0 w-1 h-4 bg-red-500 rounded-full" />
                      )}
                      <span className={isActive ? "" : "ml-3"}>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              }

              const dropItem = item;

              // Mega (Services) — 3-level accordion
              if (dropItem.isMega) {
                const active = isServicesActive(dropItem);
                const isOpen = openIndex === index;
                let triggerStyles =
                  "text-gray-700 hover:bg-gray-50 hover:text-gray-900";
                if (active) triggerStyles = "bg-red-50 text-red-700";
                else if (isOpen) triggerStyles = "bg-gray-50 text-gray-900";

                return (
                  <li key={index + "index"}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`flex justify-between items-center px-4 py-3 w-full text-sm font-medium rounded-xl transition-all duration-200 ${triggerStyles}`}
                      aria-expanded={isOpen}
                    >
                      <span className="flex gap-3 items-center">
                        {active && (
                          <span className="flex-shrink-0 w-1 h-4 bg-red-500 rounded-full" />
                        )}
                        <span className={active ? "" : "ml-3"}>
                          {dropItem.name}
                        </span>
                      </span>
                      <ChevronIcon
                        className={isOpen ? "text-red-700 rotate-180" : ""}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 max-h-[600px]" : "max-h-0 opacity-0"}`}
                    >
                      <ServicesMobileAccordion
                        categories={dropItem.children}
                        isNavItemActive={isNavItemActive}
                        scrollTop={scrollTop}
                        closeDrawer={() => setIsDrawerOpen(false)}
                      />
                    </div>
                  </li>
                );
              }

              // Regular accordion
              const isDropdownActive = (
                dropItem.children as NavLinkItem[]
              ).some((c) => isNavItemActive(c.path));
              const isOpen = openIndex === index;
              let triggerStyles =
                "text-gray-700 hover:bg-gray-50 hover:text-gray-900";
              if (isDropdownActive) triggerStyles = "bg-red-50 text-red-700";
              else if (isOpen) triggerStyles = "bg-gray-50 text-gray-900";

              return (
                <li key={index + "index"}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex justify-between items-center px-4 py-3 w-full text-sm font-medium rounded-xl transition-all duration-200 ${triggerStyles}`}
                    aria-expanded={isOpen}
                  >
                    <span className="flex gap-3 items-center">
                      {isDropdownActive && (
                        <span className="flex-shrink-0 w-1 h-4 bg-red-500 rounded-full" />
                      )}
                      <span className={isDropdownActive ? "" : "ml-3"}>
                        {dropItem.name}
                      </span>
                    </span>
                    <ChevronIcon
                      className={isOpen ? "text-red-700 rotate-180" : ""}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <ul className="mt-1 ml-4 pl-3 border-l-2 border-red-100 space-y-0.5 py-1">
                      {(dropItem.children as NavLinkItem[]).map((sub) => {
                        const subActive = isNavItemActive(sub.path);
                        return (
                          <li key={sub.path}>
                            <Link
                              to={sub.path}
                              onClick={() => {
                                setIsDrawerOpen(false);
                                scrollTop();
                              }}
                              className={`flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${subActive ? "bg-red-100 text-red-700 font-semibold" : "text-gray-800 hover:text-gray-900 hover:bg-gray-100"}`}
                            >
                              <span className="whitespace-nowrap">
                                {sub.name}
                              </span>
                              <ArrowIcon
                                className={
                                  subActive ? "text-red-500" : "text-gray-300"
                                }
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer — Contact CTA */}
        <div className="px-4 py-5 border-t border-gray-100">
          <Link
            to="/contact-us"
            onClick={() => {
              setIsDrawerOpen(false);
              scrollTop();
            }}
            className={`flex items-center justify-center w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm ${currentPath === "/contact-us" ? "bg-red-600 text-white" : "bg-red-600 text-white hover:bg-red-700 hover:shadow-md"}`}
          >
            Contact Us
            <ArrowIcon className="ml-2 text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
