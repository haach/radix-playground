'use client'; // This is a client component 👈🏽
import '@radix-ui/themes/styles.css';
import {Button, Flex, Link, Text} from '@radix-ui/themes';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, {useState} from 'react';
import {HamburgerMenuIcon, DotFilledIcon, CheckIcon, ChevronRightIcon} from '@radix-ui/react-icons';

export default function Home() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState('pedro');
  return (
    <main>
      <Flex direction="column" gap="2" align="start">
        <Text>Can we build a DropdownMenu?</Text>
        <Link href="https://www.radix-ui.com/primitives/docs/components/dropdown-menu">
          https://www.radix-ui.com/primitives/docs/components/dropdown-menu
        </Link>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button aria-label="Customise options">
              <HamburgerMenuIcon />
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
              <DropdownMenu.Item className="DropdownMenuItem">
                New Tab <div className="RightSlot">⌘+T</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">
                New Window <div className="RightSlot">⌘+N</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                New Private Window <div className="RightSlot">⇧+⌘+N</div>
              </DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                  More Tools
                  <div className="RightSlot">
                    <ChevronRightIcon />
                  </div>
                </DropdownMenu.SubTrigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.SubContent className="DropdownMenuSubContent" sideOffset={2} alignOffset={-5}>
                    <DropdownMenu.Item className="DropdownMenuItem">
                      Save Page As… <div className="RightSlot">⌘+S</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem">Create Shortcut…</DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem">Name Window…</DropdownMenu.Item>
                    <DropdownMenu.Separator className="DropdownMenu.Separator" />
                    <DropdownMenu.Item className="DropdownMenuItem">Developer Tools</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                Show Bookmarks <div className="RightSlot">⌘+B</div>
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={urlsChecked}
                onCheckedChange={setUrlsChecked}
              >
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                Show Full URLs
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.Label className="DropdownMenuLabel">People</DropdownMenu.Label>
              <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
                <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="pedro">
                  <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                    <DotFilledIcon />
                  </DropdownMenu.ItemIndicator>
                  Pedro Duarte
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="colm">
                  <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                    <DotFilledIcon />
                  </DropdownMenu.ItemIndicator>
                  Colm Tuite
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>

              <DropdownMenu.Arrow className="DropdownMenuArrow" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </Flex>
    </main>
  );
}
