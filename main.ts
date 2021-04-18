input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
        basic.showString("PLAYER A WINS", 60)
control.reset()
    } else if (rope > 4) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
        basic.showString("PLAYER B WINS", 60)
control.reset()
    }
})
