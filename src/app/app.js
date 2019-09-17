import { inputsAreValid } from "./utils/inputs-are-valid.js";
import { parseInputs } from "./utils/parse-inputs.js";
import { AlertService } from "./alert.service.js";
import { ComponentService } from "./component.service.js";

const alertService = new AlertService();
const componentService = new ComponentService();

export const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};
