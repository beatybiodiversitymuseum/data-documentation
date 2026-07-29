---
title: "Specify 7 Prompt Builder"
icon: material/text-box-edit-outline
---

# Specify 7 Prompt Builder

Choose a recipe, replace `<fill in your problem here>` with the problem, then copy it into your agent.

<div class="recipe-builder">
  <div class="recipe-toolbar">
    <label for="recipe-select">Recipe</label>

    <select id="recipe-select">
      <option value="generic.txt">Generic Specify 7 problem</option>
      <option value="data-entry.txt">Data entry form editing</option>
      <option value="taxon.txt">Taxon tree operation</option>
      <option value="locality.txt">Locality operation</option>
      <option value="workbench.txt">WorkBench upload</option>
      <option value="queries.txt">Query Builder</option>
      <option value="statistics.txt">Collection statistics</option>
    </select>

    <button id="copy-recipe" type="button">Copy prompt</button>
    <button id="reset-recipe" type="button">Reset</button>

    <span id="recipe-status" aria-live="polite"></span>
  </div>

  <textarea id="recipe-editor"></textarea>
</div>
