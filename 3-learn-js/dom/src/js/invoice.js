// data
const products = [
  {
    id: 1,
    name: "Domain",
    price: 13,
  },
  {
    id: 2,
    name: "Hosting",
    price: 60,
  },
  {
    id: 3,
    name: "Design Package",
    price: 250,
  },
  {
    id: 4,
    name: "Web Development",
    price: 500,
  },
];

// selector

const app = document.querySelector("#app");
const addRecord = app.querySelector("#addRecord");
const recordList = app.querySelector("#recordList");
const productSelect = app.querySelector('[name="product_id"]');
const costTotal = app.querySelector("#costTotal");

// function
const createOption = (content, value) => {
  const option = document.createElement("option");
  option.innerText = content;
  option.value = value;
  return option;
};

const createRecordRow = (id, productName, productPrice, quantity) => {
  const recordRow = document.createElement("tr");
  recordRow.className = "border-b border-neutral-200";
  recordRow.classList.add("record-row");
  recordRow.innerHTML = `
    <td class="p-3"></td>
    <td class="p-3">${productName}</td>
    <td class="p-3 text-end">${productPrice}</td>
    <td class="p-3 text-end">${quantity}</td>
    <td class="p-3 text-end record-row-cost">${productPrice * quantity}</td>
    `;
  return recordRow;
};

const recordTotal = () => {
  //   const recordRowCosts = document.querySelectorAll(".record-row-cost");
  //   let total = 0;
  //   recordRowCosts.forEach((el) => (total += parseFloat(el.innerText)));
  costTotal.innerText = [...app.querySelectorAll(".record-row-cost")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
};

// handlers
const addRecordHandler = (event) => {
  event.preventDefault();
  // collect form data
  const formData = new FormData(addRecord);

  // find product
  const { id, name, price } = products.find(
    (product) => product.id == formData.get("product_id")
  );

  recordList.append(createRecordRow(id, name, price, formData.get("quantity")));

  addRecord.reset();
  recordTotal();
  //   console.log(formData.get("product_id"), formData.get("quantity"));
  //   console.log(currentProduct);
};

// render
products.forEach(({ name, id }) => {
  // productSelect.append(createOption(product.name,product.id))
  productSelect.append(new Option(name, id));
});

// listener
addRecord.addEventListener("submit", addRecordHandler);
