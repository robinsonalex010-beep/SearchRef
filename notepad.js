/* My notes: a free-text notepad saved in this browser on this computer only.
   Shared by the homepage and the patient resources page, so both show the same notes. */
(function () {
  const KEY = "gp-notepad-v1";

  const CSS = `
    .np-text { width: 100%; font: inherit; font-size: 0.9375rem; line-height: 1.5; color: var(--ink); background: var(--field);
      border: 1px solid var(--rule); border-radius: 4px; padding: 0.6rem 0.7rem; resize: vertical; min-height: 9rem; }
    .np-text:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
    .np-bar { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.4rem; }
    .np-status { font-size: 0.8125rem; color: var(--muted); }
    .np-buttons { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .np-save, .np-load { font: inherit; font-size: 0.8125rem; font-weight: 600; color: var(--accent); background: transparent;
      border: 1px solid var(--accent); border-radius: 4px; padding: 0.25rem 0.65rem; cursor: pointer; }
    .np-load:focus-within { outline: 2px solid var(--accent); outline-offset: 2px; }
    .np-note { font-size: 0.8125rem; color: var(--muted); margin: 0.4rem 0 0; }`;
  if (!document.getElementById("np-style")) {
    const st = document.createElement("style");
    st.id = "np-style"; st.textContent = CSS;
    document.head.append(st);
  }

  window.gpNotepad = function (container) {
    container.innerHTML =
      '<textarea class="np-text" rows="8" spellcheck="true" aria-label="My notes" ' +
      'placeholder="Useful numbers, extensions, reminders… (no patient details)"></textarea>' +
      '<div class="np-bar">' +
      '<span class="np-status" aria-live="polite"></span>' +
      '<span class="np-buttons">' +
      '<button type="button" class="np-save">Save to a file</button>' +
      '<label class="np-load">Load from a file<input type="file" accept=".txt,text/plain" hidden></label>' +
      '</span></div>' +
      '<p class="np-note">Saved automatically in this browser on this computer, and nowhere else. Some NHS computers clear this at log-off, so keep a copy with “Save to a file”. Not for patient details.</p>';

    const box = container.querySelector(".np-text");
    const status = container.querySelector(".np-status");
    let saved = "";
    try { saved = localStorage.getItem(KEY) || ""; } catch (e) {}
    box.value = saved;

    let timer;
    box.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        try { localStorage.setItem(KEY, box.value); status.textContent = "Saved"; }
        catch (e) { status.textContent = "Couldn’t save in this browser; use “Save to a file”"; }
        setTimeout(() => { status.textContent = ""; }, 2000);
      }, 400);
    });

    // Keep two open tabs in step
    window.addEventListener("storage", e => { if (e.key === KEY && e.newValue !== box.value) box.value = e.newValue || ""; });

    container.querySelector(".np-save").addEventListener("click", () => {
      const blob = new Blob([box.value], { type: "text/plain" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "my-notes.txt";
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });

    container.querySelector(".np-load input").addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;
      if (box.value.trim() && !confirm("Replace your current notes with the ones in this file?")) { e.target.value = ""; return; }
      file.text().then(t => {
        box.value = t;
        try { localStorage.setItem(KEY, t); } catch (err) {}
        status.textContent = "Loaded";
        setTimeout(() => { status.textContent = ""; }, 2000);
        e.target.value = "";
      });
    });
  };
})();
