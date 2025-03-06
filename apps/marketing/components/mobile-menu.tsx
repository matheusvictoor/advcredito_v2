'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { baseUrl, getPathname, routes } from '@workspace/routes';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@workspace/ui/components/collapsible';
import { Logo } from '@workspace/ui/components/logo';
import { ThemeSwitcher } from '@workspace/ui/components/theme-switcher';
import { Portal } from '@workspace/ui/lib/portal';
import { RemoveScroll } from '@workspace/ui/lib/remove-scroll';
import { cn } from '@workspace/ui/lib/utils';

import { ExternalLink } from '~/components/fragments/external-link';
import { DOCS_LINKS, MENU_LINKS } from '~/components/marketing-links';

export function MobileMenu({
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();
  const isDocs = pathname.startsWith(
    getPathname(routes.marketing.Docs, baseUrl.Marketing)
  );

  React.useEffect(() => {
    const handleRouteChangeStart = () => {
      if (document.activeElement instanceof HTMLInputElement) {
        document.activeElement.blur();
      }

      setOpen(false);
    };

    handleRouteChangeStart();
  }, [pathname]);

  const handleChange = () => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    setOpen((open) => (open ? !mediaQueryList.matches : false));
  };

  React.useEffect(() => {
    handleChange();
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  const handleToggleMobileMenu = (): void => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div
        className={cn('flex items-center justify-between', className)}
        {...other}
      >
        <Link href={routes.marketing.Index}>
          <Logo />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-expanded={open}
          aria-label="Toggle Mobile Menu"
          onClick={handleToggleMobileMenu}
          className="flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full"
        >
          <motion.div
            className="w-5 origin-center border-t-2 border-primary"
            initial={{ translateY: '-3px' }}
            animate={
              open
                ? { rotate: '45deg', translateY: '1px' }
                : { translateY: '-3px', rotate: '0deg' }
            }
            transition={{ bounce: 0, duration: 0.1 }}
          />
          <motion.div
            className="w-5 origin-center border-t-2 border-primary"
            transition={{ bounce: 0, duration: 0.1 }}
            initial={{ translateY: '3px' }}
            animate={
              open
                ? { rotate: '-45deg', translateY: '-1px' }
                : { translateY: '3px', rotate: '0deg', scaleX: 1 }
            }
          />
        </Button>
      </div>
      {open && (
        <Portal asChild>
          <RemoveScroll
            allowPinchZoom
            enabled
          >
            {isDocs ? (
              <DocsMobileMenu onLinkClicked={handleToggleMobileMenu} />
            ) : (
              <MainMobileMenu onLinkClicked={handleToggleMobileMenu} />
            )}
          </RemoveScroll>
        </Portal>
      )}
    </>
  );
}

type MainMobileMenuProps = {
  onLinkClicked: () => void;
};

function MainMobileMenu({
  onLinkClicked
}: MainMobileMenuProps): React.JSX.Element {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  return (
    <div className="fixed inset-0 z-50 mt-[69px] overflow-y-auto bg-background animate-in fade-in-0">
      <div className="flex size-full flex-col items-start space-y-3 p-4">
        <div className="flex w-full flex-col gap-2">
          <Link
            href={routes.dashboard.auth.SignUp}
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'lg'
              }),
              'w-full rounded-xl'
            )}
            onClick={onLinkClicked}
          >
            Start for free
          </Link>
          <Link
            href={routes.dashboard.auth.SignIn}
            onClick={onLinkClicked}
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'lg'
              }),
              'w-full rounded-xl'
            )}
          >
            Sign in
          </Link>
        </div>
        <ul className="w-full">
          {MENU_LINKS.map((item) => (
            <li
              key={item.title}
              className="py-2"
            >
              {item.items ? (
                <Collapsible
                  open={expanded[item.title.toLowerCase()]}
                  onOpenChange={(isOpen) =>
                    setExpanded((prev) => ({
                      ...prev,
                      [item.title.toLowerCase()]: isOpen
                    }))
                  }
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      className="flex h-9 w-full items-center justify-between px-4 text-left"
                    >
                      <span className="text-base font-medium">
                        {item.title}
                      </span>
                      {expanded[item.title.toLowerCase()] ? (
                        <ChevronUpIcon className="size-4" />
                      ) : (
                        <ChevronDownIcon className="size-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="mt-2 pl-4">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            target={subItem.external ? '_blank' : undefined}
                            rel={
                              subItem.external
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className={cn(
                              buttonVariants({ variant: 'ghost' }),
                              'm-0 h-auto w-full justify-start gap-4 p-1.5'
                            )}
                            onClick={onLinkClicked}
                          >
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
                              {subItem.icon}
                            </div>
                            <div>
                              <span className="text-sm font-medium">
                                {subItem.title}
                                {subItem.external && (
                                  <ExternalLink className="-mt-2 ml-1 inline text-muted-foreground" />
                                )}
                              </span>
                              {subItem.description && (
                                <p className="text-xs text-muted-foreground">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'w-full justify-start'
                  )}
                  onClick={onLinkClicked}
                >
                  <span className="text-base">{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex w-full items-center justify-between gap-2 border-y border-border/40 p-4">
          <div className="text-base font-medium">Theme</div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

type DocsMobileMenuProps = {
  onLinkClicked: () => void;
};

function DocsMobileMenu({
  onLinkClicked
}: DocsMobileMenuProps): React.JSX.Element {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  const pathname = usePathname();
  return (
    <div className="fixed inset-0 z-50 mt-[69px] overflow-y-auto bg-background animate-in fade-in-0">
      <div className="flex size-full flex-col items-start space-y-3 p-4">
        <ul className="w-full">
          {DOCS_LINKS.map((item) => (
            <li
              key={item.title}
              className="py-2"
            >
              <Collapsible
                open={expanded[item.title.toLowerCase()]}
                onOpenChange={(isOpen) =>
                  setExpanded((prev) => ({
                    ...prev,
                    [item.title.toLowerCase()]: isOpen
                  }))
                }
              >
                <CollapsibleTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="flex h-9 w-full items-center justify-between px-4 text-left"
                  >
                    <div className="flex flex-row items-center gap-2 text-base font-medium">
                      {item.icon}
                      {item.title}
                    </div>
                    {expanded[item.title.toLowerCase()] ? (
                      <ChevronUpIcon className="size-4" />
                    ) : (
                      <ChevronDownIcon className="size-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="mt-2 pl-4">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            'm-0 h-auto w-full justify-start gap-4 p-1.5 text-sm font-medium',
                            pathname ===
                              getPathname(subItem.href, baseUrl.Marketing)
                              ? 'font-medium text-foreground bg-accent'
                              : 'text-muted-foreground'
                          )}
                          onClick={onLinkClicked}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-center justify-between gap-2 border-y border-border/40 p-4">
          <div className="text-base font-medium">Theme</div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
