input.onButtonPressed(Button.A, function () {
    record.setSampleRate(11000)
    basic.showIcon(IconNames.Heart)
    record.playAudio(record.BlockingState.Nonblocking)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(20000)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    record.playAudio(record.BlockingState.Nonblocking)
    basic.clearScreen()
})
