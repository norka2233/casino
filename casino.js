
class User {
  constructor(name,money) {
    this._name = name;
    this._money = money;

  }
  play(money) {
    if(money > this._money){
      return false;
    }
    GameMachine = new GameMachine(money);
    return GameMachine.playGame(money);
  }
  checkMoneyPositive(){
    if (this._money < 0 ) {
      return false;
    }
    else {
      return true;
    }
  }
}

class SuperAdmin extends User{
  constructor( name, money) {
    this._name = name;
    this._money = money;
    this._casino = null;

  }
  takeMoney(number) {
    return true;
  }
  createNewCasino(){
    return new Casino();
  }
  createGameMachine(startCapital){
    if(this._casino === null) {
      throw TypeError("admin doesn't have casino")
    }
    if(startCapital > this._money) {
      throw RangeError("not enough money");
    }
    return new GameMachine(startCapital);
  }
  takeMoneyFromCasino(number) {
    var machineList = this._casino._gameMachines;
    let bubbleSort = (machineList) => {
      let len = machineList.length;
      let swapped;
      do {
      swapped = false;
      for (let i = 0; i < len; i++) {
          if (machineList[i].getMoney() > machineList[i + 1].getMoney()) {
              let tmp = machineList[i];
              machineList[i] = machineList[i + 1];
              machineList[i + 1] = tmp;
              swapped = true;
            }
          }
        } while (swapped);
      return machineList.reduce((a, b) => a + b);
    };
    return sum(machineList);
  }
  addMoneyToMachine(money, ordNumber){
    this._casino._gameMachines[ordNumber].putMoney(money);
  }
  deleteMachine(ordNumber){
    var machineToDelete = this._casino._gameMachines[ordNumber];
    var moneyToSave = machineToDelete.getMoney();
    moneyToSave / machineList.length
    this._casino._gameMachines.splice(ordNumber);
    }
}

class GameMachine {
  constructor(ordNumber) {
    this.ordNumber = ordNumber;
  }
  //"get money in GameMachine"
  getMoney(){
    return true;
  }
  //"take money from GameMachines"
  takeMoney(number){
    return true;
  }
  putMoney(number) {

    return true;
  }
  playGame(number) {
    return true;
  }

}


class Casino {
  constructor(name) {
    this.name = name;
    this._gameMachines = [];
  }
  getMoney(number) {
    return true;
  }
  getMachineCount() {
    return true;
  }
  createNewGameMachine(){
    return new Casino();
  }
}

lasVegas = new Casino("DUPAKONIA")
console.log(lasVegas.getMachineCount);
