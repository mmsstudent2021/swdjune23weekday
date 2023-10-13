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
const manageProduct = app.querySelector("#manageProduct");
const manageProductBox = app.querySelector("#manageProductBox");
const closeManageProductBox = app.querySelector("#closeManageProductBox");
const serviceList = app.querySelector("#serviceList");
const addService = app.querySelector("#addService");
const print = app.querySelector("#print");

// function
const createOption = (content, value) => {
  const option = document.createElement("option");
  option.innerText = content;
  option.value = value;
  return option;
};

const createService = (id, name, price) => {
  const service = document.createElement("div");
  service.innerHTML = `
  <div class="border-2 flex justify-between p-3 mb-3">
    <p class=" text-lg font-bold">${name}</p>
    <p>
      $<span>${price}</span>
    </p>
  </div>
  `;
  return service;
};

const createRecordRow = (id, productName, productPrice, quantity) => {
  const recordRow = document.createElement("tr");
  recordRow.className = "border-b border-neutral-200 group";
  recordRow.classList.add("record-row");
  recordRow.setAttribute("product-id", id);
  recordRow.innerHTML = `
    <td class="p-3"></td>
    <td class="p-3">${productName}</td>
    <td class="p-3 record-row-price text-end">${productPrice}</td>

    <td class="p-3 text-end">
                <button
                  class="record-row-decrement-q bg-neutral-500 leading-3 p-1 opacity-0 group-hover:opacity-100 duration-300 -translate-x-3 group-hover:translate-x-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 stroke-white pointer-events-none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
                <span class="record-row-q">${quantity}</span>
                <button
                  class="record-row-increment-q bg-neutral-500 leading-3 p-1 opacity-0 group-hover:opacity-100 duration-300 translate-x-3 group-hover:translate-x-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 stroke-white pointer-events-none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </td>
    <td class="p-3 text-end  relative">
    <span class='record-row-cost  '>${productPrice * quantity}</span>
    <button class="record-row-del bg-neutral-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square h-full absolute top-0 right-0 translate-x-[120%] group-hover:translate-x-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 stroke-white pointer-events-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
    </td>
    `;

  // const recordRowDel = recordRow.querySelector(".record-row-del");
  // recordRowDel.addEventListener("click", recordRowDelHandler);

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

const printHandler = () => {
  // ??
  const rows = app.querySelectorAll(".record-row");
  const recordData = [...rows].map(row => {
    return {
      serviceId : parseInt(row.getAttribute("product-id")),
      quantity : parseInt(row.querySelector(".record-row-q").innerText),
      cost : parseFloat(row.querySelector(".record-row-cost").innerText),
    }
  })

  console.log({
    customer_name : "kyaw kyaw",
    timestamp : Date.now() ,
    total : parseFloat(costTotal.innerText) ,
    recordData
  });

  window.print();

  rows.forEach(row => row.remove());
  costTotal.innerText = 0;
  
}

const addServiceHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(addService);
  const newId = products[products.length - 1].id + 1;
  const newService = {
    id: newId,
    name: formData.get("service_name"),
    price: formData.get("service_price"),
  };
  // data update
  products.push(newService);
  // ui update
  serviceList.append(
    createService(
      newId,
      formData.get("service_name"),
      formData.get("service_price")
    )
  );
  productSelect.append(new Option(formData.get("service_name"),newId));
  addService.reset()
};

const manageProductHandler = () => {
  console.log("hello");
  manageProductBox.classList.toggle("translate-x-full");
  // manageProductBox.classList.add("duration-300")
};

const recordRowQuantityIncrement = (productId, quantity = 1) => {
  const currentRecordRow = app.querySelector(`[product-id='${productId}']`);
  const currentRecordQuantity = currentRecordRow.querySelector(".record-row-q");
  const currentRecordRowCost =
    currentRecordRow.querySelector(".record-row-cost");
  const currentRecordRowPrice =
    currentRecordRow.querySelector(".record-row-price");
  currentRecordQuantity.innerText =
    parseInt(currentRecordQuantity.innerText) + parseInt(quantity);
  currentRecordRowCost.innerText =
    currentRecordQuantity.innerText * currentRecordRowPrice.innerText;
  recordTotal();
};

const recordRowDelHandler = (event) => {
  const recordRow = event.target.closest(".record-row");
  if (confirm("Are U sure to delete?")) {
    recordRow.remove();
    recordTotal();
  }
};

const addRecordHandler = (event) => {
  event.preventDefault();
  // collect form data
  const formData = new FormData(addRecord);

  // find product
  const { id, name, price } = products.find(
    (product) => product.id == formData.get("product_id")
  );

  const isExitedRow = [...app.querySelectorAll("[product-id]")].find((el) => {
    return el.getAttribute("product-id") == formData.get("product_id");
  });

  if (isExitedRow) {
    console.log("update quantity");
    recordRowQuantityIncrement(
      formData.get("product_id"),
      formData.get("quantity")
    );
  } else {
    console.log("add new row");
    recordList.append(
      createRecordRow(id, name, price, formData.get("quantity"))
    );
    recordTotal();
  }

  addRecord.reset();
  //   console.log(formData.get("product_id"), formData.get("quantity"));
  //   console.log(currentProduct);
};

// render
products.forEach(({ name, id, price }) => {
  // productSelect.append(createOption(product.name,product.id))
  productSelect.append(new Option(name, id));
  serviceList.append(createService(id, name, price));
});

// listener
addRecord.addEventListener("submit", addRecordHandler);
recordList.addEventListener("click", (event) => {
  const currentRecordRow = event.target.closest(".record-row");
  // console.log("U click");
  if (event.target.classList.contains("record-row-del")) {
    recordRowDelHandler(event);
  } else if (event.target.classList.contains("record-row-increment-q")) {
    recordRowQuantityIncrement(currentRecordRow.getAttribute("product-id"));
  }
});

manageProduct.addEventListener("click", manageProductHandler);
closeManageProductBox.addEventListener("click", manageProductHandler);
addService.addEventListener("submit", addServiceHandler);
print.addEventListener("click",printHandler);
