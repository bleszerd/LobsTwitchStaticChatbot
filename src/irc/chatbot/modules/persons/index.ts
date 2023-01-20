import { NestedCommands } from "../../../core/types";
import { PersonCommand } from "./types";

const generalCommands: string[] = [];

const lobinhodawebCommands = [PersonCommand.ARROTOU];

const nestedCommands: NestedCommands = {
  general: generalCommands,
  lobinhodaweb: lobinhodawebCommands,
};

export default nestedCommands;
