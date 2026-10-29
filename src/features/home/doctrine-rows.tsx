import Link from "next/link";
import { RevealList } from "@/components/reveal-list";
import { RowChevron } from "@/features/home/row-chevron";

export type HomeDoctrine = { id: string; name: string; question: string; href: string | null };

const rowClassName =
  "group/row doctrine-row w-full px-1 pt-4.5 pb-5 text-left no-underline transition-colors duration-150 ease-standard hover:bg-hover sm:px-2 sm:pt-5.5 sm:pb-6";

function RowBody({ doctrine }: { doctrine: HomeDoctrine }) {
  return (
    <>
      <span className="font-head text-answer-name-mobile font-normal text-ink opsz-24 sm:text-answer-name">
        {doctrine.name}
      </span>
      <span className="col-start-1 font-head text-question-mobile font-normal text-ink-2 sm:col-start-2 sm:text-question">
        {doctrine.question}
      </span>
      <RowChevron className="col-start-2 row-start-1 self-center sm:col-start-3" />
    </>
  );
}

export function DoctrineRows({ doctrines }: { doctrines: HomeDoctrine[] }) {
  return (
    <RevealList as="ul" className="m-0 mt-7 list-none p-0">
      {doctrines.map((doctrine) => (
        <li key={doctrine.id} className="border-t border-rule last:border-b">
          {doctrine.href ? (
            <Link href={doctrine.href} className={rowClassName}>
              <RowBody doctrine={doctrine} />
            </Link>
          ) : (
            // TODO: link to the doctrine's page once it is published
            <button type="button" className={`${rowClassName} cursor-pointer`}>
              <RowBody doctrine={doctrine} />
            </button>
          )}
        </li>
      ))}
    </RevealList>
  );
}
