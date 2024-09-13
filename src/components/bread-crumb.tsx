import Link from "next/link";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbItemProps {
    label: string;
    href?: string;
    isCurrentPage?: boolean;
}

interface BreadcrumbProps {
    items: BreadcrumbItemProps[];
}

export function BreadCrumb({ items }: BreadcrumbProps) {
    return (
        <BreadcrumbList>
            {items.map((item, index) => (
                <BreadcrumbItem key={index}>
                    {item.href ? (
                        <>
                            <BreadcrumbLink asChild>
                                <Link href={item.href}>{item.label}</Link>
                            </BreadcrumbLink>
                            <BreadcrumbSeparator />
                        </>
                    ) : (
                        <BreadcrumbPage className="font-medium text-blue-500">
                            {item.label}
                        </BreadcrumbPage>
                    )}
                </BreadcrumbItem>
            ))}
        </BreadcrumbList>
    );
}
