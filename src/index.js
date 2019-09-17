import { run } from "./app/app.js";
import "./main.scss";
import { AlertService } from "./app/alert.service.js";
import { ComponentService } from "./app/component.service.js";

const alertService = new AlertService();
const componentService = new ComponentService();
console.log('hiya');
run(alertService, componentService);