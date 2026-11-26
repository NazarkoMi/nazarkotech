"use client";

import { useState } from "react";

export default function CopyPromo({ code }: { code: string }) {
  const [status, setStatus] = useState("");

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("Промокод скопійовано");
    } catch {
      setStatus("Виділи промокод і скопіюй його вручну.");
    }
  }

  return (
    <div className="promo-copy">
      <div className="promo-code-row">
        <code>{code}</code>
        <button type="button" onClick={copyCode}>Копіювати промокод</button>
      </div>
      <span className="promo-status" role="status">{status}</span>
    </div>
  );
}
