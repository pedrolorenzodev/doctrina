"use client";

import { useId, useRef, useState, type FormEvent } from "react";

type MailText = {
  title: string;
  text: string;
  label: string;
  placeholder: string;
  submit: string;
  invalid: string;
  done: string;
};

export function MailForm({ text }: { text: MailText }) {
  const [message, setMessage] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const id = useId();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const field = input.current!;
    if (!field.value.trim() || !field.checkValidity()) {
      setMessage(text.invalid);
      field.focus();
      return;
    }
    // TODO: send the address to the mailing list once the backend exists
    setMessage(text.done);
    field.value = "";
  }

  return (
    <section aria-labelledby={`${id}-title`} className="mt-section max-w-col border-t border-rule pt-7">
      <h2 id={`${id}-title`} className="m-0 font-head text-h3 font-normal text-ink">
        {text.title}
      </h2>
      <p className="mt-2 mb-0 text-sub text-ink-3">{text.text}</p>
      <form noValidate onSubmit={submit} className="mt-4 flex flex-wrap gap-2.5">
        <label htmlFor={`${id}-input`} className="sr-only">
          {text.label}
        </label>
        <input
          ref={input}
          id={`${id}-input`}
          type="email"
          required
          autoComplete="email"
          placeholder={text.placeholder}
          className="min-h-10.5 mail-field min-w-0 rounded-6 border border-rule-2 bg-card px-3 text-ui-base text-ink transition-colors duration-150 ease-standard placeholder:text-ink-3"
        />
        <button
          type="submit"
          className="inline-flex min-h-10.5 cursor-pointer items-center justify-center gap-2 rounded-7 border border-rule-2 bg-card px-4 text-ui-sm font-medium text-ink transition-colors duration-150 ease-standard hover:border-ink hover:bg-hover pointer-coarse:min-h-11"
        >
          {text.submit}
        </button>
      </form>
      <p role="status" className="mt-3 mb-0 min-h-5.25 text-ui-sm leading-normal text-ink-2">
        {message}
      </p>
    </section>
  );
}
