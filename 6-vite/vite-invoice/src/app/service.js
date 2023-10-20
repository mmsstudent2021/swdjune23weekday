import { products } from "../core/data";
import { addService, productSelect, serviceList } from "../core/selectors";

export const createService = (id, name, price) => {
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

export const addServiceHandler = (event) => {
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
  productSelect.append(new Option(formData.get("service_name"), newId));
  addService.reset();
};
