pragma solidity ^0.4.24;

contract Example {

    uint256 public number;

    constructor(uint256 _number) {
        number = _number;
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }
}
