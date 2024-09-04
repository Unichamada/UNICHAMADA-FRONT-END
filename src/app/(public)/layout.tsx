import SideMenuLayout from "@/components/side-menu-layout";

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <SideMenuLayout>{children}</SideMenuLayout>;
}
