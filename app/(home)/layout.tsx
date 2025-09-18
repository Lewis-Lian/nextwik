import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,  
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import Preview from '@/public/banner.png';
import { Book, ComponentIcon, Pencil, PlusIcon, Server } from 'lucide-react';
import type { HTMLAttributes, ReactNode } from 'react';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      style={
        {
          '--spacing-fd-container': '1120px',
        } as object
      }
      links={[
        {
          type: 'menu',
          on: 'menu',
          text: 'Documentation',
          items: [
            {
              text: '立刻开始',
              url: '/docs/sudynotes',
              icon: <Book />,
            },
            {
              text: 'Components',
              url: '/docs/ui/components',
              icon: <ComponentIcon />,
            },
          ],
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs/sudynotes">学习笔记</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent className="text-[15px]">
                <NavbarMenuLink href="/docs/sudynotes" className="md:row-span-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Perview"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage:
                          'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">立刻开始</p>
                  <p className="text-fd-muted-foreground text-sm">
                    这里是我个人的学习笔记和知识库，记录了我在学习和工作中积累的各种知识和经验。希望这些内容能对你有所帮助，也欢迎你与我交流和分享你的见解。
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/ui/components"
                  className="lg:col-start-2"
                >
                  <ComponentIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Components</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Add interactive experience to your docs.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/ui/openapi"
                  className="lg:col-start-2"
                >
                  <Server className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">OpenAPI</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Generate interactive playgrounds and docs for your OpenAPI
                    schema.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/ui/markdown"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <Pencil className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Markdown</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn the writing format/syntax of Fumadocs.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/ui/manual-installation"
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <PlusIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Manual Installation</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Setup Fumadocs for your existing Next.js app.
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
    >
      {children}
    </HomeLayout>
  );
}
