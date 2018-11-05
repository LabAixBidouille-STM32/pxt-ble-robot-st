# BleRobot blocks for STM32IOTNODE

Blocks that support [BLE robot by ST](https://www.st.com)

## BLERobot

* turn around

```blocks
input.onButtonPressed(Button.A, () => {
    ble_robot_st.turnRight(90);
})
```

* go forward

```blocks
input.onButtonPressed(Button.B, () => {
    ble_robot_st.driveForwards(10);
})
```

* stop both motors when pressing ``A+B``

```blocks
input.onButtonPressed(Button.AB, () => {
    ble_robot_st.stop();
})
```

## License

MIT

## Supported targets

* for PXT/STM32IOTNODE
(The metadata above is needed for package search.)


```package
pxt-ble-robot-st=github:LabAixBidouille-STM32/pxt-ble-robot-st
```