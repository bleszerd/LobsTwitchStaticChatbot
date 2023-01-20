import { NestedCommands } from "../../../core/types";
import { GreetingsCommand } from "./types";

const generalCommands = [GreetingsCommand.BOMDIA];

const lobinhodawebCommands: string[] = [];

const nestedCommands: NestedCommands = {
  general: generalCommands,
  lobinhodaweb: lobinhodawebCommands,
};

export default nestedCommands;
