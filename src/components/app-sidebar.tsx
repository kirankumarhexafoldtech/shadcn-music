import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { data } from "@/constants";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUpIcon } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Side bar header */}
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Link
              href="/"
              className="flex aspect-square size-8 items-center justify-center"
            >
              <Image
                src={data.app.logo}
                alt={data.app.name}
                width={40}
                height={40}
              />
            </Link>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <h1 className="truncate font-semibold">{data.app.name}</h1>
              <p className="truncate text-xs">{data.app.version}</p>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      {/* Side bar content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((navItem, index) => (
              <Collapsible key={index} asChild defaultOpen={navItem.isActive}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <navItem.icon className="text-muted-foreground" />
                      <span className="uppercase font-bold tracking-widest text-muted-foreground">
                        {navItem.title}
                      </span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {navItem.items.map((subItem, subIntex) => (
                        <SidebarMenuSubItem key={subIntex}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              href={subItem.url}
                              className="hover:text-blue-500 hover:border-r-4 border-blue-transition-colors flex items-center gap-x-4"
                            >
                              <subItem.icon />
                              <span className="font-bold">{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* Side bar footer */}
      <SidebarFooter>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage
                    src={data.user.avatar}
                    alt={data.user.name}
                    className="object-cover rounded-full"
                  />
                  <AvatarFallback className="rounded-full">
                    {data.user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {data.user.name}
                  </span>
                  <span className="text-xs truncate">{data.user.email}</span>
                </div>
                <ChevronUpIcon className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="end"
              sideOffset={4}
              className="w-[--radix-dropdown-menu-content-width] min-w-56 rounded-lg"
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage
                      src={data.user.avatar}
                      alt={data.user.name}
                      className="object-cover rounded-full"
                    />
                    <AvatarFallback className="rounded-full">
                      {data.user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {data.user.name}
                    </span>
                    <span className="truncate text-xs">{data.user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
