const schema = {
  collectionobjectattribute: {
    name: "Collection Object Attribute",
    items: {
      remarks: { name: "Curatorial Notes" },
      collectionobject: { name: "Collection Object" }
    }
  },
  collectionobject: {
    name: "Collection Object",
    items: {
      catalogeddate: { name: "Cataloged Date (Year)" }
    }
  }
};

function renderShoelaceSelector(containerId) {
  const container = document.getElementById(containerId);

  const select = document.createElement("sl-select");
  select.placeholder = "Select a field";
  select.style.width = "100%";

  for (const [tableKey, table] of Object.entries(schema)) {
    const group = document.createElement("sl-option-group");
    group.label = table.name;

    for (const [fieldKey, field] of Object.entries(table.items)) {
      const option = document.createElement("sl-option");
      option.value = `${tableKey}.${fieldKey}`;
      option.textContent = field.name;
      group.appendChild(option);
    }

    select.appendChild(group);
  }

  select.addEventListener("sl-change", (event) => {
    console.log("Selected:", event.target.value);
  });

  container.appendChild(select);
}
