# BleRobot blocks for stm32-iot-node

Blocks that support [BLE robot by ST](https://www.st.com)

## BLERobot

* turn around

```blocks
input.buttonD4.onEvent(ButtonEvent.Click, function () {
    ble_robot_st.turnRight(90);
})
```

* go forward

```blocks
input.buttonD3.onEvent(ButtonEvent.Click, function () {
    ble_robot_st.driveForwards(10);
})
```

* stop both motors

```blocks
input.buttonD2.onEvent(ButtonEvent.Click, function () {
	    ble_robot_st.stop();
})
```

## License

MIT

## Supported targets

* for PXT/stm32-iot-node
(The metadata above is needed for package search.)


```package
pxt-ble-robot-st=github:LabAixBidouille-STM32/pxt-ble-robot-st
```