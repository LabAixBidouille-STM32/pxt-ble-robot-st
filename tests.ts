// go right 90 degrees
input.onButtonPressed(Button.A, () => {
    ble_robot_st.turnRight(90);
})
// go forward 10
input.onButtonPressed(Button.B, () => {
    ble_robot_st.driveForwards(10);
})
// stop
input.onButtonPressed(Button.AB, () => {
    ble_robot_st.stop
})

