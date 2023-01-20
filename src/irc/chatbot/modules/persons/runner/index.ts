import { PersonCommand } from "../types";

class PersonsCommandRunner {
  static arrotouCount = 1;

  public async runCommand(command: string, args: string[], streamer: string) {
    switch (command) {
      case PersonCommand.ARROTOU:
        return this.arrotou(command, args, streamer);
    }
  }

  private async arrotou(command: string, args: string[], streamer: string) {
    const response = `Essa é a ${PersonsCommandRunner.arrotouCount}ª vez que a lobs arrota em live!`;

    PersonsCommandRunner.arrotouCount++;

    return response;
  }
}

export default PersonsCommandRunner;
