import { Button } from "../UI/Button";
import { PlusIcon } from "../../icons";
import { DialogAddDriver } from "./DialogAddDriver";

export const ButtonAdd = () => {

  const handleOpenAddDriver = () => {
    const dialogAddDriver = document.getElementById('dialog-add-driver')
    dialogAddDriver.showModal()
  }

  return (
    <>
      <div className=" flex flex-row-reverse">
        <Button text="Agregar" onClick={handleOpenAddDriver}>
          <PlusIcon className="size-8" />
        </Button>
      </div>
      <DialogAddDriver />
    </>
  );
};
