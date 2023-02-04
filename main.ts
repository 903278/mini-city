function path () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 55)
    basic.pause(100)
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 60)
    basic.pause(100)
    Kitronik_Move_Motor.stop()
}
