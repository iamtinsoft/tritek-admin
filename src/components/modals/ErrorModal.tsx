import { Button } from "../../components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

export const ErrorModal = ({ errorMessage }: any) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent background={"red.200"}>
        <DialogHeader>
          <DialogTitle>Error</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>{errorMessage}</p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          {/* <Button>Save</Button> */}
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
