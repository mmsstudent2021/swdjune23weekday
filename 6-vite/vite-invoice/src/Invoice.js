import { productRender } from "./app/product";
import { addRecordHandler, recordObserver } from "./app/record";
import { addServiceHandler } from "./app/service";
import { manageProductHandler, printHandler, recordListHandler } from "./core/handlers";
import { addRecord, addService, closeManageProductBox, manageProduct, print, recordList } from "./core/selectors";

class Invoice {


    initialRender(){
        productRender()
    }


    listener(){
        manageProduct.addEventListener("click",manageProductHandler)
        closeManageProductBox.addEventListener("click",manageProductHandler)
        addRecord.addEventListener("submit",addRecordHandler)
        recordList.addEventListener("click",recordListHandler)
        addService.addEventListener("submit",addServiceHandler)
        print.addEventListener("click",printHandler)
    }

    observer(){
        recordObserver()
    }

    init(){
        console.log("Invoice App Start");
        this.observer()
        this.initialRender()
        this.listener()

    }

}

export default Invoice;