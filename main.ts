let reading = 0
basic.forever(function () {
    reading = input.soundLevel()
    led.plotBarGraph(
    reading,
    255
    )
})
