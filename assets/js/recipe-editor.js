(function () {
  let originalTemplate = "";
  let editor = null;

  function getSiteBase() {
    const base = document.querySelector("base");

    if (base && base.href) {
      return new URL(base.href).pathname;
    }

    if (window.location.pathname.startsWith("/data-documentation/")) {
      return "/data-documentation/";
    }

    return "/";
  }

  function setStatus(message) {
    const status = document.getElementById("recipe-status");
    if (status) status.textContent = message;
  }

  async function loadRecipe() {
    const select = document.getElementById("recipe-select");
    if (!select || !editor) return;

    setStatus("Loading…");

    try {
      const siteBase = getSiteBase();
      const templatePath = `${siteBase}assets/prompt-templates/${select.value}`;
      const response = await fetch(templatePath, { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`Could not load recipe: ${response.status}`);
      }

      originalTemplate = (await response.text()).trim();
      editor.setValue(originalTemplate);
      editor.clearHistory();
      setStatus("Loaded.");
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  }

  async function copyRecipe() {
    if (!editor) return;

    const text = editor.getValue();

    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied.");
    } catch (error) {
      const textarea = document.getElementById("recipe-editor");
      textarea.value = text;
      textarea.select();
      document.execCommand("copy");
      setStatus("Copied.");
    }
  }

  function resetRecipe() {
    if (!editor) return;

    editor.setValue(originalTemplate);
    editor.clearHistory();
    setStatus("Reset.");
  }

  function initRecipeEditor() {
    const textarea = document.getElementById("recipe-editor");
    const select = document.getElementById("recipe-select");
    const copyButton = document.getElementById("copy-recipe");
    const resetButton = document.getElementById("reset-recipe");

    if (!textarea || !select || !copyButton || !resetButton) return;

    if (editor) {
      editor.toTextArea();
      editor = null;
    }

    editor = CodeMirror.fromTextArea(textarea, {
      mode: "markdown",
      lineWrapping: true,
      lineNumbers: true,
      viewportMargin: Infinity,
      indentUnit: 2,
      tabSize: 2,
      theme: "default",
      extraKeys: {
        "Cmd-A": "selectAll",
        "Ctrl-A": "selectAll"
      }
    });

    select.addEventListener("change", loadRecipe);
    copyButton.addEventListener("click", copyRecipe);
    resetButton.addEventListener("click", resetRecipe);

    loadRecipe();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initRecipeEditor);
  } else {
    document.addEventListener("DOMContentLoaded", initRecipeEditor);
  }
})();