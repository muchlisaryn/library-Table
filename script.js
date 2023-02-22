class Table {
  constructor(init) {
    this.init = init;
  }

  header(data) {
    let open = "<thead>";
    let close = "</thead>";
    data.forEach((d) => {
      open += `
      <tr>
        <th>${d[0]}</th>
        <th>${d[1]}</th>
        <th>${d[2]}</th>
      </tr>`;
    });
    return open + close;
  }

  body(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
      <tr>
      <td>${d[0]}</td>
      <td>${d[1]}</td>
      <td>${d[2]}</td>
    </tr>`;
    });
    return open + close;
  }

  render(elemen) {
    let table =
      "<table class='table table-hover'>" +
      this.header(this.init.columns) +
      this.body(this.init.data) +
      "</table>";
    elemen.innerHTML = table;
  }
}

const table = new Table({
  columns: [["Name", "Email", "Alamat"]],
  data: [
    ["Muchlis", "muchlisar68@gmail.com", "Jln Cempaka Putih"],
    ["Fendi", "fendiee8@gmail.com", "Jln Manggarai"],
    ["Dimas", "masdimas2@gmail.com", "Jln kali sunter"],
  ],
});

const dataTable = document.getElementById("table");
table.render(dataTable);
